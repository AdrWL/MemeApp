import React from 'react';
import { Container, Typography } from '@mui/material';
import './Home.css';

export default function Home() {
  return (
    <div className="home-container">
      <Container>
        <Typography variant="h4" gutterBottom>
          Witaj w MEM-APP
        </Typography>
        <Typography variant="body1">
          Odkrywaj, dodawaj i oceniaj najlepsze memy w sieci! Przeglądaj memy w kategoriach Regular i Hot, a także dodawaj nowe memy z internetu. Oceń swoje ulubione memy, przyznając im gwiazdki.
        </Typography>
      </Container>
    </div>
  );
}
