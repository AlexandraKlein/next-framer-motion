import BlobShape from '../components/blobShape';
import BlobShapeAlt from '../components/blogShapeAlt';
import { motion } from 'framer-motion';

const blobs = [
    {
        id: 'shape1',
        initialPath:
            'M 189,80.37 C 243,66.12 307.3,87.28 350.9,124.1 389.3,156.6 417,211.2 418.1,263.4 419.1,305.7 401.8,355.6 368.5,379.1 298.8,428 179.2,446.4 117.6,386.3 65.4,335.3 78.55,230.3 105.5,160.5 119.7,123.6 152.6,89.85 189,80.37 Z',
        animatePath:
            'M 189,80.37 C 232.6,46.67 352.5,67.06 350.9,124.1 349.5,173.4 311.7,168 312.4,248.1 312.9,301.1 382.5,319.2 368.5,379.1 349.4,460.6 137.7,467.5 117.6,386.3 98.68,309.7 171.5,292.2 183.6,240.1 195.7,188.2 123.8,130.7 189,80.37 Z',
        imgSrc: 'https://images.unsplash.com/photo-1558035498-265faf6ba813?ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8NTN8ODM1MjY1N3x8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
    },
    {
        id: 'shape2',
        initialPath:
            'M 378.1,121.2 C 408.4,150 417.2,197.9 411,245.8 404.8,293.7 383.5,341.7 353.4,370.7 303.2,419.1 198.7,427.7 144.5,383.8 86.18,336.5 67.13,221.3 111.9,161 138.6,125 188.9,99.62 240.7,90.92 292.4,82.24 345.6,90.32 378.1,121.2 Z',
        animatePath:
            'M 418.1,159.8 C 460.9,222.9 497,321.5 452.4,383.4 417.2,432.4 371.2,405.6 271.3,420.3 137.2,440 90.45,500.6 42.16,442.8 -9.572,381 86.33,289.1 117.7,215.5 144.3,153.4 145.7,54.21 212.7,36.25 290.3,15.36 373.9,94.6 418.1,159.8 Z',
        imgSrc: 'https://images.unsplash.com/photo-1558035579-a10d04acf787?ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8NTV8ODM1MjY1N3x8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
    },
    {
        id: 'shape3',
        initialPath:
            'M 184,127.4 C 235.4,92.39 319.7,79.27 359.9,132.2 383.2,163 357.1,216.6 355.8,258.8 354.8,291.2 371.3,332.9 352.9,356 306.1,414.4 205.1,419.3 153.7,367.2 123.8,336.8 128.6,272.1 136.1,225.2 142.1,187.8 157,145.7 184,127.4 Z',
        animatePath:
            'M 193.7,217.3 C 236.4,228.3 279.7,242.7 320.9,231.8 362.6,220.9 446.8,197.1 457.6,241.5 469.3,289.8 378.7,308.3 330.2,319.2 278.5,330.8 222.3,319.2 172.1,302.2 125.2,286.4 33.08,273.2 45.14,225.2 57.22,177.1 145.7,204.8 193.7,217.3 Z',
        imgSrc: 'https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8Mjk0fDgzNTI2NTd8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
    },
    {
        id: 'shape4',
        initialPath:
            'M 402.7,215.5 C 433.9,280.4 488.1,367.2 447.7,426.8 410.1,482.2 316.7,460.2 249.7,460.6 182.8,461.1 88.08,485.5 51.26,429.5 10.29,367.3 73.19,279.4 106.9,213 141.8,144 176.6,33.65 253.9,33.7 332.2,33.75 368.8,144.9 402.7,215.5 Z',
        animatePath:
            'M 440.9,118.5 C 486.5,189.8 499,297.9 458.3,371.8 422.2,437.2 335.8,475.1 261.5,477.3 181.4,479.6 83.9,445.4 43.22,376.1 -0.2483,302.1 13.51,189.9 61.98,119.1 104.5,56.88 190.6,20.5 265.7,22.71 332.2,24.67 405,62.28 440.9,118.5 Z',
        imgSrc: 'https://images.unsplash.com/photo-1545398865-0062dafeb74d?ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MTMzfDQyODY0Nzh8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
    },
    {
        id: 'shape5',
        animatePath:
            'M 402.7,215.5 C 433.9,280.4 488.1,367.2 447.7,426.8 410.1,482.2 316.7,460.2 249.7,460.6 182.8,461.1 88.08,485.5 51.26,429.5 10.29,367.3 73.19,279.4 106.9,213 141.8,144 176.6,33.65 253.9,33.7 332.2,33.75 368.8,144.9 402.7,215.5 Z',
        initialPath:
            'M 440.9,118.5 C 486.5,189.8 499,297.9 458.3,371.8 422.2,437.2 335.8,475.1 261.5,477.3 181.4,479.6 83.9,445.4 43.22,376.1 -0.2483,302.1 13.51,189.9 61.98,119.1 104.5,56.88 190.6,20.5 265.7,22.71 332.2,24.67 405,62.28 440.9,118.5 Z',
        imgSrc: 'https://images.unsplash.com/photo-1576406923149-3b613b87e3e9?ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8NTR8ODM1MjY1N3x8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
    },
    {
        id: 'shape6',
        animatePath:
            'M 184,127.4 C 235.4,92.39 319.7,79.27 359.9,132.2 383.2,163 357.1,216.6 355.8,258.8 354.8,291.2 371.3,332.9 352.9,356 306.1,414.4 205.1,419.3 153.7,367.2 123.8,336.8 128.6,272.1 136.1,225.2 142.1,187.8 157,145.7 184,127.4 Z',
        initialPath:
            'M 193.7,217.3 C 236.4,228.3 279.7,242.7 320.9,231.8 362.6,220.9 446.8,197.1 457.6,241.5 469.3,289.8 378.7,308.3 330.2,319.2 278.5,330.8 222.3,319.2 172.1,302.2 125.2,286.4 33.08,273.2 45.14,225.2 57.22,177.1 145.7,204.8 193.7,217.3 Z',
        imgSrc: 'https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MjM1fDQyODY0Nzh8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
    },
    {
        id: 'shape7',
        animatePath:
            'M 378.1,121.2 C 408.4,150 417.2,197.9 411,245.8 404.8,293.7 383.5,341.7 353.4,370.7 303.2,419.1 198.7,427.7 144.5,383.8 86.18,336.5 67.13,221.3 111.9,161 138.6,125 188.9,99.62 240.7,90.92 292.4,82.24 345.6,90.32 378.1,121.2 Z',
        initialPath:
            'M 418.1,159.8 C 460.9,222.9 497,321.5 452.4,383.4 417.2,432.4 371.2,405.6 271.3,420.3 137.2,440 90.45,500.6 42.16,442.8 -9.572,381 86.33,289.1 117.7,215.5 144.3,153.4 145.7,54.21 212.7,36.25 290.3,15.36 373.9,94.6 418.1,159.8 Z',
        imgSrc: 'https://images.unsplash.com/photo-1438183972690-6d4658e3290e?ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MjQwfDQyODY0Nzh8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
    },
    {
        id: 'shape8',
        animatePath:
            'M 189,80.37 C 243,66.12 307.3,87.28 350.9,124.1 389.3,156.6 417,211.2 418.1,263.4 419.1,305.7 401.8,355.6 368.5,379.1 298.8,428 179.2,446.4 117.6,386.3 65.4,335.3 78.55,230.3 105.5,160.5 119.7,123.6 152.6,89.85 189,80.37 Z',
        initialPath:
            'M 189,80.37 C 232.6,46.67 352.5,67.06 350.9,124.1 349.5,173.4 311.7,168 312.4,248.1 312.9,301.1 382.5,319.2 368.5,379.1 349.4,460.6 137.7,467.5 117.6,386.3 98.68,309.7 171.5,292.2 183.6,240.1 195.7,188.2 123.8,130.7 189,80.37 Z',
        imgSrc: 'https://images.unsplash.com/photo-1558693168-c370615b54e0?ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8Mjc5fDgzNTI2NTd8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
    },
];

