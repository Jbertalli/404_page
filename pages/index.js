import Head from 'next/head';
import { useEffect, useState } from 'react';
import { Router, useRouter } from 'next/router';
import { Button, Container } from 'semantic-ui-react';
import styles from '../styles/404.module.css';
import Fishing from '../components/Fishing';

const NotFound = () => {
    const [isDesktop, setDesktop] = useState(false);
    const router = useRouter();
    console.error('Page Not Found');

    // useEffect(() => {
    //     setTimeout(() => {
    //         router.push('/');
    //     }, 5000)
    // }, [])

    useEffect(() => {
        document.body.style.overflow = "hidden";
      }, []);

      useEffect(() => {
        if (window.innerWidth > 832) {
          setDesktop(true);
        } else {
          setDesktop(false);
        }

        const updateMedia = () => {
          if (window.innerWidth > 832) {
            setDesktop(true);
          } else {
            setDesktop(false);
          }
        };
        window.addEventListener('resize', updateMedia);
        return () => window.removeEventListener('resize', updateMedia);
      }, []);
    
    return (
        <>
            <Head>
                <title>404 Not Found</title>
                <meta name="description" content="404, not found" />
            </Head>
            {isDesktop ? (
              <>
                <div className={styles.notfound} style={{ height: '110vh', textAlign: 'center', padding: '14% 20% 0px 20%' }}>
                  <Container className={styles.numbers} style={{ backgroundColor: '#f2f2f2', borderRadius: '1%', transform: 'translateY(-50px)' }}>
                      <h1 className={styles.spin} style={{ fontSize: '2000%', color: '#3978f5', opacity: .9, transform: 'translateY(-10px)' }}>404</h1>
                      <div style={{ transform: 'translateY(-6vh)' }}>
                        <h2 style={{ fontSize: '30px', color: 'black', opacity: .8, paddingBottom: '1%' }}>Page Not Found</h2>
                        <h4 style={{ fontSize: '20px', color: 'black', opacity: .8, paddingBottom: '1%' }}>{`Sorry, the webpage you're trying to reach doesn't exist`}</h4>
                        <Button
                            icon="home"
                            content="Return to Homepage"
                            basic
                            color='blue'
                            circular
                            className={styles.button}
                            style={{ fontSize: '1.4em', cursor: 'pointer', transform: 'translateY(15px)', marginBottom: '2%' }}
                            // onClick={() => router.push("/")}
                        />
                      </div>
                  </Container>
                  <Fishing />
                </div>
              </>
            ):(
              <>
                <div className={styles.notfound} style={{ height: '105vh', textAlign: 'center', padding: '140px 15% 0px 15%' }}>
                  <Container className={styles.numbers} style={{ backgroundColor: '#f2f2f2', borderRadius: '1%' }}>
                      <h1 className={styles.spin} style={{ fontSize: '900%', color: '#3978f5', opacity: .9 }}>404</h1>
                      <h2 style={{ fontSize: '30px', color: 'black', opacity: .8, transform: 'translateY(-30px)' }}>Page Not Found</h2>
                      <h4 style={{ fontSize: '20px', color: 'black', opacity: .8, padding: '20px', transform: 'translateY(-50px)' }}>{`Sorry, the webpage you're trying to reach doesn't exist`}</h4>
                      <Button
                          icon="home"
                          content="Return to Homepage"
                          basic
                          color='blue'
                          circular
                          className={styles.button}
                          style={{ fontSize: '1em', cursor: 'pointer', padding: '1em', transform: 'translateY(-50px)' }}
                          // onClick={() => router.push("/")}
                      />
                  </Container>
                  {/* <Fishing /> */}
                </div>
              </>
            )}
            
        </>
    );
}

export default NotFound;
