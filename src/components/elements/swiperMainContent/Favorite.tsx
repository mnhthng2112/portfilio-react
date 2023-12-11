
import { useState, useEffect } from 'react';

const shuffleArray = (array: any) => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
};

const data = [
    'https://i.pinimg.com/originals/aa/4c/d3/aa4cd37241f0cd2d3652dcb9a08228aa.png',
    'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/33d2b890119379.5e0e45530dbe8.jpg',
    'https://i.pinimg.com/originals/ef/b9/21/efb921828024649e6572c73992ef0a8c.jpg',
    'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/c63ae115-91b4-410e-82b7-36873c2110a8/d9tt5hk-9f1ea863-643e-491b-9b6b-cb883761ec23.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2M2M2FlMTE1LTkxYjQtNDEwZS04MmI3LTM2ODczYzIxMTBhOFwvZDl0dDVoay05ZjFlYTg2My02NDNlLTQ5MWItOWI2Yi1jYjg4Mzc2MWVjMjMucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.FZXmvtP2JJGTnpJaXPyFxg0N4XtG_kFOmM6TmSE88V0',
    'https://i.pinimg.com/originals/17/f4/21/17f4214e9c41fdd452d1603f4df93922.png',
    'https://previews.123rf.com/images/parsha/parsha1904/parsha190400144/121329109-architecture-interior-space-design-concept-3d-perspective-wire-frame-rendering-isolated-white-backgr.jpg',
    'https://s3.envato.com/files/266025345/architecture_sketch_03.jpg',
    'https://images.adsttc.com/media/images/52e4/fd7b/e8e4/4e1f/4000/0119/large_jpg/library_drawing_highres.jpg?1390738796',
    'https://www.deserres.ca/cdn/shop/articles/atelier_7mars2023_cover.jpg?v=1675872470&width=1080',
    'https://i.ytimg.com/vi/YOgJU7XBQs4/maxresdefault.jpg',
    'https://steamuserimages-a.akamaihd.net/ugc/1830149517982829798/A3B988B7F5F73D7F2664C1B2CC76C1A525024233/',
    'https://static.vecteezy.com/system/resources/previews/012/036/199/non_2x/set-of-doodle-hand-drawn-elements-of-star-cactus-cloud-sun-eye-word-rainbow-etc-illustration-vector.jpg',
    'https://i.redd.it/8stzpgnybz051.jpg',
    'https://summonerswar.spokland.com/assets/img/updates/update-6.1.3-2nd_awakening_howl.jpg',
    'https://i.pinimg.com/736x/19/9b/26/199b265983fbfc12b485430a7bb732ee.jpg',
    'https://images.unsplash.com/photo-1602615576820-ea14cf3e476a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1507646871303-331b8f659227?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1455659817273-f96807779a8a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
]
const Favorite = () => {
    const [imageSequence, setImageSequence] = useState(data);
    const [animationTrigger, setAnimationTrigger] = useState(false);
    useEffect(() => {
        const interval = setInterval(() => {
            setImageSequence((prevSequence) => shuffleArray([...prevSequence]));
            setAnimationTrigger(!animationTrigger)
        }, 10000);

        return () => clearInterval(interval);
    }, [animationTrigger]);

    const triples = [];
    for (let i = 0; i < imageSequence.length; i += 3) {
        const triple = imageSequence.slice(i, i + 3);
        triples.push(triple);
    }

    return (
        <section id='favorite'>
            <div className="container h-full">
                <div className="heading-section mx-auto">
                    my favorites
                </div>
                <div className="grid grid-cols-6 h-full overflow-hidden gap-4 place-items-center">
                    {triples.map((triple, index) => (
                        <div className="grid gap-4" key={index}>
                            <img src={triple[0]} className={`grayscale hover:grayscale-0 duration-300 ${animationTrigger ? 'fade-in': 'fade-out'}` } alt={`${index * 2}`} />
                            <img src={triple[1]} className={`grayscale hover:grayscale-0 duration-300 ${animationTrigger ? 'fade-in': 'fade-out'}` } alt={`${index * 2 + 1}`} />
                            <img src={triple[2]} className={`grayscale hover:grayscale-0 duration-300 ${animationTrigger ? 'fade-in': 'fade-out'}` } alt={`${index * 2 + 2}`} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Favorite;
