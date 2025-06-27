require 'sinatra'
require 'json'

before do
  content_type :json
end

get '/version' do
  { version: '2.6' }.to_json
end

get '/v2/features' do
  {
    puppet: { state: 'running' },
    puppetca: { state: 'running' }
  }.to_json
end

get '/puppet/environments' do
  ["production"].to_json
end

get '/puppet/ca' do
  [].to_json
end

get '/puppet/ca/autosign' do
end

get '/puppet/environments/production/classes' do
  [
    {
      test: {
        name: 'test',
        module: nil,
        params: {
          variable: 'var1'
        }
      }
    }
  ].to_json
end
