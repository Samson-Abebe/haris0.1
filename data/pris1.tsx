import { HStack, Text } from '@chakra-ui/react'

export default {
  title: 'Laboratory Equipment',
  description:
    'Essential imported laboratory diagnostic kits and medical equipment used in hospitals and clinics.',

  plans: [
    {
      id: 'hcg',
      title: 'HCG Pregnancy Test',
      description: 'Rapid test used to detect pregnancy hormone (HCG).',
      price: 'Use: Pregnancy detection',
      image: '/images/hcg.jpg',
      isRecommended: true,
      features: [
        { title: 'Quick pregnancy detection' },
        { title: 'Available as card or strip' },
        { title: 'Used in laboratories and clinics' },
        { title: 'Easy diagnostic test' },
      ],
      action: { href: '#' },
    },

    {
      id: 'malaria-kit',
      title: 'Malaria Test Kit',
      description: 'Rapid diagnostic test used to detect malaria infection.',
      price: 'Use: Detecting malaria parasites',
      image: '/images/malaria-kit.webp',
      isRecommended: true,
      features: [
        { title: 'Rapid malaria detection' },
        { title: 'Simple blood test' },
        { title: 'Used in hospitals and labs' },
        { title: 'Results within minutes' },
      ],
      action: { href: '#' },
    },

    {
      id: 'syphilis',
      title: 'Syphilis Test',
      description: 'Rapid test used to detect syphilis infection.',
      price: 'Use: Detecting syphilis disease',
      image: '/images/syphilis.jpg',
      isRecommended: true,
      features: [
        { title: 'Card or strip type' },
        { title: 'Blood sample test' },
        { title: 'Used in laboratories' },
        { title: 'Quick results' },
      ],
      action: { href: '#' },
    },

    {
      id: 'hpylori',
      title: 'H. Pylori Test',
      description: 'Diagnostic kit used to detect Helicobacter pylori infection.',
      price: 'Use: Detect stomach infection',
      image: '/images/hpylori.jpg',
      isRecommended: true,
      features: [
        { title: 'Detects stomach bacteria' },
        { title: 'Helps diagnose ulcers' },
        { title: 'Used in laboratories' },
        { title: 'Rapid testing method' },
      ],
      action: { href: '#' },
    },

    {
      id: 'hcv',
      title: 'HCV Test Kit',
      description: 'Test used to detect Hepatitis C virus infection.',
      price: 'Use: Detect hepatitis C',
      image: '/images/hcv.webp',
      isRecommended: true,
      features: [
        { title: 'Detects hepatitis C antibodies' },
        { title: 'Rapid blood testing' },
        { title: 'Used in diagnostic labs' },
        { title: 'Helps early diagnosis' },
      ],
      action: { href: '#' },
    },

    {
      id: 'typhoid',
      title: 'Typhoid IgG Test',
      description: 'Blood test used to diagnose typhoid infection.',
      price: 'Use: Typhoid diagnosis',
      image: '/images/typhoid.webp',
      isRecommended: true,
      features: [
        { title: 'Detects typhoid antibodies' },
        { title: 'Rapid testing kit' },
        { title: 'Used in laboratories' },
        { title: 'Supports infection diagnosis' },
      ],
      action: { href: '#' },
    },

    {
      id: 'colorimeter',
      title: 'Auto Zero Colorimeter',
      description: 'Device used to measure chemical concentration in samples.',
      price: 'Use: Laboratory chemical analysis',
      image: '/images/colorimeter.webp',
      isRecommended: true,
      features: [
        { title: 'Accurate chemical analysis' },
        { title: 'Auto zero calibration' },
        { title: 'Used in laboratories' },
        { title: 'Reliable measurement tool' },
      ],
      action: { href: '#' },
    },

    {
      id: 'haemoglobin',
      title: 'Digital Haemoglobin Meter',
      description: 'Device used to measure haemoglobin levels in blood.',
      price: 'Use: Measuring haemoglobin levels',
      image: '/images/haemoglobin.webp',
      isRecommended: true,
      features: [
        { title: 'Measures haemoglobin levels' },
        { title: 'Digital display results' },
        { title: 'Quick blood testing' },
        { title: 'Used in clinics and labs' },
      ],
      action: { href: '#' },
    },

    {
      id: 'blood-mixer',
      title: 'Blood Roller Mixer',
      description: 'Equipment used to mix blood samples evenly.',
      price: 'Use: Blood sample preparation',
      image: '/images/blood-mixer.webp',
      isRecommended: true,
      features: [
        { title: 'Uniform sample mixing' },
        { title: 'Used in laboratories' },
        { title: 'Stable rotation system' },
        { title: 'Improves test accuracy' },
      ],
      action: { href: '#' },
    },

    {
      id: 'needle-destroyer',
      title: 'Needle Syringe Destroyer',
      description: 'Device used to destroy used needles safely.',
      price: 'Use: Medical waste management',
      image: '/images/needle-destroyer.webp',
      isRecommended: true,
      features: [
        { title: 'Destroys used needles' },
        { title: 'Prevents needle reuse' },
        { title: 'Improves hospital safety' },
        { title: 'Used in clinics and labs' },
      ],
      action: { href: '#' },
    },

    {
      id: 'centrifuge-timer',
      title: 'Centrifuge Machine with Timer',
      description: 'Machine used to separate blood components.',
      price: 'Use: Blood separation',
      image: '/images/centrifuge-timer.webp',
      isRecommended: true,
      features: [
        { title: 'High speed rotation' },
        { title: 'Built-in timer control' },
        { title: 'Used in diagnostic labs' },
        { title: 'Separates blood plasma' },
      ],
      action: { href: '#' },
    },

    {
      id: 'centrifuge',
      title: 'Centrifuge Machine',
      description: 'Laboratory device used to separate fluids.',
      price: 'Use: Sample separation',
      image: '/images/centrifuge.jpg',
      isRecommended: true,
      features: [
        { title: 'Separates blood plasma' },
        { title: 'High speed spinning' },
        { title: 'Used in laboratories' },
        { title: 'Essential diagnostic equipment' },
      ],
      action: { href: '#' },
    },
  ],
}
