import * as React from "react";
import { useRef, useEffect } from 'react';
import classes from './Button.module.scss';
import ym, {YMInitializer} from "react-yandex-metrika";

interface IButtonProps {
    metricaId: number;
}
function Button({metricaId}: IButtonProps): React.ReactElement<HTMLDivElement> {
    let multibutton: React.RefObject<HTMLDivElement> = useRef<HTMLDivElement>(null)
    let multibuttonList: React.RefObject<HTMLUListElement> = useRef<HTMLUListElement>(null)
    let multibuttonButton: React.RefObject<HTMLDivElement> = useRef<HTMLDivElement>(null)
    const contentList: Array<string[]> = []
    let iconCounter: number = 0;

    let rootButton = multibuttonButton!.current!;
    let rootList = multibuttonList!.current!;

    useEffect(() => {
        rootButton = multibuttonButton!.current!;
        rootList = multibuttonList!.current!;
        for (const item of rootList.children as HTMLCollectionOf<HTMLElement>) {
            contentList.push([
                item.children[1].innerHTML,
                window.getComputedStyle(item.children[1] as HTMLElement).backgroundColor,
                (item.children[1] as HTMLAnchorElement).href,
                item.children[0].innerHTML
            ])
        }

        setInterval(() => {
            if (iconCounter === rootList.childElementCount) {
                iconCounter = 0
            }

            rebuildMainButton()

            setTimeout(() => {
                (rootButton.firstElementChild! as HTMLElement).style.opacity = '1';
                (rootButton.firstElementChild! as HTMLElement).style.right = 80 + 'px';
            }, 1000)
            ++iconCounter

        }, 5000)
    }, [])

    function toggleClasses() {
        if (getComputedStyle(rootList).visibility == 'visible') {
            rootButton.classList.add(classes.hidden);
            rootList.classList.add(classes.hidden);

            for (const item of rootList.children as HTMLCollectionOf<HTMLElement>) {
                item.style.transition = 'none'
                item.classList.add(classes.hidden)
            }
        } else {
            rootButton.classList.remove(classes.hidden);
            rootList.classList.remove(classes.hidden);

            for (const item of rootList.children as HTMLCollectionOf<HTMLElement>) {
                item.style.transition = 'all .3s ease'
                item.classList.remove(classes.hidden)
            }
        }
    }

    function rebuildMainButton() {
        (rootButton.firstElementChild! as HTMLElement).style.opacity = '0';
        (rootButton.firstElementChild! as HTMLElement).style.right = '0';
        rootButton.lastElementChild!.innerHTML = contentList[iconCounter][0];
        (rootButton as HTMLElement).style.backgroundColor = contentList[iconCounter][1];
        (rootButton.lastElementChild! as HTMLAnchorElement).href = contentList[iconCounter][2];
        rootButton.firstElementChild!.innerHTML = contentList[iconCounter][3];
    }

    return (
        <div className={classes.multibutton} onTouchEnd={toggleClasses} ref={multibutton} onClick={() => ym('reachGoal', 'btn')}>
            <YMInitializer accounts={[metricaId]}/>
            <ul className={classes.multibuttonList} ref={multibuttonList}>
                <li className={classes.multibuttonItem}>
                    <a href="tel:+375291112233" className={classes.multibuttonTitle}>Позвонить нам</a>
                    <a href="tel:+375291112233" className={classes.multibuttonIcon + ' ' + classes.multibuttonIconPhone}>
                        <svg height="512" viewBox="0 0 74 74" width="512" xmlns="http://www.w3.org/2000/svg"><path d="m53.5 72h-33a4 4 0 0 1 -4-4v-62a4 4 0 0 1 4-4h33a4 4 0 0 1 4 4v62a4 4 0 0 1 -4 4zm-33-68a2 2 0 0 0 -2 2v62a2 2 0 0 0 2 2h33a2 2 0 0 0 2-2v-62a2 2 0 0 0 -2-2z"></path><path d="m56.5 13h-39a1 1 0 0 1 0-2h39a1 1 0 0 1 0 2z"></path><path d="m56.5 59h-39a1 1 0 0 1 0-2h39a1 1 0 0 1 0 2z"></path><path d="m37 68.188a3.688 3.688 0 1 1 3.688-3.688 3.692 3.692 0 0 1 -3.688 3.688zm0-5.375a1.688 1.688 0 1 0 1.688 1.687 1.689 1.689 0 0 0 -1.688-1.687z"></path><path d="m41 8.75h-8a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2z"></path>
                        </svg>
                    </a>
                </li>
                <li className={classes.multibuttonItem}>
                    <a href="" className={classes.multibuttonTitle}>Оставить заявку на звонок</a>
                    <a href="" className={classes.multibuttonIcon + ' ' + classes.multibuttonIconCall}>
                        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 512.076 512.076">
                            <g transform="translate(-1 -1)">
                                <g>
                                    <g>
                                        <path d="M499.639,396.039l-103.646-69.12c-13.153-8.701-30.784-5.838-40.508,6.579l-30.191,38.818
                            c-3.88,5.116-10.933,6.6-16.546,3.482l-5.743-3.166c-19.038-10.377-42.726-23.296-90.453-71.04s-60.672-71.45-71.049-90.453
                            l-3.149-5.743c-3.161-5.612-1.705-12.695,3.413-16.606l38.792-30.182c12.412-9.725,15.279-27.351,6.588-40.508l-69.12-103.646
                            C109.12,1.056,91.25-2.966,77.461,5.323L34.12,31.358C20.502,39.364,10.511,52.33,6.242,67.539
                            c-15.607,56.866-3.866,155.008,140.706,299.597c115.004,114.995,200.619,145.92,259.465,145.92
                            c13.543,0.058,27.033-1.704,40.107-5.239c15.212-4.264,28.18-14.256,36.181-27.878l26.061-43.315
                            C517.063,422.832,513.043,404.951,499.639,396.039z M494.058,427.868l-26.001,43.341c-5.745,9.832-15.072,17.061-26.027,20.173
                            c-52.497,14.413-144.213,2.475-283.008-136.32S8.29,124.559,22.703,72.054c3.116-10.968,10.354-20.307,20.198-26.061
                            l43.341-26.001c5.983-3.6,13.739-1.855,17.604,3.959l37.547,56.371l31.514,47.266c3.774,5.707,2.534,13.356-2.85,17.579
                            l-38.801,30.182c-11.808,9.029-15.18,25.366-7.91,38.332l3.081,5.598c10.906,20.002,24.465,44.885,73.967,94.379
                            c49.502,49.493,74.377,63.053,94.37,73.958l5.606,3.089c12.965,7.269,29.303,3.898,38.332-7.91l30.182-38.801
                            c4.224-5.381,11.87-6.62,17.579-2.85l103.637,69.12C495.918,414.126,497.663,421.886,494.058,427.868z"></path>
                                        <path d="M291.161,86.39c80.081,0.089,144.977,64.986,145.067,145.067c0,4.713,3.82,8.533,8.533,8.533s8.533-3.82,8.533-8.533
                            c-0.099-89.503-72.63-162.035-162.133-162.133c-4.713,0-8.533,3.82-8.533,8.533S286.448,86.39,291.161,86.39z"></path>
                                        <path d="M291.161,137.59c51.816,0.061,93.806,42.051,93.867,93.867c0,4.713,3.821,8.533,8.533,8.533
                            c4.713,0,8.533-3.82,8.533-8.533c-0.071-61.238-49.696-110.863-110.933-110.933c-4.713,0-8.533,3.82-8.533,8.533
                            S286.448,137.59,291.161,137.59z"></path>
                                        <path d="M291.161,188.79c23.552,0.028,42.638,19.114,42.667,42.667c0,4.713,3.821,8.533,8.533,8.533s8.533-3.82,8.533-8.533
                            c-0.038-32.974-26.759-59.696-59.733-59.733c-4.713,0-8.533,3.82-8.533,8.533S286.448,188.79,291.161,188.79z"></path>
                                    </g>
                                </g>
                            </g>
                        </svg>
                    </a>
                </li>
                <li className={classes.multibuttonItem}>
                    <a href="viber://chat?number=%2B375291112233" className={classes.multibuttonTitle}>Напишите нам в Вайбер</a>
                    <a href="viber://chat?number=%2B375291112233" className={classes.multibuttonIcon + ' ' + classes.multibuttonIconViber}>
                        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 52.511 52.511">
                            <g>
                                <g>
                                    <path d="M31.256,0H21.254C10.778,0,2.255,8.521,2.255,18.995v9.01c0,7.8,4.793,14.81,12,17.665v5.841
                            c0,0.396,0.233,0.754,0.595,0.914c0.13,0.058,0.268,0.086,0.405,0.086c0.243,0,0.484-0.089,0.671-0.259L21.725,47h9.531
                            c10.476,0,18.999-8.521,18.999-18.995v-9.01C50.255,8.521,41.732,0,31.256,0z M48.255,28.005C48.255,37.376,40.63,45,31.256,45
                            h-9.917c-0.248,0-0.487,0.092-0.671,0.259l-4.413,3.997v-4.279c0-0.424-0.267-0.802-0.667-0.942
                            C8.81,41.638,4.255,35.196,4.255,28.005v-9.01C4.255,9.624,11.881,2,21.254,2h10.002c9.374,0,16.999,7.624,16.999,16.995V28.005z"></path>
                                    <path d="M39.471,30.493l-6.146-3.992c-0.672-0.437-1.472-0.585-2.255-0.423c-0.784,0.165-1.458,0.628-1.895,1.303l-0.289,0.444
                            c-2.66-0.879-5.593-2.002-7.349-7.085l0.727-0.632h0c1.248-1.085,1.379-2.983,0.294-4.233l-4.808-5.531
                            c-0.362-0.417-0.994-0.46-1.411-0.099l-3.019,2.624c-2.648,2.302-1.411,5.707-1.004,6.826c0.018,0.05,0.04,0.098,0.066,0.145
                            c0.105,0.188,2.612,4.662,6.661,8.786c4.065,4.141,11.404,7.965,11.629,8.076c0.838,0.544,1.781,0.805,2.714,0.805
                            c1.638,0,3.244-0.803,4.202-2.275l2.178-3.354C40.066,31.413,39.934,30.794,39.471,30.493z M35.91,34.142
                            c-0.901,1.388-2.763,1.782-4.233,0.834c-0.073-0.038-7.364-3.835-11.207-7.75c-3.592-3.659-5.977-7.724-6.302-8.291
                            c-0.792-2.221-0.652-3.586,0.464-4.556l2.265-1.968l4.152,4.776c0.369,0.424,0.326,1.044-0.096,1.411l-1.227,1.066
                            c-0.299,0.26-0.417,0.671-0.3,1.049c2.092,6.798,6.16,8.133,9.13,9.108l0.433,0.143c0.433,0.146,0.907-0.021,1.155-0.403
                            l0.709-1.092c0.146-0.226,0.37-0.379,0.63-0.434c0.261-0.056,0.527-0.004,0.753,0.143l5.308,3.447L35.91,34.142z"></path>
                                    <path d="M28.538,16.247c-0.532-0.153-1.085,0.156-1.236,0.688c-0.151,0.531,0.157,1.084,0.688,1.235
                            c1.49,0.424,2.677,1.613,3.097,3.104c0.124,0.44,0.525,0.729,0.962,0.729c0.09,0,0.181-0.012,0.272-0.037
                            c0.531-0.15,0.841-0.702,0.691-1.234C32.405,18.578,30.69,16.859,28.538,16.247z"></path>
                                    <path d="M36.148,22.219c0.09,0,0.181-0.012,0.272-0.037c0.532-0.15,0.841-0.703,0.691-1.234c-1.18-4.183-4.509-7.519-8.689-8.709
                            c-0.531-0.153-1.084,0.158-1.235,0.689c-0.151,0.531,0.157,1.084,0.688,1.235c3.517,1,6.318,3.809,7.311,7.328
                            C35.311,21.931,35.711,22.219,36.148,22.219z"></path>
                                    <path d="M27.991,7.582c-0.532-0.153-1.085,0.156-1.236,0.689c-0.151,0.531,0.157,1.084,0.688,1.235
                            c5.959,1.695,10.706,6.453,12.388,12.416c0.124,0.44,0.525,0.729,0.962,0.729c0.09,0,0.181-0.012,0.272-0.037
                            c0.531-0.15,0.841-0.703,0.691-1.234C39.887,14.753,34.613,9.467,27.991,7.582z"></path>
                                </g>
                            </g>
                        </svg>
                    </a>
                </li>
                <li className={classes.multibuttonItem}>
                    <a href="https://wa.me/+375291112233" className={classes.multibuttonTitle}>Напишите нам в Whatsapp</a>
                    <a href="https://wa.me/+375291112233" className={classes.multibuttonIcon + ' ' + classes.multibuttonIconWhatsapp}>
                        <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 52 52">
                            <g>
                                <g>
                                    <path d="M26,0C11.663,0,0,11.663,0,26c0,4.891,1.359,9.639,3.937,13.762C2.91,43.36,1.055,50.166,1.035,50.237
                            c-0.096,0.352,0.007,0.728,0.27,0.981c0.263,0.253,0.643,0.343,0.989,0.237L12.6,48.285C16.637,50.717,21.26,52,26,52
                            c14.337,0,26-11.663,26-26S40.337,0,26,0z M26,50c-4.519,0-8.921-1.263-12.731-3.651c-0.161-0.101-0.346-0.152-0.531-0.152
                            c-0.099,0-0.198,0.015-0.294,0.044l-8.999,2.77c0.661-2.413,1.849-6.729,2.538-9.13c0.08-0.278,0.035-0.578-0.122-0.821
                            C3.335,35.173,2,30.657,2,26C2,12.767,12.767,2,26,2s24,10.767,24,24S39.233,50,26,50z"></path>
                                    <path d="M42.985,32.126c-1.846-1.025-3.418-2.053-4.565-2.803c-0.876-0.572-1.509-0.985-1.973-1.218
                            c-1.297-0.647-2.28-0.19-2.654,0.188c-0.047,0.047-0.089,0.098-0.125,0.152c-1.347,2.021-3.106,3.954-3.621,4.058
                            c-0.595-0.093-3.38-1.676-6.148-3.981c-2.826-2.355-4.604-4.61-4.865-6.146C20.847,20.51,21.5,19.336,21.5,18
                            c0-1.377-3.212-7.126-3.793-7.707c-0.583-0.582-1.896-0.673-3.903-0.273c-0.193,0.039-0.371,0.134-0.511,0.273
                            c-0.243,0.243-5.929,6.04-3.227,13.066c2.966,7.711,10.579,16.674,20.285,18.13c1.103,0.165,2.137,0.247,3.105,0.247
                            c5.71,0,9.08-2.873,10.029-8.572C43.556,32.747,43.355,32.331,42.985,32.126z M30.648,39.511
                            c-10.264-1.539-16.729-11.708-18.715-16.87c-1.97-5.12,1.663-9.685,2.575-10.717c0.742-0.126,1.523-0.179,1.849-0.128
                            c0.681,0.947,3.039,5.402,3.143,6.204c0,0.525-0.171,1.256-2.207,3.293C17.105,21.48,17,21.734,17,22c0,5.236,11.044,12.5,13,12.5
                            c1.701,0,3.919-2.859,5.182-4.722c0.073,0.003,0.196,0.028,0.371,0.116c0.36,0.181,0.984,0.588,1.773,1.104
                            c1.042,0.681,2.426,1.585,4.06,2.522C40.644,37.09,38.57,40.701,30.648,39.511z"></path>
                                </g>
                            </g>
                        </svg>
                    </a>
                </li>
            </ul>
            <div className={classes.multibuttonButton} ref={multibuttonButton}>
                {/* <a href="tel:+375291112233" className="multibutton__title--main">Позвонить нам</a> */}
                <div className={classes.multibuttonTitleMain}>Позвонить нам</div>
                <div className={classes.multibuttonIconMain}>
                    <svg height="512" viewBox="0 0 74 74" width="512" xmlns="http://www.w3.org/2000/svg"><path d="m53.5 72h-33a4 4 0 0 1 -4-4v-62a4 4 0 0 1 4-4h33a4 4 0 0 1 4 4v62a4 4 0 0 1 -4 4zm-33-68a2 2 0 0 0 -2 2v62a2 2 0 0 0 2 2h33a2 2 0 0 0 2-2v-62a2 2 0 0 0 -2-2z"></path><path d="m56.5 13h-39a1 1 0 0 1 0-2h39a1 1 0 0 1 0 2z"></path><path d="m56.5 59h-39a1 1 0 0 1 0-2h39a1 1 0 0 1 0 2z"></path><path d="m37 68.188a3.688 3.688 0 1 1 3.688-3.688 3.692 3.692 0 0 1 -3.688 3.688zm0-5.375a1.688 1.688 0 1 0 1.688 1.687 1.689 1.689 0 0 0 -1.688-1.687z"></path><path d="m41 8.75h-8a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2z"></path>
                    </svg>
                </div>
            </div>
        </div>
    )
}

export default Button;