const blobs2 = [
    {
        id: 'shape9',
        initialPath:
            'M35.7,5.3C35.7,29.7,17.9,59.5,-7.4,59.5C-32.6,59.5,-65.1,29.7,-65.1,5.3C-65.1,-19.1,-32.6,-38.1,-7.4,-38.1C17.9,-38.1,35.7,-19.1,35.7,5.3Z',
        animatePath:
            'M61.9,2.5C61.9,27.4,31,54.9,-0.7,54.9C-32.5,54.9,-64.9,27.4,-64.9,2.5C-64.9,-22.4,-32.5,-44.9,-0.7,-44.9C31,-44.9,61.9,-22.4,61.9,2.5Z',
        imgSrc: 'https://images.unsplash.com/photo-1558693168-c370615b54e0?ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8Mjc5fDgzNTI2NTd8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
    },
    {
        id: 'shape10',
        initialPath:
            'M35.6,2C35.6,21.4,17.8,42.9,-6.6,42.9C-31.1,42.9,-62.1,21.4,-62.1,2C-62.1,-17.4,-31.1,-34.7,-6.6,-34.7C17.8,-34.7,35.6,-17.4,35.6,2Z',
        animatePath:
            'M51.8,-5.3C51.8,19.7,25.9,39.4,0.9,39.4C-24,39.4,-48.1,19.7,-48.1,-5.3C-48.1,-30.4,-24,-60.7,0.9,-60.7C25.9,-60.7,51.8,-30.4,51.8,-5.3Z',
        imgSrc: 'https://images.unsplash.com/photo-1438183972690-6d4658e3290e?ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MjQwfDQyODY0Nzh8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
    },
    {
        id: 'shape11',
        initialPath:
            'M41.5,-4.1C41.5,19.3,20.7,38.6,1.5,38.6C-17.7,38.6,-35.4,19.3,-35.4,-4.1C-35.4,-27.4,-17.7,-54.8,1.5,-54.8C20.7,-54.8,41.5,-27.4,41.5,-4.1Z',
        animatePath:
            'M58.9,-1.3C58.9,19.5,29.5,39,-1.8,39C-33.1,39,-66.1,19.5,-66.1,-1.3C-66.1,-22,-33.1,-44.1,-1.8,-44.1C29.5,-44.1,58.9,-22,58.9,-1.3Z',
        imgSrc: 'https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MjM1fDQyODY0Nzh8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
    },
    {
        id: 'shape12',
        initialPath:
            'M44.8,-3.4C44.8,22.8,22.4,45.6,-1.1,45.6C-24.5,45.6,-49.1,22.8,-49.1,-3.4C-49.1,-29.6,-24.5,-59.1,-1.1,-59.1C22.4,-59.1,44.8,-29.6,44.8,-3.4Z',
        animatePath:
            'M37.6,2.6C37.6,23.9,18.8,47.9,-7,47.9C-32.8,47.9,-65.6,23.9,-65.6,2.6C-65.6,-18.7,-32.8,-37.4,-7,-37.4C18.8,-37.4,37.6,-18.7,37.6,2.6Z',
        imgSrc: 'https://images.unsplash.com/photo-1576406923149-3b613b87e3e9?ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8NTR8ODM1MjY1N3x8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
    },
    {
        id: 'shape13',
        animatePath:
            'M50.1,-1.3C50.1,21.5,25.1,43.1,2.3,43.1C-20.5,43.1,-41,21.5,-41,-1.3C-41,-24.2,-20.5,-48.4,2.3,-48.4C25.1,-48.4,50.1,-24.2,50.1,-1.3Z',
        initialPath:
            'M54.2,-1.8C54.2,21.4,27.1,42.9,1,42.9C-25.2,42.9,-50.4,21.4,-50.4,-1.8C-50.4,-25,-25.2,-50,1,-50C27.1,-50,54.2,-25,54.2,-1.8Z',
        imgSrc: 'https://images.unsplash.com/photo-1558035579-a10d04acf787?ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8NTV8ODM1MjY1N3x8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
    },
    {
        id: 'shape14',
        animatePath:
            'M40.3,2.8C40.3,27.3,20.2,54.5,-3.8,54.5C-27.7,54.5,-55.4,27.3,-55.4,2.8C-55.4,-21.6,-27.7,-43.2,-3.8,-43.2C20.2,-43.2,40.3,-21.6,40.3,2.8Z',
        initialPath:
            'M42.3,8C42.3,33.1,21.1,66.1,1.4,66.1C-18.3,66.1,-36.5,33.1,-36.5,8C-36.5,-17,-18.3,-33.9,1.4,-33.9C21.1,-33.9,42.3,-17,42.3,8Z',
        imgSrc: 'https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8Mjk0fDgzNTI2NTd8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
    },
    {
        id: 'shape15',
        animatePath:
            'M59.8,-4.1C59.8,18.4,29.9,36.8,-1.5,36.8C-32.9,36.8,-65.8,18.4,-65.8,-4.1C-65.8,-26.7,-32.9,-53.3,-1.5,-53.3C29.9,-53.3,59.8,-26.7,59.8,-4.1Z',
        initialPath:
            'M51.6,1.9C51.6,31.7,25.8,63.4,-1.2,63.4C-28.3,63.4,-56.5,31.7,-56.5,1.9C-56.5,-28,-28.3,-55.9,-1.2,-55.9C25.8,-55.9,51.6,-28,51.6,1.9Z',
        imgSrc: 'https://images.unsplash.com/photo-1558035579-a10d04acf787?ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8NTV8ODM1MjY1N3x8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
    },
    {
        id: 'shape16',
        animatePath:
            'M60.9,-0.9C60.9,28,30.5,56.1,5.1,56.1C-20.3,56.1,-40.7,28,-40.7,-0.9C-40.7,-29.9,-20.3,-59.7,5.1,-59.7C30.5,-59.7,60.9,-29.9,60.9,-0.9Z',
        initialPath:
            'M51.4,1C51.4,28.3,25.7,56.5,-2.3,56.5C-30.4,56.5,-60.7,28.3,-60.7,1C-60.7,-26.3,-30.4,-52.7,-2.3,-52.7C25.7,-52.7,51.4,-26.3,51.4,1Z',
        imgSrc: 'https://images.unsplash.com/photo-1558035498-265faf6ba813?ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8NTN8ODM1MjY1N3x8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
    },
];

