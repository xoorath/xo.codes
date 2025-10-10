                        (insert /fragments/header.html here)
                [home](/index.html) / articles / 2025 / passwords

(#) Forward

This page goes over a few simple steps you can take today to improve the
security of your online accounts. If you follow along by the end you will:

1. Have an stronger and easier to remember main password.
2. Learn about MFA (multi factor authentication).
3. Learn how to make your life easier with the help of a password manager app.

I'm going to lead with the point and offer you a quick 30 second version of this
article. Here are the key takeaways:

1. Using a long and simple to remember password is better in every way than
   using a short and obtuse one; consider using a password like
   "`Correct9-Horse0-Battery2-Staple1`" over one like "`Tr0ub4dor`".
2. You should really enable MFA on (at least) your most important accounts.
3. It's very beneficial to use a password manager and to have it generate random
   unique password for each account you use. Password managers I recommend
   include [1Password](https://1password.com),
   [Bitwarden](https://bitwarden.com), and 
   [Proton Pass](https://proton.me/pass) in no particular order. They're all
   great.

If you understood all that and get why I would make those recommendations:
there is not going to be much else for you here. If some of that is confusing,
counter intuitive or if it sounds Greek to you: please keep reading and I'll
walk you through securing your online accounts in as plain language as I can
muster.

(#) Picking a great password

Forget what you think you know about creating a great password - we're starting
from a blank slate here. A great password has the following traits:

1. **It's practical** - easy to type and remember.
2. **It's long** - hard for computers to guess.
3. **It's private** - only you know it.

In the web comic [XKCD #936](https://xkcd.com/936/) the author gives us a
great example of two kinds of passwords: the complex kind we've been taught to use
and a simple one that's easy to remember and just a bit longer. In the comic 
(which admittedly is pretty full of nerd jargon) we're taught that the simpler
password is **is significantly more secure**. 

The examples given are:

| Password                            | Time to crack at 1000 guesses / second |
|-------------------------------------|----------------------------------------|
| **`Tr0ub4dor`**                     | 3 days                                 |
| **`correcthorsebatterystaple`**     | 550 years                              |

Now realistically... unless you're some high level government official or Taylor
Swift (Omg! Hi Taylor!): nobody is spending 3 days of computer power cracking
your accounts. **So why bother?** For me it's simple: I'm fed up with bad
passwords. I don't like typing a password like `Tr0ub4dor` using a TV remote or
telling my house guests which '`A`' in my WiFi password is really a '`4`'.
Knowing that the easier password is about 67000x stronger makes it a no brainer.

This is a tough first concept for a lot of folks, so: if we're on the same page
at this point you're doing great so far. Let's keep going.

Not to contradict the wisdom of XKCD, but... when **you** create a password for
real you are probably going to want to include **capital letters, symbols
and numbers**. This is just to be sure the password is not rejected by most
password systems that demand your password have those criteria. The last thing
we want is having to remember which site required symbols or capital letters and
which ones didn't.

!!! TIP: Keep it simple!
    When adding capital letters, symbols and numbers: keep it simple! Adding 4
    digits from your phone number or zip code will make it easier to remember.

Here's an example of a great password: `Correct9-Horse0-Battery2-Staple1`. Let's
test it against the "great password" traits I mentioned earlier:

1. **Is it practical?** - Yes: it's easy to type and remember.
2. **Is it long?** - Certainly long enough. It would take centuries to crack.
3. **Is it private?** - Well no... now Taylor Swift knows **that** password. But if
   we're talkimg about a brand new random 4 words that only you know: we are in
   great shape.

(#) Change a couple passwords

I'm assuming you're starting from the same place as most folks:

- Your password is short and annoying to type (*like `Tr0ub4dor&3`*).
- You use that password on **at least one** account that has been compromised.
    - Maybe the company hosting your data has been hacked whether you know it or
      not. (*like: Yahoo, Adobe, LinkedIn, MySpace, Adult Friend Finder, and
      many more!*)
    - Or your account was hacked by someone looking to exploit you or
      your friends.
- You have been using this password for a long time, maybe only updating it as
  some sites increased their password complexity requirements (adding
  `123!!!` at the end for example.)

Does that sound like you? If so: I'm glad you're here!

!!! TIP: This isn't your fault.
    There's no shame in having an insecure password, having been hacked or
    re-using the same password for a long time.
    
    It's only in recent years been getting easier for websites and apps to
    follow best practices and for users to authenticate securely. We are still
    a far cry away from security being even remotely fool-proof - it's not even
    especially techie-proof.

Here's what I suggest you do over the next few days or weeks:
1. Come up with **one** great new password using the advice from the previous
   section.
1. Change the password on your most important accounts (email, bank, payment,
   socials) to that password.
2. Enable MFA (multi factor authentication) on all of those accounts as you go.

Making that change will already help you **a lot** in terms of security and
peace of mind. If you're confused about MFA: don't worry - I'll cover that in
the next section.

It might be surprising to hear me suggest using the same password for 
multiple accounts – you would be right to think that its not ideal. That said:
this guide is for regular folks and regular folks don't have the tools, motivation,
or patience to deal with dozens or hundreds of unique passwords. We will talk about
how to make that easy in the upcomming section on password managers.

(#) MFA: rule of 3

!!! Info: What the heck is MFA?
    Every step you take to prove an account is yours is **a factor**. 
    MFA (multi factor authentication) means having more than one factor
    such as requiring a password and providing a number texted to your phone.

There's a great rule of 3 to help you remember what makes a great multi factor
authentication setup:

1. Something **you know** - like a password or pin
2. Something **you have** - like a smartphone or USB security key
3. Something **you are** - like a fingerprint or facial recognition

Any accounts you have that are secured with all of those factors are in great
shape. That might not always be possible and may sometimes be undesirable,
and that's okay sometimes too.

My advice is to use all 3 factors (if possible) for:
- Your email
- Your bank
- Your social media
- Syncing your password manager (if you use one)

(##) Quick aside – online shopping

I do a lot of online shopping and I try to support smaller creators when I can.
That puts me in a pickle though: I'm creating lots of accounts and I expect small
stores to know less about securing their databases. 

That scenario raises a flag for me in terms of risk. Here are some options
to mitigate that risk:

- Say no when prompted to save payment details.
- Pay with a third party app like Apple Pay so payment security is handled by a
  company that has expertise in securing paymemts.
- Use a service like [Privacy Card](https://privacy.com) to generate a single-use
  credit card for that purchase.

(#) Glossary of terms

Here is a quick rundown of account security jargon. You'll encounter some of these
terms as you go through your account settings in various apps.

- **Two factor authentication** (2FA) - Each step you use to sign in is a
  "*factor*"". Normally your first factor is a **username and password** and the
  second factor is something else like a code sent to your email or phone.
- **Multi factor authentication** (MFA) - Multi factor can be two or more
  factors. 2FA is a kind of MFA. Normal people can use 2FA and MFA
  interchangeably and no reasonable person is going to bat an eye.
- **Time based one time password** (TOTP) - Authenticator apps (*[like Google
   Authenticator]*(https://play.google.com/store/apps/details?id=com.google.android.apps.authenticator2))
   give you a number that updates every few seconds that can be used to sign in
   to an account. That number is a TOTP (time based one time password). It's a
   pretty dang good second factor to use when signing in to an account!
- **Hardware Security Keys** - Normal people don't use these for their day to
   day life

!!! Warning: WIP
    This page is a work im progress. The next steps I haven't written about yet go
    over password managers, their features and how to use them.

                        (insert /fragments/footer.html here)
