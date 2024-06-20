import React from 'react';
import '../assests/css/Aboutus.css'; // Import your CSS file
const AboutUsPage = () => {
  const fragrances = [
    {
      name: 'Lavender Bliss',
      description: 'A soothing lavender fragrance.',
      keyNotes: ['Lavender', 'Vanilla', 'Musk'],
    },
    {
      name: 'Citrus Zest',
      description: 'A refreshing citrus fragrance.',
      keyNotes: ['Bergamot', 'Lemon', 'Lime'],
    },
    {
      name: 'Ocean Breeze',
      description: 'A clean and fresh ocean-inspired scent.',
      keyNotes: ['Sea Salt', 'Sea Breeze', 'Aquatic Notes'],
    },
    {
      name: 'Vanilla Delight',
      description: 'A warm and sweet vanilla aroma.',
      keyNotes: ['Vanilla', 'Caramel', 'Tonka Bean'],
    },
    {
      name: 'Fresh Linen',
      description: 'A clean and crisp linen scent.',
      keyNotes: ['Cotton', 'Lavender', 'White Musk'],
    },
    {
      name: 'Mystic Woods',
      description: 'A rich and woody scent.',
      keyNotes: ['Sandalwood', 'Patchouli', 'Cedar'],
    },
    {
      name: 'Floral Fantasy',
      description: 'A bouquet of fresh flowers.',
      keyNotes: ['Rose', 'Jasmine', 'Gardenia'],
    },
  ];

  return (
    <div className="about-us">
      <div className="about-us-content">
        <h1>About Perfume Palette</h1>
        <p>
          At Perfume Palette, we are dedicated to the art of fragrance creation.
          Our perfumers meticulously craft scents to delight your senses. Each
          fragrance is a work of art, blending the finest ingredients to create
          an olfactory masterpiece.
        </p>
        <h2>Our Fragrances</h2>
        <table className="fragrance-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Description</th>
              <th>Key Notes</th>
            </tr>
          </thead>
          <tbody>
            {fragrances.map((fragrance, index) => (
              <tr key={index}>
                <td>{fragrance.name}</td>
                <td>{fragrance.description}</td>
                <td>{fragrance.keyNotes.join(', ')}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <p>
          Explore our exquisite collection and experience the art of fragrance.
          Whether you're looking for a soothing lavender scent or a refreshing
          citrus burst, Perfume Palette has the perfect fragrance for you.
        </p>
      </div>
    </div>
  );
};

export default AboutUsPage;
