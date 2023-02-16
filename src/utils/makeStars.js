const makeStars = (rating) => {

    let stars = [];
    let wholeStars = Math.floor(rating);
    let halfStars = rating - wholeStars;
    let emptyStars = 5 - wholeStars - halfStars;

    for (let i = 0; i < wholeStars; i++) {
        stars.push("★");
    }
    for (let i = 0; i < halfStars; i++) {
        stars.push("½");
    }
    for (let i = 0; i < emptyStars; i++) {
        stars.push("☆");
    }

    // only display the full or half stars
    return stars.map((star, index) => {
        if (star === "★" || star === "½") {
            return <span key={index}>{star}</span>;
        }
    }
    );
    


};

export default makeStars;