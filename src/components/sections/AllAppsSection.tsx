import React from 'react';
import { AppIcon } from '../common/AppIcon';

export const AllAppsSection: React.FC = () => {
    return (
        <section className="bg-gray-50 px-4 py-16 lg:py-24 lg:px-8">
            <div className="max-w-6xl mx-auto">
                <div className="bg-white rounded-3xl shadow-xl p-8 lg:p-16">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        {/* Left Content */}
                        <div className="space-y-6">
                            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
                                Adobe Creative Cloud<br />
                                All Apps.
                            </h2>

                            <p className="text-gray-600 text-lg">
                                A collection of 20+ desktop and mobile apps and services.
                            </p>

                            {/* App Icons Grid */}
                            <div className="grid grid-cols-4 gap-3 max-w-md">
                                {[
                                    { name: 'Ai', bg: 'bg-orange-900', label: 'Illustrator', iconUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMRIPu4aCeXypNowiwLrbYh-ie66sT_giHDg&s' },
                                    { name: 'Xd', bg: 'bg-purple-900', label: 'XD', iconUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Adobe_XD_CC_icon.svg/1200px-Adobe_XD_CC_icon.svg.png' },
                                    { name: 'Ps', bg: 'bg-blue-900', label: 'Photoshop', iconUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Adobe_Photoshop_CC_icon.svg/512px-Adobe_Photoshop_CC_icon.svg.png' },
                                    { name: 'Id', bg: 'bg-pink-900', label: 'InDesign', iconUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Adobe_InDesign_CC_icon.svg/1051px-Adobe_InDesign_CC_icon.svg.png' },
                                    { name: 'Br', bg: 'bg-blue-950', label: 'Bridge', iconUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Adobe_Bridge_CC_icon.svg/2101px-Adobe_Bridge_CC_icon.svg.png' },
                                    { name: 'Dn', bg: 'bg-green-600', label: 'Dimension', iconUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Adobe_Dimension_Logo.svg/768px-Adobe_Dimension_Logo.svg.png' },
                                    { name: 'Dw', bg: 'bg-purple-900', label: 'Dreamweaver', iconUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Adobe_Dreamweaver_CC_icon.svg/1051px-Adobe_Dreamweaver_CC_icon.svg.png' },
                                    { name: 'An', bg: 'bg-blue-900', label: 'Animate', iconUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Adobe_Animate_CC_icon_%282020%29.svg/2097px-Adobe_Animate_CC_icon_%282020%29.svg.png' },
                                    { name: 'Fr', bg: 'bg-cyan-900', label: 'Fresco', iconUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/Adobe_Fresco_CC_icon.svg/1200px-Adobe_Fresco_CC_icon.svg.png' },
                                    { name: 'Ar', bg: 'bg-teal-700', label: 'Aero', iconUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Adobe_Aero_icon_%282021%29.svg/360px-Adobe_Aero_icon_%282021%29.svg.png?20210709114750https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Adobe_Aero_icon_%282021%29.svg/1200px-Adobe_Aero_icon_%282021%29.svg.png' },
                                    { name: 'Ic', bg: 'bg-pink-900', label: 'InCopy', iconUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTY8Qx_Mk2FLdKOxJLu2cDPDhiNacIRQWIY7w&s' },
                                    { name: 'Au', bg: 'bg-indigo-900', label: 'Audition', iconUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHe04etgPkPcgMrTRaQfBS5eczvciTX1gyow&s' },
                                    { name: 'Lr', bg: 'bg-blue-700', label: 'Lightroom', iconUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Adobe_Photoshop_Lightroom_CC_logo.svg/1051px-Adobe_Photoshop_Lightroom_CC_logo.svg.png' },
                                    { name: 'Me', bg: 'bg-purple-700', label: 'Media Encoder', iconUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMdR9nY8WDwXhW298saGjZ7E08eEYeYe62AQ&s' },
                                    { name: 'Ae', bg: 'bg-indigo-950', label: 'After Effects', iconUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Adobe_After_Effects_CC_icon.svg/1200px-Adobe_After_Effects_CC_icon.svg.png' },
                                    { name: 'Pf', bg: 'bg-gray-900', label: 'Portfolio', iconUrl: 'https://static.vecteezy.com/system/resources/previews/065/738/871/non_2x/adobe-portfolio-icon-app-logo-editable-premium-social-media-design-for-digital-download-free-vector.jpg' },
                                    { name: 'Pl', bg: 'bg-purple-900', label: 'Prelude', iconUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Adobe_Prelude_CC_icon.svg/2101px-Adobe_Prelude_CC_icon.svg.png' },
                                    { name: 'Ru', bg: 'bg-indigo-900', label: 'Rush', iconUrl: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTxmLyev8lQqdcnyOT14eclvO64XmP5Tkr9BDr-u8Daph2D_3v4syTj4mAvVa3ygUMLXoM3sb0M' },
                                    { name: 'St', bg: 'bg-blue-950', label: 'Stock', iconUrl: 'https://upload.wikimedia.org/wikipedia/commons/7/7e/Adobe_Stock_2021_Logo.png' },
                                    { name: 'Pr', bg: 'bg-purple-900', label: 'Premiere Pro', iconUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIYHHwdRgN5BgsSjZKGQ_Ij5zpseo2DXl7OQ&s' },
                                    { name: 'ƒ', bg: 'bg-gray-950', label: 'Figma Sync', iconUrl: 'https://registry.npmmirror.com/@lobehub/icons-static-png/latest/files/dark/figma-color.png' },
                                    { name: 'Ca', bg: 'bg-gray-900', label: 'Character Animator', iconUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Adobe_Character_Animator_icon_%282020%29.svg/768px-Adobe_Character_Animator_icon_%282020%29.svg.png' },
                                    { name: 'Sp', bg: 'bg-red-600', label: 'Spark', iconUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1SpZnKg207G82kK8NikQ4GAOcAw2EYKjsoQ&s' },
                                ].map((app, i) => (
                                    <div key={i} className="flex items-center justify-center text-center h-23">
                                        <AppIcon
                                            name={app.name}
                                            label={app.label}
                                            bgColor={app.bg}
                                            iconUrl={app.iconUrl || undefined}
                                            sizeClass="w-12 h-12"
                                        />
                                    </div>
                                ))}
                            </div>

                            {/* Platform Support */}
                            <div className="pt-6 space-y-3">
                                <p className="text-gray-900 font-semibold text-sm">
                                    Commercial License<br />
                                    Electronic Download
                                </p>
                                <div className="flex items-center gap-6 text-gray-900">
                                    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M18.71 19.5C17.88 20.74 17 21.95 15.66 21.97C14.32 22 13.89 21.18 12.37 21.18C10.84 21.18 10.37 21.95 9.09997 22C7.78997 22.05 6.79997 20.68 5.95997 19.47C4.24997 17 2.93997 12.45 4.69997 9.39C5.56997 7.87 7.12997 6.91 8.81997 6.88C10.1 6.86 11.32 7.75 12.11 7.75C12.89 7.75 14.37 6.68 15.92 6.84C16.57 6.87 18.39 7.1 19.56 8.82C19.47 8.88 17.39 10.1 17.41 12.63C17.44 15.65 20.06 16.66 20.09 16.67C20.06 16.74 19.67 18.11 18.71 19.5ZM13 3.5C13.73 2.67 14.94 2.04 15.94 2C16.07 3.17 15.6 4.35 14.9 5.19C14.21 6.04 13.07 6.7 11.95 6.61C11.8 5.46 12.36 4.26 13 3.5Z" />
                                    </svg>
                                    <div className="w-px h-8 bg-gray-300"></div>
                                    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M3,12V6.75L9,5.43V11.91L3,12M20,3V11.75L10,11.9V5.21L20,3M3,13L9,13.09V19.9L3,18.75V13M20,13.25V22L10,20.09V13.1L20,13.25Z" />
                                    </svg>
                                    <div className="w-px h-8 bg-gray-300"></div>
                                    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4M12,6A6,6 0 0,1 18,12A6,6 0 0,1 12,18A6,6 0 0,1 6,12A6,6 0 0,1 12,6M12,8A4,4 0 0,0 8,12A4,4 0 0,0 12,16A4,4 0 0,0 16,12A4,4 0 0,0 12,8Z" />
                                    </svg>
                                </div>
                            </div>
                        </div>

                        {/* Right Content - Badge */}
                        <div className="flex justify-center lg:justify-end">
                            <div className="relative">
                                {/* Badge */}
                                <div className="relative w-64 h-64 lg:w-80 lg:h-80">
                                    {/* Star Badge Background */}
                                    <svg viewBox="0 0 200 200" className="w-full h-full">
                                        <defs>
                                            <linearGradient id="badgeGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                                                <stop offset="0%" style={{ stopColor: '#FCD34D', stopOpacity: 1 }} />
                                                <stop offset="100%" style={{ stopColor: '#F59E0B', stopOpacity: 1 }} />
                                            </linearGradient>
                                        </defs>
                                        {/* Star shape */}
                                        <path
                                            d="M100,20 L110,70 L160,70 L120,100 L135,150 L100,120 L65,150 L80,100 L40,70 L90,70 Z"
                                            fill="url(#badgeGradient)"
                                            stroke="#D97706"
                                            strokeWidth="2"
                                        />
                                    </svg>

                                    {/* Badge Content */}
                                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                                        <div className="text-5xl font-bold text-gray-900 mb-2">100%</div>
                                        <div className="bg-gray-700 text-white px-6 py-2 text-lg font-bold tracking-wide mb-1">
                                            SATISFACTION
                                        </div>
                                        <div className="bg-yellow-500 text-gray-900 px-6 py-2 text-lg font-bold tracking-wide">
                                            GUARANTEE
                                        </div>
                                        <div className="text-2xl mt-2">★★★</div>
                                    </div>

                                    {/* Ribbon */}
                                    <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
                                        <div className="w-8 h-16 bg-gray-600 transform skew-x-12 shadow-lg"></div>
                                        <div className="w-8 h-16 bg-gray-700 transform -skew-x-12 shadow-lg"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};