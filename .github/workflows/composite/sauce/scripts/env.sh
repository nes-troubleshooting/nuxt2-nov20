

####################################################################################################
# Define SauceLabs environment variables for CircleCI.
####################################################################################################
export BROWSER_PROVIDER="saucelabs"
export BROWSERS="SL_Chrome,SL_Chrome-1,\
SL_Firefox,SL_Firefox-1,\
SL_Safari,SL_Safari-1,\
SL_iOS,SL_iOS-1,\
SL_IE_9,SL_IE_10,SL_IE_11,\
SL_Edge,SL_Edge-1"

# The following two values are used by the `sauce-connect-launcher` npm package to download
# SauceConnect.
export SAUCE_CONNECT_VERSION='4.8.2'
export SAUCE_CONNECT_DOWNLOAD_ON_INSTALL='true'
export SAUCE_TUNNEL_IDENTIFIER="oauth-aavorthmann-7c838_tunnel_name"
# Amount of seconds we wait for sauce-connect to establish a tunnel instance. In order to not
# acquire CircleCI instances for too long if sauce-connect failed, we need a connect timeout.
export SAUCE_READY_FILE_TIMEOUT='1800'