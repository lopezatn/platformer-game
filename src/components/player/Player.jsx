import React, { useState, useEffect } from 'react';
import './Player.css';

const Player = () => {
    const [position, setPosition] = useState({ x:50, y:500 });
    const [velocity, setVelocity] = useState({ x:0, y:0 });
    const [isJumping, setIsJumping] = useState(false);

    if (e.code === 'ArrowRight') {
        setVelocity((prev) => ({ ...prev, x:5 }));
    } else if (e.code === 'ArrowLeft') {
        setVelocity((prev) => ({ ...prev, x:-5}));
    } else if (e.code === "Space") {
        setVelocity((prev) => ({ ...prev, y:-15}));
        setIsJumping(true);
    }
};