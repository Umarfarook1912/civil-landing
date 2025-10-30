import React from 'react';
import { AppIcon } from '../common/AppIcon';

export const IncludedAppsSection: React.FC = () => {
    const apps = [
        // iconUrl can point to a remote SVG/PNG or a local file placed in /public (e.g. '/icons/photoshop.svg')
        { name: 'Ps', label: 'Photoshop', bgColor: 'bg-blue-900', iconUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Adobe_Photoshop_CC_icon.svg/512px-Adobe_Photoshop_CC_icon.svg.png' },
        { name: 'Pr', label: 'Premiere Pro', bgColor: 'bg-indigo-900', iconUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIYHHwdRgN5BgsSjZKGQ_Ij5zpseo2DXl7OQ&s' },
        { name: 'Ae', label: 'After Effects', bgColor: 'bg-indigo-950', iconUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Adobe_After_Effects_CC_icon.svg/1200px-Adobe_After_Effects_CC_icon.svg.png' },
        { name: 'Ai', label: 'Illustrator', bgColor: 'bg-orange-900', iconUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMRIPu4aCeXypNowiwLrbYh-ie66sT_giHDg&s' },
        { name: 'Ac', label: 'Acrobat', bgColor: 'bg-red-800', iconUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Adobe_Acrobat_DC_logo_2020.svg/2048px-Adobe_Acrobat_DC_logo_2020.svg.png' },
        { name: 'Lr', label: 'Lightroom', bgColor: 'bg-blue-700', iconUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Adobe_Photoshop_Lightroom_CC_logo.svg/1051px-Adobe_Photoshop_Lightroom_CC_logo.svg.png' },
        { name: 'Id', label: 'InDesign', bgColor: 'bg-pink-900', iconUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Adobe_InDesign_CC_icon.svg/1051px-Adobe_InDesign_CC_icon.svg.png' },
        { name: 'Xd', label: 'Adobe XD', bgColor: 'bg-purple-900', iconUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Adobe_XD_CC_icon.svg/1200px-Adobe_XD_CC_icon.svg.png' },
        { name: 'An', label: 'Animate', bgColor: 'bg-blue-900', iconUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Adobe_Animate_CC_icon_%282020%29.svg/2097px-Adobe_Animate_CC_icon_%282020%29.svg.png' },
        { name: 'Dw', label: 'Dreamweaver', bgColor: 'bg-purple-900', iconUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Adobe_Dreamweaver_CC_icon.svg/1051px-Adobe_Dreamweaver_CC_icon.svg.png' },
        { name: 'Au', label: 'Audition', bgColor: 'bg-indigo-900', iconUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHe04etgPkPcgMrTRaQfBS5eczvciTX1gyow&s' },
        { name: 'Br', label: 'Bridge', bgColor: 'bg-gray-900', iconUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Adobe_Bridge_CC_icon.svg/2101px-Adobe_Bridge_CC_icon.svg.png' },
    ];

    return (
        <section className="bg-white px-4 py-16 lg:py-24 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 text-center mb-12 lg:mb-16">
                    Included Adobe Apps
                </h2>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 lg:gap-12">
                    {apps.map((app, index) => (
                        <AppIcon
                            key={index}
                            name={app.name}
                            label={app.label}
                            bgColor={app.bgColor}
                            iconUrl={app.iconUrl}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};
