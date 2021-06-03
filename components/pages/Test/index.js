import WaveSectionAlt from '../../WaveSectionAlt';
import WaveSection from '../../WaveSection';
import WaveClip from '../../WaveClip';
import cx from 'classnames';
import styles from './Test.module.scss';

export default function Test() {
    return (
        <div>
            <div className={styles.standAloneContent}>
                <h1>Added SVG wave below content</h1>
                <p>
                    Every piece is made to foster confidence + self-expression,
                    while helping parents to affordably + adorably dress their
                    kiddos, from newborn to 5 years old. Lorem ipsum potenti
                    nullam ac tortor vitae purus faucibus ornare. Tortor at
                    risus viverra adipiscing at.
                </p>
            </div>
            <WaveSectionAlt
                backgroundColor="#D2F6FD"
                backgroundPosition="bottom"
                backgroundImage="https://images.unsplash.com/photo-1621349375404-01f48593be7a?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDU0fHFQWXNEenZKT1ljfHxlbnwwfHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
            >
                <div className={styles.content}>
                    <h1>SVG wave</h1>
                    <h2>
                        Garanimals is a collection of playful mix + match
                        children’s clothing that goes together.
                    </h2>
                    <div className={styles.innerContent}>
                        <p>
                            Every piece is made to foster confidence +
                            self-expression, while helping parents to affordably
                            + adorably dress their kiddos, from newborn to 5
                            years old. Lorem ipsum potenti nullam ac tortor
                            vitae purus faucibus ornare. Tortor at risus viverra
                            adipiscing at.
                        </p>
                        <p>
                            Every piece is made to foster confidence +
                            self-expression, while helping parents to affordably
                            + adorably dress their kiddos, from newborn to 5
                            years old. Lorem ipsum potenti nullam ac tortor
                            vitae purus faucibus ornare. Tortor at risus viverra
                            adipiscing at.
                        </p>
                    </div>
                </div>
            </WaveSectionAlt>
            <WaveSectionAlt
                backgroundColor="#F8BAC5"
                backgroundImage="https://images.unsplash.com/photo-1481349518771-20055b2a7b24?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NzAwfHxiYWNrZ3JvdW5kfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
            >
                <div className={styles.content}>
                    <h1>We go together</h1>
                    <h2>
                        Garanimals is a collection of playful mix + match
                        children’s clothing that goes together.{' '}
                    </h2>
                    <div className={styles.innerContent}>
                        <p>
                            Every piece is made to foster confidence +
                            self-expression, while helping parents to affordably
                            + adorably dress their kiddos, from newborn to 5
                            years old. Lorem ipsum potenti nullam ac tortor
                            vitae purus faucibus ornare. Tortor at risus viverra
                            adipiscing at.
                        </p>
                        <p>
                            Every piece is made to foster confidence +
                            self-expression, while helping parents to affordably
                            + adorably dress their kiddos, from newborn to 5
                            years old. Lorem ipsum potenti nullam ac tortor
                            vitae purus faucibus ornare. Tortor at risus viverra
                            adipiscing at.
                        </p>
                    </div>
                    <div className={styles.innerContent}>
                        <p>
                            Every piece is made to foster confidence +
                            self-expression, while helping parents to affordably
                            + adorably dress their kiddos, from newborn to 5
                            years old. Lorem ipsum potenti nullam ac tortor
                            vitae purus faucibus ornare. Tortor at risus viverra
                            adipiscing at.
                        </p>
                        <p>
                            Every piece is made to foster confidence +
                            self-expression, while helping parents to affordably
                            + adorably dress their kiddos, from newborn to 5
                            years old. Lorem ipsum potenti nullam ac tortor
                            vitae purus faucibus ornare. Tortor at risus viverra
                            adipiscing at.
                        </p>
                    </div>
                </div>
            </WaveSectionAlt>
            <div className={styles.standAloneContent}>
                <h1>Responsive clip path</h1>
                <p>
                    Every piece is made to foster confidence + self-expression,
                    while helping parents to affordably + adorably dress their
                    kiddos, from newborn to 5 years old. Lorem ipsum potenti
                    nullam ac tortor vitae purus faucibus ornare. Tortor at
                    risus viverra adipiscing at.
                </p>
            </div>
            <WaveSection
                id="wave1"
                backgroundImage="https://images.unsplash.com/photo-1525268771113-32d9e9021a97?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Njk3fHxiYWNrZ3JvdW5kfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
            >
                <div className={styles.content}>
                    <div className={styles.innerContent}>
                        <p>
                            Every piece is made to foster confidence +
                            self-expression, while helping parents to affordably
                            + adorably dress their kiddos, from newborn to 5
                            years old. Lorem ipsum potenti nullam ac tortor
                            vitae purus faucibus ornare. Tortor at risus viverra
                            adipiscing at.
                        </p>
                        <p>
                            Every piece is made to foster confidence +
                            self-expression, while helping parents to affordably
                            + adorably dress their kiddos, from newborn to 5
                            years old. Lorem ipsum potenti nullam ac tortor
                            vitae purus faucibus ornare. Tortor at risus viverra
                            adipiscing at.
                        </p>
                    </div>
                </div>
            </WaveSection>

            <WaveSection
                id="wave2"
                theme="right"
                backgroundImage="https://images.unsplash.com/photo-1463936575829-25148e1db1b8?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTA1fHxiYWNrZ3JvdW5kfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
            >
                <div className={styles.content}>
                    <h1>We go together</h1>
                    <h2>
                        Garanimals is a collection of playful mix + match
                        children’s clothing that goes together.{' '}
                    </h2>
                    <div className={styles.innerContent}>
                        <p>
                            Every piece is made to foster confidence +
                            self-expression, while helping parents to affordably
                            + adorably dress their kiddos, from newborn to 5
                            years old. Lorem ipsum potenti nullam ac tortor
                            vitae purus faucibus ornare. Tortor at risus viverra
                            adipiscing at.
                        </p>
                        <p>
                            Every piece is made to foster confidence +
                            self-expression, while helping parents to affordably
                            + adorably dress their kiddos, from newborn to 5
                            years old. Lorem ipsum potenti nullam ac tortor
                            vitae purus faucibus ornare. Tortor at risus viverra
                            adipiscing at.
                        </p>
                    </div>
                    <div className={styles.innerContent}>
                        <p>
                            Every piece is made to foster confidence +
                            self-expression, while helping parents to affordably
                            + adorably dress their kiddos, from newborn to 5
                            years old. Lorem ipsum potenti nullam ac tortor
                            vitae purus faucibus ornare. Tortor at risus viverra
                            adipiscing at.
                        </p>
                        <p>
                            Every piece is made to foster confidence +
                            self-expression, while helping parents to affordably
                            + adorably dress their kiddos, from newborn to 5
                            years old. Lorem ipsum potenti nullam ac tortor
                            vitae purus faucibus ornare. Tortor at risus viverra
                            adipiscing at.
                        </p>
                    </div>
                </div>
            </WaveSection>

            <WaveSection
                id="wave3"
                backgroundImage="https://images.unsplash.com/photo-1490367605959-06955305859b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OTI5fHxiYWNrZ3JvdW5kfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
            >
                <div className={styles.content}>
                    <h1>We go together</h1>
                    <h2>
                        Garanimals is a collection of playful mix + match
                        children’s clothing that goes together.{' '}
                    </h2>
                    <div className={styles.innerContent}>
                        <p>
                            Every piece is made to foster confidence +
                            self-expression, while helping parents to affordably
                            + adorably dress their kiddos, from newborn to 5
                            years old. Lorem ipsum potenti nullam ac tortor
                            vitae purus faucibus ornare. Tortor at risus viverra
                            adipiscing at.
                        </p>
                        <p>
                            Every piece is made to foster confidence +
                            self-expression, while helping parents to affordably
                            + adorably dress their kiddos, from newborn to 5
                            years old. Lorem ipsum potenti nullam ac tortor
                            vitae purus faucibus ornare. Tortor at risus viverra
                            adipiscing at.
                        </p>
                    </div>
                </div>
            </WaveSection>
            <WaveSection
                id="wave4"
                theme="right"
                backgroundImage="https://images.unsplash.com/photo-1517191434949-5e90cd67d2b6?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDV8fGJhY2tncm91bmR8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
                lastOfType
            >
                <div className={cx(styles.content, styles.whiteText)}>
                    <h1>We go together</h1>
                    <h2>
                        Garanimals is a collection of playful mix + match
                        children’s clothing that goes together.{' '}
                    </h2>
                    <div className={styles.innerContent}>
                        <p>
                            Every piece is made to foster confidence +
                            self-expression, while helping parents to affordably
                            + adorably dress their kiddos, from newborn to 5
                            years old. Lorem ipsum potenti nullam ac tortor
                            vitae purus faucibus ornare. Tortor at risus viverra
                            adipiscing at.
                        </p>
                        <p>
                            Every piece is made to foster confidence +
                            self-expression, while helping parents to affordably
                            + adorably dress their kiddos, from newborn to 5
                            years old. Lorem ipsum potenti nullam ac tortor
                            vitae purus faucibus ornare. Tortor at risus viverra
                            adipiscing at.
                        </p>
                    </div>
                </div>
            </WaveSection>
            <div className={styles.standAloneContent}>
                <h1>Unresponsive clip path</h1>
                <p>
                    Every piece is made to foster confidence + self-expression,
                    while helping parents to affordably + adorably dress their
                    kiddos, from newborn to 5 years old. Lorem ipsum potenti
                    nullam ac tortor vitae purus faucibus ornare. Tortor at
                    risus viverra adipiscing at.
                </p>
            </div>
            <WaveClip />
            <section className={styles.section}>
                <img
                    className={styles.backgroundImage}
                    src="https://images.unsplash.com/photo-1622702637362-92e3122dcb90?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1OXx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1200"
                />
                <div className={cx(styles.content, styles.whiteText)}>
                    <h1>We go together</h1>
                    <h2>
                        Garanimals is a collection of playful mix + match
                        children’s clothing that goes together.{' '}
                    </h2>
                    <div className={styles.innerContent}>
                        <p>
                            Every piece is made to foster confidence +
                            self-expression, while helping parents to affordably
                            + adorably dress their kiddos, from newborn to 5
                            years old. Lorem ipsum potenti nullam ac tortor
                            vitae purus faucibus ornare. Tortor at risus viverra
                            adipiscing at.
                        </p>
                        <p>
                            Every piece is made to foster confidence +
                            self-expression, while helping parents to affordably
                            + adorably dress their kiddos, from newborn to 5
                            years old. Lorem ipsum potenti nullam ac tortor
                            vitae purus faucibus ornare. Tortor at risus viverra
                            adipiscing at.
                        </p>
                    </div>
                </div>
            </section>

            <section className={styles.section}>
                <img
                    className={styles.backgroundImage}
                    src="https://images.unsplash.com/photo-1585399000684-d2f72660f092?ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw2Nnx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1200"
                />
                <div className={cx(styles.content, styles.whiteText)}>
                    <h1>We go together</h1>
                    <h2>
                        Garanimals is a collection of playful mix + match
                        children’s clothing that goes together.{' '}
                    </h2>
                    <div className={styles.innerContent}>
                        <p>
                            Every piece is made to foster confidence +
                            self-expression, while helping parents to affordably
                            + adorably dress their kiddos, from newborn to 5
                            years old. Lorem ipsum potenti nullam ac tortor
                            vitae purus faucibus ornare. Tortor at risus viverra
                            adipiscing at.
                        </p>
                        <p>
                            Every piece is made to foster confidence +
                            self-expression, while helping parents to affordably
                            + adorably dress their kiddos, from newborn to 5
                            years old. Lorem ipsum potenti nullam ac tortor
                            vitae purus faucibus ornare. Tortor at risus viverra
                            adipiscing at.
                        </p>
                    </div>
                </div>
            </section>

            <section className={cx(styles.section, styles.last)}>
                <img
                    className={styles.backgroundImage}
                    src="https://images.unsplash.com/photo-1622645789620-452e764960f4?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3NXx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1200"
                />
                <div className={styles.content}>
                    <h1>We go together</h1>
                    <h2>
                        Garanimals is a collection of playful mix + match
                        children’s clothing that goes together.{' '}
                    </h2>
                    <div className={styles.innerContent}>
                        <p>
                            Every piece is made to foster confidence +
                            self-expression, while helping parents to affordably
                            + adorably dress their kiddos, from newborn to 5
                            years old. Lorem ipsum potenti nullam ac tortor
                            vitae purus faucibus ornare. Tortor at risus viverra
                            adipiscing at.
                        </p>
                        <p>
                            Every piece is made to foster confidence +
                            self-expression, while helping parents to affordably
                            + adorably dress their kiddos, from newborn to 5
                            years old. Lorem ipsum potenti nullam ac tortor
                            vitae purus faucibus ornare. Tortor at risus viverra
                            adipiscing at.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
}
