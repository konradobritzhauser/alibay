const Items = [
  {
    title: 'Acer Aspire E1-510 (2014)',
    category: 'Desktop Computer',
    description: `This Acer Aspire E1-510P-4614 slim laptop PC that features a beautiful 15.6" touchscreen display that makes organizing and programming on Windows 8.1 quick and easy.`,
    price: 495,
    fd: 'http://localhost:4000/images/Acer_Aspire_PC.jpg',
    likes: 2,
    seller: 'dennis'
  },
  {
    title: 'Amazon Fire HD 8 (2016)',
    category: 'Tablet',
    description: `The latest Fire HD 8 delivers faster performance, a bigger battery and more base storage than the previous version for almost half the price. `,
    price: 890,
    fd: 'http://localhost:4000/images/Amazon_Fire_HD_Tablet.jpg',
    likes: 15,
    seller: 'dennis'
  },
  {
    title: 'Anker Portable Bluetooth Speaker',
    category: 'Speaker',
    description: `Portable Bluetooth Speaker, Anker SoundCore 24-Hour Playtime Bluetooth Speaker with 10W Dual-Driver Stereo Sound.`,
    price: 49,
    fd: 'http://localhost:4000/images/Anker_Portable_Bluetooth_Speaker.jpg',
    likes: 1,
    seller: 'dennis'
  },
  {
    title: 'Apple iPad mini 4 (128GB, Wi-Fi, Space Gray)',
    category: 'Tablet',
    description: `7.9" Retina display, 2048 x 1536 resolution
    Apple iOS 9, dual-core a8 chip with quad-core graphics
    8 MP iSight camera, 1080p HD video recording.`,
    price: 448,
    fd: 'http://localhost:4000/images/Apple_Ipad_Mini_4.jpg',
    likes: 50,
    seller: 'dennis'
  },
  {
    title: 'Asus_ASUS Transformer Laptop 12.6In',
    category: 'Laptop Computer',
    description: `Intel Core i7-7500U (4M Cache, 2.7GHz), 8GB LPDDR3, 512GB SSD, Intel HD Graphics 620, 802.11 ac, Bluetooth 4.1, Windows 10 Home`,
    price: 890,
    fd: 'http://localhost:4000/images/Asus_Transformer_Laptop.jpg',
    likes: 10,
    seller: 'dennis'
  },
  {
    title: 'ASUS VivoBook S15 S510UA',
    category: 'Laptop Computer',
    description: `The ASUS VivoBook S15 gives you the perfect combination of beauty and performance. With its slim NanoEdge bezel, brushed-metal finish, the latest Intel® Core™ i7 processor.`,
    price: 1490,
    fd: 'http://localhost:4000/images/Asus_Vivobook_Laptop.jpg',
    likes: 10,
    seller: 'dennis'
  },
  {
    title: 'BenQ Business Projector',
    category: 'Projector',
    description: `BenQ MS524AE SVGA Business Projector, DLP, 3300 Lumens, 15,000:1 Contrast, Dual HDMI, 10,000hrs Lamp Life.`,
    price: 249,
    fd: 'http://localhost:4000/images/BenQ_Business_Projector.jpg',
    likes: 10,
    seller: 'dennis'
  },
  {
    title: 'Bluetooth_Headphones_Flame',
    category: 'Headphones',
    description: `Mpow Flame Bluetooth Headphones Waterproof IPX7, Wireless Earbuds Sport, Richer Bass HiFi Stereo in-Ear Earphones w/Mic, Case, 7-9 Hrs Playback Noise Cancelling Headsets (Comfy & Fast Pairing)`,
    price: 19,
    fd: 'http://localhost:4000/images/Bluetooth_Headphones_Flame.jpg',
    likes: 10,
    seller: 'dennis'
  },
  {
    title: 'Bose SoundLink Revolve Splashproof Bluetooth NFC Wireless Speaker - Black',
    category: 'Speaker',
    description: `Deep. Loud. And immersive, too. The SoundLink Revolve Bluetooth speaker delivers true 360° sound for consistent, uniform coverage.`,
    price: 199,
    fd: 'http://localhost:4000/images/Bose_Revolve_Bluetooth Speaker.jpg',
    likes: 10,
    seller: 'dennis'
  },
  {
    title: 'Bose_Waterproof_Bluetooth_Speaker',
    category: 'Speaker',
    description: `Amazing sound you can pass around, the SoundLink Micro Bluetooth speaker is made to share great music.`,
    price: 109,
    fd: 'http://localhost:4000/images/Bose_Waterproof_Bluetooth_Speaker.jpg',
    likes: 10,
    seller: 'dennis'
  },
  {
    title: 'Bose QC35 QuietComfort 35 Wireless Headphones II - Black',
    category: 'Headphones',
    description: `Headphones that become part of your life and just part of your music, the Bose QuietComfort 35 II wireless headphones are designed to keep amazing audio and virtual assistance at your beck and call.`,
    price: 445,
    fd: 'http://localhost:4000/images/BOSE_Wireless_Headphones.jpg',
    likes: 10,
    seller: 'dennis'
  },
  {
    title: 'Canon EOS Rebel T6 DSLR Camera with EF-S 18-55mm f/3.5-5.6 DC III Lens Kit',
    category: 'Camera',
    description: `Photography isn't hard, especially with the Canon EOS Rebel T6.`,
    price: 419,
    fd: 'http://localhost:4000/images/Canon_EOS_Rebel.jpg',
    likes: 10,
    seller: 'dennis'
  },
  {
    title: 'COWIN_Bluetooth_Headphones',
    category: 'Headphones',
    description: `COWIN E7 Active Noise Cancelling Bluetooth Headphones with Mic Hi-Fi Deep Bass Wireless Headphones Over Ear.`,
    price: 79,
    fd: 'http://localhost:4000/images/COWIN_Bluetooth_Headphones.jpg',
    likes: 10,
    seller: 'dennis'
  },
  {
    title: 'CyberPowerPC - Gamer Ultra Desktop - AMD FX-Series - 8GB Memory - AMD Radeon RX 560 - 1TB Hard Drive - Black',
    category: 'Desktop Computer',
    description: `Jump into the gaming scene with this CyberPowerPC Gamer Ultra desktop computer. Its AMD Radeon RX graphics card renders stutter-free visuals.`,
    price: 579,
    fd: 'http://localhost:4000/images/Cyperpower_Gamer_PC.jpg',
    likes: 10,
    seller: 'dennis'
  },
  {
    title: 'Edifier R1280T Powered Bookshelf Speakers - 2.0 Active Near Field Monitors',
    category: 'Speaker',
    description: `2 x AUX INPUT - Convenient connection to any device that has a 3.5mm headphone output or dual RCA output. Connect to two devices via AUX at the same time, no plugging and switching needed.`,
    price: 124,
    fd: 'http://localhost:4000/images/Edifier_Bookshelf_Speakers.jpg',
    likes: 10,
    seller: 'dennis'
  },
  {
    title: 'PowerLite Epson Projector D6155W WXGA 3LCD',
    category: 'Projector',
    description: `Robust performance. Cutting-edge connectivity features.
    Boasting a robust design, advanced networking capabilities and cost-efficient maintenance features, the PowerLite D6155W is the perfect solution for lecture halls and corporate conference rooms alike.`,
    price: 425,
    fd: 'http://localhost:4000/images/Epson_Projector.jpg',
    likes: 10,
    seller: 'dennis'
  },
  {
    title: 'Fitbit Blaze Smart Fitness Watch, Black, Silver, Large',
    category: 'Accessories',
    description: `See simplified heart rate zones for quickly checking exercise intensity during workouts with PurePulse(TM) continuous, wrist-based heart rate monitoring (no uncomfortable chest strap required)`,
    price: 199,
    fd: 'http://localhost:4000/images/Fitbit_Blaze.jpg',
    likes: 10,
    seller: 'dennis'
  },
  {
    title: 'Fujifilm Finepix Camera. We Buy and Sell Used Cameras and Accessories. 115762 CH613404',
    category: 'Camera',
    description: `Fujifilm Finepix Camera XP90. This item has been tested and is working 100%.`,
    price: 129,
    fd: 'http://localhost:4000/images/Fujifilm_Finepix_Camera.jpg',
    likes: 10,
    seller: 'dennis'
  },
  {
    title: 'Fujifilm - instax mini 9 Instant Film Camera Blue',
    category: 'Camera',
    description: `Remember joyful moments with this Fujifilm instax Mini 9 instant camera. It's lightweight and portable to accompany you on adventures, and the automatic exposure measurement ensures bright images.`,
    price: 99,
    fd: 'http://localhost:4000/images/Fujifilm_Instax_Camera_Blue.jpg',
    likes: 10,
    seller: 'dennis'
  },
  {
    title: 'Fujifilm - instax mini 9 Instant Film Camera Pink',
    category: 'Camera',
    description: `Remember joyful moments with this Fujifilm instax Mini 9 instant camera. It's lightweight and portable to accompany you on adventures, and the automatic exposure measurement ensures bright images.`,
    price: 99,
    fd: 'http://localhost:4000/images/Fujifilm_Instax_Camera_Pink.jpg',
    likes: 10,
    seller: 'dennis'
  },
  {
    title: 'Garmin Forerunner Watch Blue',
    category: 'Watch',
    description: `Monitors heart rate¹ at the wrist, all day and night, using Garmin Elevate™ wrist heart rate technology
    Built-in GPS tracks how far, how fast and where you run.`,
    price: 129,
    fd: 'http://localhost:4000/images/Garmin_Forerunner_Watch_Blue.jpg',
    likes: 10,
    seller: 'dennis'
  },
  {
    title: 'Garmin Forerunner® 735XT Green',
    category: 'Watch',
    description: `Measures heart rate at the wrist¹ so you can run freer on race day Provides advanced dynamics² for running, cycling and swimming7, including ground contact time balance, stride length, vertical ratio and more.`,
    price: 589,
    fd: 'http://localhost:4000/images/Garmin_Forerunner_Watch_Green.jpg',
    likes: 10,
    seller: 'dennis'
  },
  {
    title: 'Garmin Forerunner® 735XT Black',
    category: 'Watch',
    description: `Measures heart rate at the wrist¹ so you can run freer on race day Provides advanced dynamics² for running, cycling and swimming7, including ground contact time balance, stride length, vertical ratio and more.`,
    price: 589,
    fd: 'http://localhost:4000/images/Garmin_Forerunner_Watch.jpg',
    likes: 10,
    seller: 'dennis'
  },
  {
    title: 'HDMI_Cable',
    category: 'Accessories',
    description: `description`,
    price: 10,
    fd: 'http://localhost:4000/images/HDMI_Cable.jpg',
    likes: 10,
    seller: 'dennis'
  },
  {
    title: 'HDMI_To_RCA_Adapter',
    category: 'Accessories',
    description: `description`,
    price: 10,
    fd: 'http://localhost:4000/images/HDMI_To_RCA_Adapter.jpg',
    likes: 10,
    seller: 'dennis'
  },
  {
    title: 'HP_Stream_Laptop',
    category: 'Laptop',
    description: `description`,
    price: 10,
    fd: 'http://localhost:4000/images/HP_Stream_Laptop.jpg',
    likes: 10,
    seller: 'dennis'
  },
  {
    title: 'LG_Blue_Ray_Disc_Player',
    category: 'Blu Ray Player',
    description: `description`,
    price: 10,
    fd: 'http://localhost:4000/images/LG_Blue_Ray_Disc_Player.jpg',
    likes: 10,
    seller: 'dennis'
  },
  {
    title: 'Logitech_TV_Remote',
    category: 'Accessories',
    description: `description`,
    price: 10,
    fd: 'http://localhost:4000/images/Logitech_TV_Remote.jpg',
    likes: 10,
    seller: 'dennis'
  },
  {
    title: 'Nikon_COOLPIX_B500_Camera',
    category: 'Camera',
    description: `description`,
    price: 10,
    fd: 'http://localhost:4000/images/Nikon_COOLPIX_B500_Camera.jpg',
    likes: 10,
    seller: 'dennis'
  },
  {
    title: 'Nintendo_Switch_Console',
    category: 'Video Games',
    description: `description`,
    price: 10,
    fd: 'http://localhost:4000/images/Nintendo_Switch_Console.jpg',
    likes: 10,
    seller: 'dennis'
  },
  {
    title: 'Nintendo_Switch_Game_Legend_Of_Zelda',
    category: 'Video Games',
    description: `description`,
    price: 10,
    fd: 'http://localhost:4000/images/Nintendo_Switch_Game_Legend_Of_Zelda.jpg',
    likes: 10,
    seller: 'dennis'
  },
  {
    title: 'Nintendo_Switch_Game_Super_Smash_Bros',
    category: 'Video Games',
    description: `description`,
    price: 10,
    fd: 'http://localhost:4000/images/Nintendo_Switch_Game_Super_Smash_Bros.jpg',
    likes: 10,
    seller: 'dennis'
  },
  {
    title: 'Playstation_4_Controller',
    category: 'Video Games',
    description: `description`,
    price: 10,
    fd: 'http://localhost:4000/images/Playstation_4_Controller.jpg',
    likes: 10,
    seller: 'dennis'
  },
  {
    title: 'Playstation_4_Slim_1TB',
    category: 'Video Games',
    description: `description`,
    price: 10,
    fd: 'http://localhost:4000/images/Playstation_4_Slim_1TB.jpg',
    likes: 10,
    seller: 'dennis'
  },
  {
    title: 'RCA_TV_Remote',
    category: 'Video Games',
    description: `description`,
    price: 10,
    fd: 'http://localhost:4000/images/RCA_TV_Remote.jpg',
    likes: 10,
    seller: 'dennis'
  },
  {
    title: 'ROG_Gaming_Laptop',
    category: 'Laptop Computer',
    description: `description`,
    price: 10,
    fd: 'http://localhost:4000/images/ROG_Gaming_Laptop.jpg',
    likes: 10,
    seller: 'dennis'
  },
  {
    title: 'Samsung_Galaxy_Tablet_8',
    category: 'Tablet',
    description: `description`,
    price: 10,
    fd: 'http://localhost:4000/images/Samsung_Galaxy_Tablet_8.jpg',
    likes: 10,
    seller: 'dennis'
  },
  {
    title: 'Samsung_Galaxy_Tablet_10',
    category: 'Tablet',
    description: `description`,
    price: 10,
    fd: 'http://localhost:4000/images/Samsung_Galaxy_Tablet_10.jpg',
    likes: 10,
    seller: 'dennis'
  },
  {
    title: 'Samsung_Smart_TV',
    category: 'Television',
    description: `description`,
    price: 10,
    fd: 'http://localhost:4000/images/Samsung_Smart_TV.jpg',
    likes: 10,
    seller: 'dennis'
  },
  {
    title: 'Samsung_Ultra_HD_TV',
    category: 'Television',
    description: `description`,
    price: 10,
    fd: 'http://localhost:4000/images/Samsung_Ultra_HD_TV.jpg',
    likes: 10,
    seller: 'dennis'
  },
  {
    title: 'Sennheiser_RS120_Headphones',
    category: 'Headphones',
    description: `description`,
    price: 10,
    fd: 'http://localhost:4000/images/Sennheiser_RS120_Headphones.jpg',
    likes: 10,
    seller: 'dennis'
  },
  {
    title: 'Sony_Blu_Ray_Disc_Player',
    category: 'Blu Ray Player',
    description: `description`,
    price: 10,
    fd: 'http://localhost:4000/images/Sony_Blu_Ray_Disc_Player.jpg',
    likes: 10,
    seller: 'dennis'
  },
  {
    title: 'TCL_Smart_TV',
    category: 'Television',
    description: `description`,
    price: 10,
    fd: 'http://localhost:4000/images/TCL_Smart_TV.jpg',
    likes: 10,
    seller: 'dennis'
  },
  {
    title: 'Universal_TV_Remote',
    category: 'Accessories',
    description: `description`,
    price: 10,
    fd: 'http://localhost:4000/images/Universal_TV_Remote.jpg',
    likes: 10,
    seller: 'dennis'
  },
  {
    title: 'Viewsonic_Projector',
    category: 'Projector',
    description: `description`,
    price: 10,
    fd: 'http://localhost:4000/images/Viewsonic_Projector.jpg',
    likes: 10,
    seller: 'dennis'
  },
  {
    title: 'X_Box_Controller',
    category: 'Video Games',
    description: `description`,
    price: 10,
    fd: 'http://localhost:4000/images/X_Box_Controller.jpg',
    likes: 10,
    seller: 'dennis'
  }
]

const Categories = [
  'Accessories',
  'Camera',
  'Laptop Computer',
  'Desktop Computer',
  'Speaker',
  'Watch',
  'Headphones',
  'Television',
  'Projector',
  'Video Games',
  'Tablet',
  'Blu Ray Player'
]

module.exports = { Items, Categories }
