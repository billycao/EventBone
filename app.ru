proto = proc do |env|
  file = File.read('.' + env['REQUEST_PATH'] + 'index.html')

  [
    200,          # Status code
    {             # Response headers
      'Content-Type' => 'text/html',
      'Content-Length' => file.length.to_s,
    },
    [file]        # Response body
  ]
end

# You can install Rack middlewares
# to do some crazy stuff like logging,
# filtering, auth or build your own.
use Rack::CommonLogger

run proto

# puts ARGV.inspect
# path = env['REQUEST_PATH']
# Launchy.open("http://localhost:4000#{path}")
