function FindProxyForURL(url, host) {
    var companyProxy = "PROXY 10.16.100.150:1082; DIRECT";
    var isTargetStandard = (
        // Google
        shExpMatch(host, "*.google.com")            ||
        shExpMatch(host, "*.googleusercontent.com") ||
        shExpMatch(host, "*.gstatic.com")           ||
        // Wikipedia
        shExpMatch(host, "*.wikipedia.org")         ||
        shExpMatch(host, "*.wikimedia.org")         ||
        shExpMatch(host, "*.wikisource.org")        ||
        // CDN
        //// StackExchange
        shExpMatch(host, "*.gravatar.com")          ||
        shExpMatch(host, "*.googletagmanager.com")
    );

    if (isTargetStandard) {
        return companyProxy;
    }
    
    return "DIRECT";
}
