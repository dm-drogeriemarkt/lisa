Fog.mock!

module VmwareExtensions
  extend ActiveSupport::Concern

  module Overrides
    def client
      super.tap do |c|
        def c.data
          @data ||= begin
            super.tap do |super_data|
              super_data[:networks].map do |k, v|
                v['name'] = 'VM Network'
                v["vlanid"] = 1
              end
            end.nested_under_indifferent_access
          end

          @data
        end
      end
    end
  end

  included do
    prepend Overrides
  end
end

::Foreman::Model::Vmware.include(VmwareExtensions)

module CreateVmExtensions
  extend ActiveSupport::Concern

  module Overrides
    def create_vm(attributes = {})
      super.tap do |id|
        data[:servers][id]['interfaces'].first['mac'] = 6.times.map { '%02x' % rand(0..255) }.join(':')
      end
    end
  end

  included do
    prepend Overrides
  end
end

require File.join(Gem::Specification.find_by_name('fog-vsphere').gem_dir, 'lib', 'fog', 'vsphere', 'requests', 'compute', 'create_vm.rb')

Fog::Vsphere::Compute::Mock.include(CreateVmExtensions)

