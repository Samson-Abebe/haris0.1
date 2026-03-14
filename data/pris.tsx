import { HStack, Text } from '@chakra-ui/react'

export default {
  title: 'Medical Tools',
  description:
    'Essential imported  medical tools used in hospitals and clinics for diagnosis and treatment.',

  plans: [
    {
      id: 'stethoscope',
      title: 'Stethoscope',
      description: 'Medical device used to listen to heart and lung sounds.',
      price: 'Use: Diagnosing heart and breathing conditions',
      image: '/images/stethoscope.webp',
      isRecommended: true,
      features: [
        { title: 'Used by doctors and nurses' },
        { title: 'Checks heartbeat' },
        { title: 'Listens to lung sounds' },
        { title: 'Essential diagnostic tool' },
      ],
      action: { href: '#' },
    },

    {
      id: 'scissor',
      title: 'Medical Scissor',
      description: 'Sharp tool used for cutting bandages and medical materials.',
      price: 'Use: Cutting medical supplies',
      image: '/images/scissor.webp',
      isRecommended: true,
      features: [
        { title: 'Cuts bandages' },
        { title: 'Used in surgeries' },
        { title: 'Sterilizable metal' },
        { title: 'Easy grip design' },
      ],
      action: { href: '#' },
    },

    {
      id: 'stretcher',
      title: 'Stretcher',
      description: 'Portable bed used to transport patients.',
      price: 'Use: Moving injured or sick patients',
      image: '/images/stretcher.webp',
      isRecommended: true,
      features: [
        { title: 'Used in ambulances' },
        { title: 'Strong frame' },
        { title: 'Portable design' },
        { title: 'Comfortable patient support' },
      ],
      action: { href: '#' },
    },

    {
      id: 'facemask',
      title: 'Face Mask',
      description: 'Protective mask used to prevent infections.',
      price: 'Use: Protects against airborne germs',
      image: '/images/facemask.webp',
      isRecommended: true,
      features: [
        { title: 'Prevents infection spread' },
        { title: 'Used in hospitals' },
        { title: 'Lightweight and breathable' },
        { title: 'Disposable protection' },
      ],
      action: { href: '#' },
    },

    {
      id: 'gauze',
      title: 'Gauze',
      description: 'Medical cloth used to clean and cover wounds.',
      price: 'Use: Wound care and dressing',
      image: '/images/gauze.webp',
      isRecommended: true,
      features: [
        { title: 'Used for wound dressing' },
        { title: 'Absorbs blood and fluids' },
        { title: 'Sterile packaging' },
        { title: 'Soft and flexible' },
      ],
      action: { href: '#' },
    },

    {
      id: 'gloves',
      title: 'Rubber Gloves',
      description: 'Protective gloves used by medical staff.',
      price: 'Use: Prevents contamination',
      image: '/images/gloves.webp',
      isRecommended: true,
      features: [
        { title: 'Protects hands from infection' },
        { title: 'Disposable material' },
        { title: 'Flexible and comfortable' },
        { title: 'Used in examinations' },
      ],
      action: { href: '#' },
    },

    {
      id: 'microscope',
      title: 'Microscope',
      description: 'Instrument used to view microorganisms.',
      price: 'Use: Laboratory diagnosis',
      image: '/images/microscope.webp',
      isRecommended: true,
      features: [
        { title: 'Used in laboratories' },
        { title: 'Magnifies tiny organisms' },
        { title: 'Helps disease diagnosis' },
        { title: 'High precision lens' },
      ],
      action: { href: '#' },
    },

    {
      id: 'thermometer',
      title: 'Thermometer',
      description: 'Device used to measure body temperature.',
      price: 'Use: Detecting fever',
      image: '/images/thermometer.webp',
      isRecommended: true,
      features: [
        { title: 'Measures body temperature' },
        { title: 'Digital or mercury types' },
        { title: 'Quick readings' },
        { title: 'Used in clinics and homes' },
      ],
      action: { href: '#' },
    },

    {
      id: 'xray',
      title: 'X-Ray Machine',
      description: 'Medical imaging device used to view bones.',
      price: 'Use: Diagnosing fractures and internal issues',
      image: '/images/xray.webp',
      isRecommended: true,
      features: [
        { title: 'Detects bone fractures' },
        { title: 'Used in hospitals' },
        { title: 'Medical imaging technology' },
        { title: 'Helps diagnose injuries' },
      ],
      action: { href: '#' },
    },

    {
      id: 'medicalchair',
      title: 'Medical Chair',
      description: 'Special chair used for patient examination.',
      price: 'Use: Patient comfort during examination',
      image: '/images/medicalchair.webp',
      isRecommended: true,
      features: [
        { title: 'Comfortable patient support' },
        { title: 'Adjustable height' },
        { title: 'Used in clinics' },
        { title: 'Durable structure' },
      ],
      action: { href: '#' },
    },

    {
      id: 'syringe',
      title: 'Syringe',
      description: 'Medical tool used for injections.',
      price: 'Use: Injecting medicines or vaccines',
      image: '/images/syringe.webp',
      isRecommended: true,
      features: [
        { title: 'Used for injections' },
        { title: 'Sterile disposable design' },
        { title: 'Precise dosage delivery' },
        { title: 'Common medical tool' },
      ],
      action: { href: '#' },
    },

    {
      id: 'wheelchair',
      title: 'Wheelchair',
      description: 'Chair with wheels used by patients with mobility issues.',
      price: 'Use: Patient mobility support',
      image: '/images/wheelchair.webp',
      isRecommended: true,
      features: [
        { title: 'Helps patient movement' },
        { title: 'Strong wheel system' },
        { title: 'Comfortable seating' },
        { title: 'Used in hospitals and homes' },
      ],
      action: { href: '#' },
    },

    {
      id: 'saline',
      title: 'Saline Bag',
      description: 'Fluid bag used for intravenous therapy.',
      price: 'Use: Hydration and medication delivery',
      image: '/images/saline.webp',
      isRecommended: true,
      features: [
        { title: 'Used in IV therapy' },
        { title: 'Provides hydration' },
        { title: 'Sterile medical fluid' },
        { title: 'Common hospital supply' },
      ],
      action: { href: '#' },
    },
  ],
}
