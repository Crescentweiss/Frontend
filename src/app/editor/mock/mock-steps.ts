import {EditorStepHeader} from '../headers/steps';

export let mockStep: EditorStepHeader[] = [
    {
        id: '1',
        desc: 'Centifuge',
        name: 'Centifuge',
        ico: '/assets/img/editor/icons/centfuge.png',
        template: '- input Speed 0 rpm @mid - input Time 0 s @small - input Temp 25 °C @small -',
        yield_method: '@Speed rpm centifuge for @Time s at @Temp degree.',
    },
    {
        id: '2',
        desc: 'Add Liquid',
        name: 'Add Liquid',
        ico: '/assets/img/editor/icons/add.png',
        template: '- input Volume 0 μL @mid - input Name null @small - input container EP_tube @small -',
        yield_method: 'Add @Volume μL @Name to @container',
    },
    {
        id: '3',
        desc: 'Remove',
        name: 'Remove',
        ico: '/assets/img/editor/icons/discard.png',
        template: '- select option null @opt=supernatant/precipitation/filtrate -',
        yield_method: 'Remove @option',
    },
    {
        id: '4',
        desc: 'Mix',
        name: 'Mix',
        ico: '/assets/img/editor/icons/mix.png',
        template: '- select option null @opt=mix_up/mix_gently/shake/resuspend -',
        yield_method: '@option',
    },
    {
        id: '5',
        desc: 'Move',
        name: 'Move',
        ico: '/assets/img/editor/icons/move.png',
        template: '- input name solution @mid - input container1 null @small - input container2 null @small -',
        yield_method: 'Move @name from @container1 to @container2',
    },
    {
        id: '6',
        desc: 'Repeat',
        name: 'Repeat',
        ico: '/assets/img/editor/icons/repeat.png',
        template: '- input last null steps @small - input times null @small -',
        yield_method: 'Repeat last @last step for @times times',
    },
    {
        id: '7',
        desc: 'Standing',
        name: 'Standing',
        ico: '/assets/img/editor/icons/standing.png',
        template: '- input Time null min @small - input Temp 25 °C @small -',
        yield_method: 'Standing @Time min at @Temp degree',
    },
    {
        id: '8',
        desc: 'Preserve',
        name: 'Preserve',
        ico: '/assets/img/editor/icons/preserve.png',
        template:  '- input container EP_tupe @mid - input Time null h @small - input Temp 25 °C @small -',
        yield_method: 'Preserve @container at @Temp degree for at most @Time h',
    },
    {
        id: '9',
        desc: 'Text',
        name: 'Text',
        ico: '/assets/img/editor/icons/T.png',
        template:  '- input Text null @big -',
        yield_method: '@Text',
    },
    {
        id: '10',
        desc: 'Add Solid',
        name: 'Add Solid',
        ico: '/assets/img/editor/icons/add.png',
        template: '- input Volume 0 g @mid - input Name null @small - input container EP_tube @small -',
        yield_method: 'Add @Volume g @Name to @container',
    },
];