const Blob = () => {
    return (
        <div>
            <h2>With XML IMAGE tag</h2>
            <motion.div
                style={{ display: 'flex', flexWrap: 'wrap' }}
                initial="initial"
                animate="enter"
                exit="exit"
                variants={{
                    exit: { transition: { staggerChildren: 0.1 } },
                    enter: { transition: { staggerChildren: 0.1 } },
                }}
            >
                {blobs.map(blob => (
                    <BlobShape
                        key={blob.id}
                        id={blob.id}
                        initialPath={blob.initialPath}
                        animatePath={blob.animatePath}
                        orientation={blob.orientation}
                        imgSrc={blob.imgSrc}
                    />
                ))}
            </motion.div>
            <h2>With IMG tag</h2>
            <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                {blobs2.map(blob => (
                    <BlobShapeAlt
                        key={blob.id}
                        id={blob.id}
                        initialPath={blob.initialPath}
                        animatePath={blob.animatePath}
                        orientation={blob.orientation}
                        imgSrc={blob.imgSrc}
                    />
                ))}
            </div>

            <svg>
                <clipPath id="wave" clipPathUnits="objectBoundingBox">
                    <path d="M1,0c0,0-0.3,0.1-0.5,0.1S0.3,0,0,0.1V1h1L1,0z" />
                </clipPath>
            </svg>

            <svg
                width="0"
                height="0"
                viewBox="0 0 1970 1480"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
            >
                <g fill="none">
                    <defs>
                        <clipPath
                            id="mask"
                            clipPathUnits="objectBoundingBox"
                            transform="scale(0.000507614213198, 0.000675675675676)"
                        >
                            <path
                                d="M1675.36269,-364.434932 C2113.86732,-327.734916 2152.98578,210.315022 1849.76772,823.436801 C1786.44006,951.488441 1704.06533,1057.87144 1610.25811,1141.53058 C1471.01269,1265.71242 1015.73754,1678.13346 1015.73754,1678.13346 C1015.73754,1678.13346 693.522403,1317.51047 531.111878,1139.05814 C508.090096,1113.76242 486.314497,1086.30557 465.963232,1056.6629 C187.894401,651.642448 282.263744,450.043803 512.952922,156.125904 C743.642099,-137.791995 885.379317,5.67652257 1126.47847,-126.917454 C1367.57763,-259.511431 1452.62654,-383.076516 1675.36269,-364.434932 Z"
                                id="Path"
                                transform="translate(1170.781230, 655.913211) rotate(-138.000000) translate(-1170.781230, -655.913211) "
                            ></path>
                        </clipPath>
                    </defs>
                </g>
            </svg>

            <div className="section section1">
                <h1>Some text goes here</h1>
            </div>

            <div className="section section2">
                <h1>Some text goes here</h1>
            </div>
            <style jsx>{`
                .clipping-mask {
                    clip-path: url(#mask);
                    object-fit: cover;
                    width: 100%;
                }
                .section {
                    clip-path: url(#wave);
                    padding: 300px 20px 600px;
                }

                .section1 {
                    background: url(https://images.unsplash.com/photo-1558035498-265faf6ba813?ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8NTN8ODM1MjY1N3x8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60)
                        no-repeat center;
                    background-size: cover;
                }

                .section2 {
                    background: url(https://images.unsplash.com/photo-1438183972690-6d4658e3290e?ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MjQwfDQyODY0Nzh8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60)
                        no-repeat center;
                    background-size: cover;
                    margin-top: -300px;
                }
            `}</style>
        </div>
    );
};

export default Blob;
