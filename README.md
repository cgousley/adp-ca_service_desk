# adp-ca_service_desk
Adds keyboard shortcuts to the CA Service Desk fields  most commonly used by ADP's Hosting Operations

I created this while serving a Sept 1 - Oct 30 2016 contract while ADP moved operations from Ann Arbor, MI to Chicago, IL.



Add Keyboard Shortcuts to CASD
By Clayton G. Ousley

1)Install TamperMonkey for Chrome:

https://chrome.google.com/webstore/search/tampermonkey?hl=en
                                                                                   |------|
                                                                                   |      |
2) Create a new script by clicking the plugin’s icon in the menu bar (looks like   |_()()_| )

3) Paste in the JavaScript file.

4) Go to the settings tab and make sure the following settings match:

Position: 2;
Run at: document-start;
Run only in top frame: Default;

Includes/Excludes: {
  Original includes: <leave blank>
  Original Matches: servicedesk/*
}


5) Make sure the script is enabled by checking the icon in the menu bar again.

=*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*=

Your shortcuts are set! Your shortcut is “ALT” + <character that surrounds the label>

For example, in the case of the “Status” field, the shortcut is ‘ALT’ + ‘=’


Combine this KeyText Macros (available at the ADP Downloads site) for extra speed!
