<?php
/**
 * Copy to config.local.php for local testing, or to ~/private/peninsula-pavers-mail.php
 * on the server (outside public_html). Never commit real credentials.
 */
return [
    'recaptcha_secret' => 'YOUR_RECAPTCHA_SECRET_KEY',
    'notify_to' => ['peninsulapavers@gmail.com', 'krista@southcoastkla.com'],
    'from_email' => 'noreply@peninsulapavers.com',
    'from_name' => 'Peninsula Pavers',
    'site_url' => 'https://peninsulapavers.com',
    'site_phone' => '(231) 421-8480',
    'site_phone_href' => '+12314218480',

    'forms' => [
        'footer' => [
            'notification' => 'notification-footer.html',
            'subject' => 'Free estimate request — Peninsula Pavers',
            'send_autoreply' => false,
        ],
        'drawer' => [
            'notification' => 'notification-drawer.html',
            'subject' => 'Free estimate request — Peninsula Pavers',
            'send_autoreply' => false,
        ],
        'contact' => [
            'notification' => 'notification-contact.html',
            'subject' => 'New enquiry — Peninsula Pavers',
            'send_autoreply' => false,
        ],
    ],

    'recaptcha_min_score' => 0.5,
    'rate_limit_seconds' => 60,
    'rate_limit_max' => 5,
];
