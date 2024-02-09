import React, { useEffect, useState } from 'react'
import Swiper from 'swiper';
// import 'swiper/css/swiper.min.css';
import GLightbox from 'glightbox';
// import PureCounter from 'purecounter';
import Aos from 'aos';
import 'aos/dist/aos.css';

const Header = () => {
    const [isMobileNavActive, setMobileNavActive] = useState(false);

    useEffect(() => {
        // const mobileNavToogle = () => {
        //     setMobileNavActive(!isMobileNavActive);
        // }

        const togglescrollTop = function () {
            window.scrollY > 100 ? scrollTop.classList.add('active') : scrollTop.classList.remove('active');
        }

        // const mobileNavToogle = () => {
        //     setMobileNavActive(!isMobileNavActive);

        //   document.querySelector('body').classList.toggle('mobile-nav-active');
        //   mobileNavShow.classList.toggle('d-none');
        //   mobileNavHide.classList.toggle('d-none');
        // }

        // const mobileNavToogle = () => {
        //     setMobileNavActive(!isMobileNavActive);
        //     const body = document.querySelector('body');
        //     body.classList.toggle('mobile-nav-active');
        //     const mobileNavShow = document.querySelector('.mobile-nav-show');
        //     const mobileNavHide = document.querySelector('.mobile-nav-hide');
        //     mobileNavShow.classList.toggle('d-none');
        //     mobileNavHide.classList.toggle('d-none');
        // }
        const mobileNavToogle = () => {
            setMobileNavActive(!isMobileNavActive);
            const body = document.querySelector('body');
            const mobileNavShow = document.querySelector('.mobile-nav-show');
            const mobileNavHide = document.querySelector('.mobile-nav-hide');

            if (isMobileNavActive) {
                body.classList.remove('mobile-nav-active');
                mobileNavShow.classList.remove('d-none');
                mobileNavHide.classList.add('d-none');
            } else {
                body.classList.add('mobile-nav-active');
                mobileNavShow.classList.add('d-none');
                mobileNavHide.classList.remove('d-none');
            }

            // const body = document.querySelector('body');
            // body.classList.toggle('mobile-nav-active');
            // const mobileNavShow = document.querySelector('.mobile-nav-show');
            // const mobileNavHide = document.querySelector('.mobile-nav-hide');
            // mobileNavShow.classList.toggle('d-none');
            // mobileNavHide.classList.toggle('d-none');
        }


        const navbarlinksActive = () => {
            navbarlinks.forEach(navbarlink => {
                if (!navbarlink.hash) return;
                let section = document.querySelector(navbarlink.hash);
                if (!section) return;
                let position = window.scrollY + 200;
                if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
                    navbarlink.classList.add('active');
                } else {
                    navbarlink.classList.remove('active');
                }
            })
        }

        const navDropdowns = document.querySelectorAll('.navbar .dropdown > a');

        const scrollTop = document.querySelector('.scroll-top');
        const mobileNavShow = document.querySelector('.mobile-nav-show');
        const mobileNavHide = document.querySelector('.mobile-nav-hide');
        const navbarlinks = document.querySelectorAll('#navbar a');

        if (scrollTop) {
            window.addEventListener('load', togglescrollTop);
            document.addEventListener('scroll', togglescrollTop);
            scrollTop.addEventListener('click', () => {
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            });
        }

        if (mobileNavShow) {
            document.querySelectorAll('.mobile-nav-toggle').forEach(el => {
                el.addEventListener('click', function (event) {
                    event.preventDefault();
                    mobileNavToogle();
                })
            });
        }

        if (navDropdowns) {
            navDropdowns.forEach(el => {
                el.addEventListener('click', function (event) {
                    if (document.querySelector('.mobile-nav-active')) {
                        event.preventDefault();
                        this.classList.toggle('active');
                        this.nextElementSibling.classList.toggle('dropdown-active');
                        let dropDownIndicator = this.querySelector('.dropdown-indicator');
                        dropDownIndicator.classList.toggle('bi-chevron-up');
                        dropDownIndicator.classList.toggle('bi-chevron-down');
                    }
                })
            });
        }

        window.addEventListener('load', navbarlinksActive);
        document.addEventListener('scroll', navbarlinksActive);

        const aos_init = () => {
            Aos.init({
                duration: 1000,
                easing: 'ease-in-out',
                once: true,
                mirror: false
            });
        }

        window.addEventListener('load', () => {
            aos_init();
        });

        new Swiper('.slides-1', {
            speed: 600,
            loop: true,
            autoplay: {
                delay: 5000,
                disableOnInteraction: false
            },
            slidesPerView: 'auto',
            pagination: {
                el: '.swiper-pagination',
                type: 'bullets',
                clickable: true
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            }
        });

        new Swiper('.slides-3', {
            speed: 600,
            loop: true,
            autoplay: {
                delay: 5000,
                disableOnInteraction: false
            },
            slidesPerView: 'auto',
            pagination: {
                el: '.swiper-pagination',
                type: 'bullets',
                clickable: true
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            breakpoints: {
                320: {
                    slidesPerView: 1,
                    spaceBetween: 40
                },
                1200: {
                    slidesPerView: 3,
                }
            }
        });

        new Swiper('.gallery-slider', {
            speed: 400,
            loop: true,
            centeredSlides: true,
            autoplay: {
                delay: 5000,
                disableOnInteraction: false
            },
            slidesPerView: 'auto',
            pagination: {
                el: '.swiper-pagination',
                type: 'bullets',
                clickable: true
            },
            breakpoints: {
                320: {
                    slidesPerView: 1,
                    spaceBetween: 20
                },
                640: {
                    slidesPerView: 3,
                    spaceBetween: 20
                },
                992: {
                    slidesPerView: 5,
                    spaceBetween: 20
                }
            }
        });

        GLightbox({
            selector: '.glightbox'
        });

        // PureCounter();

    }, [isMobileNavActive]);


    return (
        <>
            <header id="header" className="header fixed-top d-flex align-items-center">
                <div className="container d-flex align-items-center justify-content-between">

                    <a href="index.html" className="logo d-flex align-items-center me-auto me-lg-0">
                        {/* <img src="assets/img/logo.png" alt=""/> */}
                        <h1>Yummy<span>.</span></h1>
                    </a>

                    <nav id="navbar" className="navbar">
                        <ul>
                            <li><a href="#hero">Home</a></li>
                            <li><a href="#about">About</a></li>
                            <li><a href="#menu">Menu</a></li>
                            <li><a href="#events">Events</a></li>
                            <li><a href="#chefs">Chefs</a></li>
                            <li><a href="#gallery">Gallery</a></li>
                            <li className="dropdown"><a href="#"><span>Drop Down</span> <i className="bi bi-chevron-down dropdown-indicator"></i></a>
                                <ul>
                                    <li><a href="#">Drop Down 1</a></li>
                                    <li className="dropdown"><a href="#"><span>Deep Drop Down</span> <i className="bi bi-chevron-down dropdown-indicator"></i></a>
                                        <ul>
                                            <li><a href="#">Deep Drop Down 1</a></li>
                                            <li><a href="#">Deep Drop Down 2</a></li>
                                            <li><a href="#">Deep Drop Down 3</a></li>
                                            <li><a href="#">Deep Drop Down 4</a></li>
                                            <li><a href="#">Deep Drop Down 5</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="#">Drop Down 2</a></li>
                                    <li><a href="#">Drop Down 3</a></li>
                                    <li><a href="#">Drop Down 4</a></li>
                                </ul>
                            </li>
                            <li><a href="#contact">Contact</a></li>
                        </ul>
                    </nav>

                    <a className="btn-book-a-table" href="#book-a-table">Book a Table</a>
                    <i className="mobile-nav-toggle mobile-nav-show bi bi-list"></i>
                    <i className="mobile-nav-toggle mobile-nav-hide d-none bi bi-x"></i>

                </div>
            </header>
        </>
    )
}

export default Header