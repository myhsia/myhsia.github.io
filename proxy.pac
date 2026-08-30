function FindProxyForURL(url, host) {
    var companyProxy = "PROXY 10.16.100.150:1082; DIRECT";
    var isTargetStandard = (
        // Google
        shExpMatch(host, "*.google.com")            ||
        shExpMatch(host, "*.googleusercontent.com") ||
        shExpMatch(host, "*.gstatic.com")           ||
        shExpMatch(host, "*.withgoogle.com")        ||
        // Wikipedia
        shExpMatch(host, "*.wikipedia.org")         ||
        shExpMatch(host, "*.wikimedia.org")         ||
        shExpMatch(host, "*.wikisource.org")        ||
        // Git
        shExpMatch(host, "*.githubassets.com")      ||
        shExpMatch(host, "*.api.github.com")        ||
        shExpMatch(host, "*.collector.github.com")  ||
        // CDN
        //// StackExchange
        shExpMatch(host, "*.gravatar.com")
    );

    if (isTargetStandard) {
        return companyProxy;
    }
    
    return "DIRECT";
}
