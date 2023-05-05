import React from 'react';
import "./Header.css";
import { BiGitRepoForked } from 'react-icons/bi';
import { FiGithub } from 'react-icons/fi';

const Header = (props) => {
    return (
        <div className={`${props.toggleMode ? "header flex" : "darkheader flex"}`}>
            <a className='logo' href='/'>Song Player</a>
            <div className={`${props.toggleMode ? "header flex" : "darkheader flex"}`}>
                <a className='button' href='https://about.me/subhranshu' target="_blank">About Me</a>
                <a className='icons' href='https://github.com/subhranshuchoudhury/songplayer' target="_blank"><FiGithub className='btn-github icons' /></a>
                <a className='icons' href='https://github.com/subhranshuchoudhury/songplayer/fork' target="_blank"><BiGitRepoForked className='btn-contribute icons' /></a>
            </div>
        </div>
    );
}

export default Header;
