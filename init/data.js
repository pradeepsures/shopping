const products = [
    {
      title: "Smart Watch",
      image: "https://images.unsplash.com/photo-1554116154-e733de92fe4b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzZ8fHNtYXJ0JTIwd2F0Y2h8ZW58MHx8MHx8fDA%3D",
      price: "999",
      description: "Stay connected and organized with this sleek smartwatch. Track your fitness goals, receive notifications, and monitor your health all from your wrist."
    },
    {
      title: "Wireless Earbuds",
      image: "https://images.unsplash.com/photo-1570993492903-ba4c3088f100?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHdhcmVsZXNzJTIwZWFyYnVkc3xlbnwwfHwwfHx8MA%3D%3D",
      price: "799",
      description: "Enjoy crystal clear sound and freedom of movement with these wireless earbuds. Perfect for workouts, commutes, or just relaxing at home."
    },
    {
      title: "Laptop Backpack",
      image: "https://images.unsplash.com/photo-1667411424598-96b5e5f3139b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bGFwdG9wJTIwYmFja3BhY2t8ZW58MHx8MHx8fDA%3D",
      price: "4999",
      description: "Keep your laptop and essentials safe and organized with this durable and stylish backpack. Features padded compartments and multiple pockets for easy storage."
    },
    {
      title: "Portable Bluetooth Speaker",
      image: "https://images.unsplash.com/photo-1507878566509-a0dbe19677a5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHBvcmF0YmFsZSUyMGJsdXRvb3RoJTIwc3BlYWtlcnxlbnwwfHwwfHx8MA%3D%3D",
      price: "2999",
      description: "Take your music wherever you go with this compact and powerful Bluetooth speaker. With crisp sound and long battery life, it's perfect for parties, picnics, or outdoor adventures."
    },
    {
      title: "Wireless Charging Pad",
      image: "https://images.unsplash.com/photo-1507878566509-a0dbe19677a5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHBvcmF0YmFsZSUyMGJsdXRvb3RoJTIwc3BlYWtlcnxlbnwwfHwwfHx8MA%3D%3D",
      price: "1999",
      description: "Say goodbye to tangled cables with this convenient wireless charging pad. Simply place your Qi-enabled device on the pad to quickly charge without the hassle of cords."
    },
    {
      title: "Coffee Maker",
      image: "https://plus.unsplash.com/premium_photo-1661756746047-e1fdc81274ee?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y29mZWUlMjBtYWtlcnxlbnwwfHwwfHx8MA%3D%3D",
      price: "3999",
      description: "Start your day right with a perfect cup of coffee from this easy-to-use coffee maker. With programmable features and a sleek design, it's a must-have for any kitchen."
    },
    {
      title: "Fitness Tracker",
      image: "https://plus.unsplash.com/premium_photo-1681433383783-661b519b154a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Zml0bmVzcyUyMHRyYWNrZXJ8ZW58MHx8MHx8fDA%3D",
      price: "5999",
      description: "Stay motivated and track your progress with this advanced fitness tracker. Monitor your heart rate, sleep patterns, and workouts to reach your fitness goals faster."
    },
    {
      title: "Smartphone Tripod",
      image: "https://images.unsplash.com/photo-1694660857079-4f78ab126a59?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c21hcnRwaG9uZSUyMHRyaXBvZHxlbnwwfHwwfHx8MA%3D%3D",
      price: "1499",
      description: "Capture steady photos and videos with this adjustable smartphone tripod. Whether you're shooting selfies or time-lapse videos, this tripod provides stability and versatility."
    },
    {
      title: "Resistance Bands Set",
      image: "https://images.unsplash.com/photo-1530832477500-e4aa52f550a0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fFJlc2lzdGFuY2UlMjBCYW5kcyUyMFNldHxlbnwwfHwwfHx8MA%3D%3D",
      price: "2499",
      description: "Take your workouts to the next level with this set of resistance bands. With varying levels of resistance, you can target different muscle groups for a full-body workout anytime, anywhere."
    },
    {
      title: "Rechargeable Handheld Vacuum",
      image: "https://plus.unsplash.com/premium_photo-1664890289722-86bf6118c480?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8UmVjaGFyZ2VhYmxlJTIwSGFuZGhlbGQlMjBWYWN1dW18ZW58MHx8MHx8fDA%3D",
      price: "3499",
      description: "Keep your home clean and tidy with this portable handheld vacuum. Perfect for quick cleanups, it's lightweight and easy to use, making it ideal for pet owners or busy households."
    },
    {
        title: "Memory Foam Pillow",
        image: "https://plus.unsplash.com/premium_photo-1664443944820-1c8172c3d4a7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fE1lbW9yeSUyMEZvYW0lMjBQaWxsb3d8ZW58MHx8MHx8fDA%3D",
        price: "2999",
        description: "Experience unparalleled comfort and support with our memory foam pillow. Designed to contour to your head and neck, it provides relief from pressure points for a restful night's sleep."
      },
      {
        title: "Bedside Caddy Organizer",
        image: "https://images.unsplash.com/photo-1631020280892-02a11b5e960a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fEJlZHNpZGUlMjBDYWRkeSUyME9yZ2FuaXplcnxlbnwwfHwwfHx8MA%3D%3D",
        price: "1999",
        description: "Keep your essentials close at hand with our bedside caddy organizer. Featuring multiple pockets and a sturdy design, it's perfect for storing books, glasses, remote controls, and more."
      },
      {
        title: "Luxury Bedding Set",
        image: "https://plus.unsplash.com/premium_photo-1670869816731-97a307d1c7ab?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8THV4dXJ5JTIwQmVkZGluZyUyMFNldHxlbnwwfHwwfHx8MA%3D%3D",
        price: "9999",
        description: "Transform your bedroom into a luxurious retreat with our premium bedding set. Made from high-quality materials, it includes a duvet cover, pillow shams, and a fitted sheet for the ultimate in comfort and style."
      },
      {
        title: "Adjustable Bed Risers",
        image: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8QWRqdXN0YWJsZSUyMEJlZCUyMFJpc2Vyc3xlbnwwfHwwfHx8MA%3D%3D",
        price: "1499",
        description: "Create extra storage space under your bed with our adjustable bed risers. Raise your bed to your desired height to accommodate storage bins, suitcases, and more, while keeping your room neat and organized."
      },
      {
        title: "Silk Sleep Mask",
        image: "https://media.istockphoto.com/id/468990973/photo/woman-lies-with-sleeping-mask.webp?b=1&s=170667a&w=0&k=20&c=xHiHPKp11tu9nQGrW4QfqIwDf6OOuaFT8-hdRMdrmb4=",
        price: "99",
        description: "Block out light and promote better sleep with our silk sleep mask. Made from soft, breathable silk, it's gentle on the skin and provides a comfortable fit for a peaceful night's rest."
      },
      {
        title: "Bedside Lamp with USB Charging Port",
        image: "https://media.istockphoto.com/id/1027350320/photo/scandinavian-style-loft-bedroom-interior.webp?b=1&s=170667a&w=0&k=20&c=c8nANPf_ByVX9ZGMNmUdriTTQDkZP9LP7bn9Br3Fsgg=",
        price: "3999",
        description: "Illuminate your bedroom and charge your devices simultaneously with our bedside lamp. Featuring a modern design and built-in USB charging port, it's both stylish and functional."
      },
      {
        title: "Waterproof Mattress Protector",
        image: "https://images.unsplash.com/photo-1425219366480-47fdbbe0e83b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fFdhdGVycHJvb2YlMjBNYXR0cmVzcyUyMFByb3RlY3RvcnxlbnwwfHwwfHx8MA%3D%3D",
        price: "2499",
        description: "Protect your mattress from spills, stains, and allergens with our waterproof mattress protector. Made from breathable fabric, it's comfortable to sleep on and easy to clean, ensuring your mattress stays fresh and hygienic."
      },
      {
        title: "Bedside Shelf",
        image: "https://plus.unsplash.com/premium_photo-1679053696630-6e50bfb3847a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8QmVkc2lkZSUyMFNoZWxmfGVufDB8fDB8fHww",
        price: "2999",
        description: "Maximize space and convenience with our bedside shelf. Easily attachable to the side of your bed frame, it provides a sturdy surface for your phone, glasses, books, and more."
      },
      {
        title: "Down Comforter",
        image: "https://images.unsplash.com/photo-1529704817457-9f19aad72e1b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fERvd24lMjBDb21mb3J0ZXJ8ZW58MHx8MHx8fDA%3D",
        price: "7999",
        description: "Wrap yourself in warmth and luxury with our down comforter. Filled with premium down feathers, it's lightweight yet incredibly cozy, perfect for year-round comfort."
      },
      {
        title: "Bedroom Wall Art",
        image: "https://media.istockphoto.com/id/1304919673/photo/industrial-style-loft-bedroom-wiht-living-room.webp?b=1&s=170667a&w=0&k=20&c=MosYOKhaA_y5WaiCu0oQ6fVBr-FLEMTWdBdEc0nvn14=",
        price: "4999",
        description: "Add a touch of style to your bedroom with our bedroom wall art. Featuring a variety of designs and sizes, it's an easy way to personalize your space and create a relaxing atmosphere."
      },
  ];

  module.exports = { data: products };