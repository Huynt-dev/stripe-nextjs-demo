'use client';
import Image from 'next/image';
import { Button, Grid } from '@nextui-org/react';

import { Inter } from '@next/font/google';
import styles from './page.module.css';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <main className={styles.main}>
      <Grid.Container gap={2}>
        <Grid>
          <Button color="primary" auto>
            Buy 1
          </Button>
        </Grid>
        <Grid>
          <Button color="success" auto>
            Buy 2
          </Button>
        </Grid>
        <Grid>
          <Button color="gradient" auto>
            Buy 3
          </Button>
        </Grid>
      </Grid.Container>
    </main>
  );
}
