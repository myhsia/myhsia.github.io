function isDomain(host, domain) {
    return host == domain || dnsDomainIs(host, "." + domain);
}

function FindProxyForURL(url, host) {
    var companyProxy = "PROXY 10.11.50.100:1082; DIRECT";

    host = host.toLowerCase();
    if (host.charAt(host.length - 1) == ".") {
        host = host.substring(0, host.length - 1);
    }
    
    var isTargetStandard = (
        // Google
        isDomain(host, "google.com")                        ||
        isDomain(host, "goo.gl")                            ||
        isDomain(host, "g.co")                              ||
        isDomain(host, "googleapis.com")                    ||
        isDomain(host, "googleusercontent.com")             ||
        isDomain(host, "googlevideo.com")                   ||
        isDomain(host, "gstatic.com")                       ||
        isDomain(host, "ggpht.com")                         ||
        isDomain(host, "withgoogle.com")                    ||
        isDomain(host, "about.google")                      ||
        isDomain(host, "blog.google")                       ||
        isDomain(host, "doodles.google")                    ||
        isDomain(host, "grow.google")                       ||
        isDomain(host, "learning.google")                   ||
        isDomain(host, "notebooklm.google")                 ||
        isDomain(host, "safety.google")                     ||
        isDomain(host, "accounts.blogger.com")              ||
        host == "accounts.google.gr"                        ||
        shExpMatch(host, "accounts.google.com.*")           ||
        host == "apac.thinkwithgoogle.com"                  ||
        host == "testmysite.thinkwithgoogle.com"            ||
        host == "www.thinkwithgoogle.com"                   ||
        dnsDomainIs(host, ".scf.usercontent.goog")          ||

        // Android
        isDomain(host, "developer.android.com")             ||
        isDomain(host, "www.android.com")                   ||

        // YouTube
        isDomain(host, "youtube.com")                       ||
        host == "www.youtube-nocookie.com"                  ||
        host == "i.ytimg.com"                               ||
        
        // Wikipedia
        isDomain(host, "wikipedia.org")                     ||
        isDomain(host, "wikimedia.org")                     ||
        isDomain(host, "wikisource.org")                    ||
        isDomain(host, "wikibooks.org")                     ||
        isDomain(host, "wikinews.org")                      ||
        isDomain(host, "wikiquote.org")                     ||
        isDomain(host, "wikivoyage.org")                    ||
        isDomain(host, "wiktionary.org")                    ||
        isDomain(host, "wikiversity.org")                   ||
        isDomain(host, "mediawiki.org")                     ||
        isDomain(host, "wikidata.org")                      ||
        isDomain(host, "wikifunctions.org")                 ||
        host == "phab.wmfusercontent.org"                   ||
        host == "tools-static.wmflabs.org"                  ||
        host == "tools.wmflabs.org"                         ||
        host == "xtools.wmflabs.org"                        ||
        host == "w.wiki"                                    ||
        
        // Git
        isDomain(host, "githubassets.com")                  ||
        host == "raw.githubusercontent.com"                 ||
        host == "github.myshopify.com"                      ||
        host == "octocaptcha.com"                           ||
        
        // AI
        //// Hugging Face
        isDomain(host, "huggingface.co")                    ||
        host == "cas-bridge.xethub.hf.co"                   ||
        //// Microsoft Copilot
        host == "copilot.microsoft.com"                     ||
        //// Perplexity
        host == "www.perplexity.ai"                         ||
        //// Others
        host == "3dserver.hitem3d.ai"                       ||
        
        // Docker
        isDomain(host, "docker.com")                        ||
        isDomain(host, "docker.io")                         ||
        isDomain(host, "dockerstatic.com")                  ||
        
        // Academic
        //// bioRxiv
        isDomain(host, "biorxiv.org")                       ||
        //// NCBI
        host == "ftp.wip.ncbi.nlm.nih.gov"                  ||
        host == "www.ncbi.nlm.nih.gov"                      ||
        //// SAGE
        host == "journals.sagepub.com"                      ||
        //// DARPA
        host == "www.darpa.mil"                             ||
        //// LMFDB
        host == "www.lmfdb.org"                             ||
        
        // Tech
        isDomain(host, "linux.do")                          ||
        isDomain(host, "v2ex.com")                          ||
        host == "xdaforums.com"                             ||
        
        // CDN & Others
        //// IHS
        isDomain(host, "cloudflareinsights.com")            ||
        isDomain(host, "gravatar.com")                      ||
        isDomain(host, "imgur.com")                         ||
        isDomain(host, "stripe.network")                    ||
        //// Python
        isDomain(host, "analytics.python.org")              ||
        isDomain(host, "ethicalads.io")                     ||
        //// ScienceDirect
        isDomain(host, "pendo.io")                          ||
        isDomain(host, "elsevier.com")                      ||
        isDomain(host, "newrelic.com")                      ||
        //// CDN
        host == "cdn.jsdelivr.net"                          ||
        //// Google Ads
        host == "survey.g.doubleclick.net"                  ||
        //// Others
        host == "blala.ink"                                 ||
        host == "url.fengxinzi.work"
    );

    if (isTargetStandard) {
        return companyProxy;
    }
    
    return "DIRECT";
}