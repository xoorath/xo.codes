                                  **xo.codes**
          [home](../../index.html) / articles / 2025 / recommendations

# Preferences:

* I prefer software that is local first. Clouds tend to have privacy issues,
  security issues, outages and anti-user incentives.
* I prefer software written by small independent teams. Trusting some random
  person's personal repository is a lot easier for me to do than big tech
  corporations.
* I prefer hosting my data in the EU where data privacy laws are typically
  better than in the US.
* I prefer simple tools with fewer features as they tend to be more reliable,
  less disruptive and better at serving their niche.
* I prefer to give services only the data they require about me to provide a
  service. I use 
  [sock puppet accounts](https://kalilinuxtutorials.com/sock-puppets-osint-guide/)
  when interacting with most services that do not need my identity.

If you have a better recommendation for one of these, let me know!

# Servers & infrastructure

* [Synology](https://www.synology.com/en-us)
  * NAS
  * [Plex](https://www.plex.tv/)
* [UniFi](https://ui.com/) - NVR, Router, Firewall
* [Minisforum](https://www.minisforum.com/) - Windows and Linux dedicated
  servers
* [DigitalOcean](https://www.digitalocean.com/) - virtual private servers,
  hosted block storage

# Services

## Mail

I exclusively use [Proton Mail](https://proton.me/) and I'm very happy with it.

## Password Manager

* I primarily use [1password](https://1password.com). It has most of the
  features I want including
  [passkeys](https://www.passkeys.com/what-are-passkeys) and 
  [TOTP](https://en.wikipedia.org/wiki/Time-based_one-time_password).
* I also use [ProtonPass](https://proton.me/) because it allows me to create
  anonymous email addresses that forward to my inbox. I use these email
  addresses when signing up for new accounts.
* I've heard great things about [BitWarden](https://bitwarden.com/) and have no
  complains about [Keeper](https://www.keepersecurity.com/) which I use at work.
* I've used [LastPass](https://app.lastpass.com/login/) in the past but
  migrated to 1Password because of better mobile app support at the time
  (many years ago). LastPass lost some trust after a
  [significant data breach](https://support.lastpass.com/s/document-item?bundleId=lastpass&topicId=LastPass/security-bulletin-recommended-actions-for-customers.html&_LANG=enus).

## Documents

I begrudgingly use G's suite for now but intend to consider
[Synology Office](https://kb.synology.com/en-global/DSM/help/Spreadsheet/office_desc?version=7)
at some point.

## Payments

[Privacy.com](https://app.privacy.com/) allows me to make purchases with
temporary credit cards that do not need to be tied to my identity or location.
This does require Privacy.com to have all of the information about me required
to fulfill a purchase, but it does limit data exposure to other third parties.

## Messaging

I use a handful of messaging applications. I have not found one I like enough to
recommend (including [Signal](https://signal.org/download/)). Many of them
require de-anonymizing steps such as requiring a phone number to activate or
have very low adoption.

In the meantime my most preferred messaging application is
[Signal](https://signal.org/download/) as it does have a number of good privacy
and security features even if it requires additional data about users in order
to function.

I intend to try hosting an [XMPP](https://xmpp.org/software/) server at some
point but have no opinion on that yet.

# Desktop

I use [Manjaro Linux](https://manjaro.org/) because it's very easy to use and
I'm tired of configuring Linux for now. When I'm in the mood to tinker I like
[Void Linux](https://voidlinux.org/).

I have machines running **macOS** and **Windows 11** with minimal 
configuration - they are used for software testing and running services (such as
building and testing my projects on those operating systems).

When installing **Windows** I've really liked using Christoph Schneegans'
[autounattend.xml](https://schneegans.de/windows/unattend-generator/) generator
to pre-configure many things about Windows prior to installation. An important
feature of this tool (which is also possible to do manually) is the ability to
create a local user account without creating an online Microsoft account.

## Browser

I use [LibreWolf](https://librewolf.net/) with mostly default settings; the main
exception is that I do clear history after closing the browser and manually add
exceptions for sites that I want to stay logged in to.
The privacy features that make tracking your activity across sessions and sites
also change your timezone so that can't be used to uniquely identify you; it
seems like a good idea but causes me too many issues in the usability of my
browser so I work around that with the
[Spoof Timezone](https://webextension.org/listing/spoof-timezone.html)
extension.

## Programming

* [Sublime Text 3](https://www.sublimetext.com/3)
* [nvim](https://neovim.io/)
* [Jetbrains IDEs](https://www.jetbrains.com/ides/)

# Mobile

I use a **Google Pixel 9a** running [GraphineOS](https://grapheneos.org/).
My plan is a pre-paid Verizon account using a fake name, fake address and a
[Privacy Card](https://www.privacy.com/) for payment.

## App Store

* [App Store](https://github.com/GrapheneOS/AppStore/releases) for applications
  designed for use with GraphineOS.
* [F-Droid](https://f-droid.org/) for [FOSS](https://itsfoss.com/what-is-foss/)
* [Aurora Store](https://store.auroraoss.com/) to access the Google Play store
  anonymously.

## Browser

* [DuckDuckGo Privacy Browser](https://f-droid.org/packages/com.duckduckgo.mobile.android/)
  for normal browsing. I clear all data on app exit and fireproof only the sites
  I visit with accounts on them (Mastodon, GitHub, etc.)
* [Tor Browser](https://www.torproject.org/download/#android) for anonymous
  browsing.

# More Resources

> [Guardian Project](https://guardianproject.info/)
>
> We are a global team who builds and designs easy to use secure apps, 
> open-source software libraries, and customized solutions that can be used
> around the world by any person or organization looking to protect their
> communications and data from unjust intrusion, interception and monitoring.

\pagebreak

--------------------------------------------------------------------------------

Copyright © 2025 [xo](https://xo.codes). All rights reserved.