import { HStack, Text } from '@chakra-ui/react'

export default {
  title: 'Available Medicines',
  description:
    'Quality medicines available in our stores for different health needs.',

  plans: [
    {
      id: 'paracetamol',
      title: 'Paracetamol',
      description: 'Pain reliever and fever reducer.',
      price: 'Use: Reduces fever and mild pain',
      image: '/images/paracetamol.webp',
      isRecommended: true,
      features: [
        { title: 'Used for headaches' },
        { title: 'Reduces fever' },
        { title: 'Helps with body pain' },
        { title: 'Used for cold and flu symptoms' },
      ],
      action: { href: '#' },
    },

    {
      id: 'amoxicillin',
      title: 'Amoxicillin',
      description: 'Antibiotic used to treat bacterial infections.',
      price: 'Use: Treats bacterial infections',
      image: '/images/amoxicillin.jpg',
      isRecommended: true,
      features: [
        { title: 'Treats throat infections' },
        { title: 'Used for ear infections' },
        { title: 'Helps with chest infections' },
        { title: 'Used for dental infections' },
      ],
      action: { href: '#' },
    },

    {
      id: 'ibuprofen',
      title: 'Ibuprofen',
      description: 'Anti-inflammatory pain medication.',
      price: 'Use: Reduces pain and inflammation',
      image: '/images/ibuprofen.webp',
      isRecommended: true,
      features: [
        { title: 'Relieves muscle pain' },
        { title: 'Reduces inflammation' },
        { title: 'Helps with arthritis pain' },
        { title: 'Reduces fever' },
      ],
      action: { href: '#' },
    },

    {
      id: 'cetirizine',
      title: 'Cetirizine',
      description: 'Antihistamine used for allergy relief.',
      price: 'Use: Treats allergy symptoms',
      image: '/images/cetirizine.webp',
      isRecommended: true,
      features: [
        { title: 'Relieves sneezing' },
        { title: 'Reduces itching' },
        { title: 'Helps with runny nose' },
        { title: 'Used for skin allergies' },
      ],
      action: { href: '#' },
    },

    {
      id: 'metformin',
      title: 'Metformin',
      description: 'Medicine used to control blood sugar.',
      price: 'Use: Treats type 2 diabetes',
      image: '/images/metformin.jpg',
      isRecommended: true,
      features: [
        { title: 'Controls blood sugar levels' },
        { title: 'Used for type 2 diabetes' },
        { title: 'Improves insulin response' },
        { title: 'Helps prevent complications' },
      ],
      action: { href: '#' },
    },

    {
      id: 'omeprazole',
      title: 'Omeprazole',
      description: 'Reduces stomach acid production.',
      price: 'Use: Treats stomach ulcers and acid reflux',
      image: '/images/omeprazole.webp',
      isRecommended: true,
      features: [
        { title: 'Treats acid reflux' },
        { title: 'Helps stomach ulcers' },
        { title: 'Reduces heartburn' },
        { title: 'Protects stomach lining' },
      ],
      action: { href: '#' },
    },

    {
      id: 'azithromycin',
      title: 'Azithromycin',
      description: 'Antibiotic used for bacterial infections.',
      price: 'Use: Treats respiratory infections',
      image: '/images/azithromycin.jpg',
      isRecommended: true,
      features: [
        { title: 'Treats throat infections' },
        { title: 'Helps with chest infections' },
        { title: 'Used for sinus infections' },
        { title: 'Treats skin infections' },
      ],
      action: { href: '#' },
    },

    {
      id: 'salbutamol',
      title: 'Salbutamol',
      description: 'Medicine used for breathing problems.',
      price: 'Use: Treats asthma and breathing issues',
      image: '/images/salbutamol.jpeg',
      isRecommended: true,
      features: [
        { title: 'Relieves asthma symptoms' },
        { title: 'Opens airways' },
        { title: 'Helps breathing difficulties' },
        { title: 'Used in inhalers' },
      ],
      action: { href: '#' },
    },
  ],
}
