import BlobShape from '../components/blobShape';
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

const Blob = () => {
    return (
        <div>
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

            <svg>
                <clipPath id="wave" clipPathUnits="objectBoundingBox">
                    <path
                        class="st0"
                        d="M1,0c0,0-0.3,0.1-0.5,0.1S0.3,0,0,0.1V1h1L1,0z"
                    />
                </clipPath>
            </svg>

            <div className="section section1">
                <h1>Some text goes here</h1>
            </div>

            <div className="section section2">
                <h1>Some text goes here</h1>
            </div>
            <style jsx>{`
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

                svg {
                    position: absolute;
                }
            `}</style>
        </div>
    );
};

export default Blob;
