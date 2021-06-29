all_locations = Location.all
all_organizations = Organization.all

def puppet_class_importer
  ForemanPuppet::PuppetClassImporter
rescue NameError
  PuppetClassImporter
end

smart_proxy = SmartProxy.create!(
  name: 'SmartProxyLisa',
  url: 'http://localhost:8800',
  locations: all_locations,
  organizations: all_organizations
).tap do |smart_proxy|
  puppet_class_importer.new({ url: smart_proxy.url }).changes['new'].map do |key, value|
    puppet_class_importer.new.send(:add_classes_to_foreman, key, value)
  end
end

domain = Domain.create!(
  name: 'development.example.com',
  locations: all_locations,
  organizations: all_organizations
).tap do |domain|
  domain.subnets.create!(
    name: 'SubnetLisa',
    network: '127.0.0.1',
    mask: '255.255.255.0',
    vlanid: 1,
    locations: all_locations,
    organizations: all_organizations
  )
end

ComputeResource.create!(
  name: 'ComputeResourceLisa ',
  provider: 'Vmware',
  uuid: 'Solutions',
  url: 'http://localhost:8283',
  user: 'user',
  password: 'password',
  http_proxy_id: smart_proxy.id,
  domain: domain,
  caching_enabled: false,
  locations: all_locations,
  organizations: all_organizations
)

Operatingsystem.create!(
  name: 'OSLisa',
  major: 1,
  media: Medium.all,
  ptables: Ptable.all,
  architectures: Architecture.all
)
