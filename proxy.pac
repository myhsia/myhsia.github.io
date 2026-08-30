function FindProxyForURL(url, host) {
    var companyProxy = "PROXY 10.16.100.150:1082; DIRECT";
    
    var isTargetStandard = (
        // Google
        dnsDomainIs(host, "google.com")             ||
        dnsDomainIs(host, "googleapis.com")         ||
        dnsDomainIs(host, "googleusercontent.com")  ||
        dnsDomainIs(host, "gstatic.com")            ||
        dnsDomainIs(host, "withgoogle.com")         ||
        
        // Wikipedia
        dnsDomainIs(host, "wikipedia.org")          ||
        dnsDomainIs(host, "wikimedia.org")          ||
        dnsDomainIs(host, "wikisource.org")         ||
        
        // Git
        dnsDomainIs(host, "githubassets.com")       ||
        shExpMatch (host, "://github.com")          ||
        shExpMatch (host, "://github.com")          ||
        
        // Tech
        dnsDomainIs(host, "linux.do")               ||
        dnsDomainIs(host, "v2ex.com")               ||
        
        // CDN & Others
        //// StackExchange
        dnsDomainIs(host, "gravatar.com")           ||
        //// Python
        shExpMatch (host, "analytics.python.org")   ||
        dnsDomainIs(host, "ethicalads.io")          ||
        //// ScienceDirect
        dnsDomainIs(host, "pendo.io")               ||
        dnsDomainIs(host, "elsevier.com")           ||
        shExpMatch (host, "://newrelic.com")
    );

    if (isTargetStandard) {
        return companyProxy;
    }
    
    return "DIRECT";
}
