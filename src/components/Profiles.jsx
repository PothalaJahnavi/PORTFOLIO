import React from 'react';
import './Profiles.css';
import CountUp from 'react-countup';
import lc from '../assets/lc.png';
import cf from "../assets/cfLogo.png";
import he from "../assets/he.png";
import hr from '../assets/hr.png';
import gfg from '../assets/gfg.png';
import cs from '../assets/cs.png';
import cc from '../assets/cc.png';

const Profiles = () => {
  const profiles = [
    {
      icon: cc,
      name: "CodeChef",
      url: "https://www.codechef.com/users/jahnavi0405",
      problems: "364",
      rating: "1630"
    },
    {
      icon: lc,
      name: "LeetCode",
      url: "https://leetcode.com/Pothala_Jahnavi/",
      problems: "482",
      rating: "1711"
    },
    {
      name: "HackerEarth",
      icon: he,
      url: "https://www.hackerearth.com/@pothala5",
      problems: "17",
      rating: "1450"
    },
    {
      icon: hr,
      name: "HackerRank",
      url: "https://www.hackerrank.com/20L31A05J0",
      problems: "",
      hacos: "24270"
    },
    {
      icon: gfg,
      name: "GeeksForGeeks",
      url: "https://auth.geeksforgeeks.org/user/jahnavipothala15",
      problems: "48",
      rating: "70"
    },
    {
      icon: cf,
      name: "CodeForces",
      url: "https://codeforces.com/profile/POTHALA_JAHNAVI",
      problems: "100",
      rating: "1098"
    },
    {
      icon: cs,
      name: "CodeSignals",
      url: "https://app.codesignal.com/profile/pothala_j",
      problems: "29",
      rating: ""
    }
  ];

  return (
    <>
      <section className='profile'>
        <h1 style={{ textAlign: "center", fontSize: "35px", color: "orange", fontWeight: "800" }}>Profiles</h1>
        <div className="container">
          <div className="profiles-container">
            {
              profiles.map((value, index) => {
                return (
                  <div className="box" data-aos='flip-left' key={index}>
                    <div className='content'>
                      <div style={{ justifyContent: 'center' }}>
                        <img src={value.icon} alt="" className='profile-logo' />
                      </div>
                      <h3>{value.name}</h3>
                      {value.problems && <p>Problems: <CountUp enableScrollSpy duration={2} end={value.problems} /></p>}
                      {value.rating && <p>Rating: <CountUp enableScrollSpy duration={2} end={value.rating} /></p>}
                      {value.hacos && <p>Hacos: <CountUp enableScrollSpy duration={2} end={value.hacos} /></p>}
                    </div>
                    <button className='profile-button'>
                      <a href={value.url} target="_blank" rel="noopener noreferrer">View Profile</a>
                    </button>
                  </div>
                );
              })
            }
          </div>
        </div>
      </section>
    </>
  );
}

export default Profiles;
