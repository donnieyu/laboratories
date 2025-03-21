export const TeamRoasterService = {
    getTeamRoasterData() {
        return [
            {
                team: 'A',
                s: '쎔',
                mb1: '서희',
                mb2: '짱가',
                oh1: '마크',
                oh2: '태환',
                op: '미카엘',
                oh3: `반옥`
            },
            {
                team: 'B',
                s: '철이',
                mb1: '패트릭',
                mb2: '도니',
                oh1: '카인',
                oh2: '천',
                op: '이노',
                oh3: `봉순`
            },
            {
                team: 'C',
                s: '도희',
                mb1: '견우',
                mb2: '안건',
                oh1: '잭',
                oh2: '홍이',
                op: '마마',
                oh3: `동훈`
            },
            {
                team: 'D',
                s: '도희',
                mb1: '도니',
                mb2: '서재',
                oh1: '잭',
                oh2: '반옥',
                op: '동훈',
                oh3: ``
            }
        ];
    },

    getTeamRoasterData2() {
        return [
            {
                team: 'A',
                s: '쎔',
                mb1: '봉순',
                mb2: '패트릭',
                oh1: '카인',
                oh2: '반옥',
                op: '미카엘',
                oh3: `마크`
            },
            {
                team: 'B',
                s: '철이',
                mb1: '도니',
                mb2: '짱가',
                oh1: '서희',
                oh2: '천',
                op: '태환',
                oh3: `이노`
            },
            {
                team: 'C',
                s: '도희',
                mb1: '견우',
                mb2: '안건',
                oh1: '잭',
                oh2: '홍이',
                op: '마마',
                oh3: `동훈`
            },
            {
                team: 'D',
                s: '도희',
                mb1: '도니',
                mb2: '서재',
                oh1: '잭',
                oh2: '반옥',
                op: '동훈',
                oh3: ``
            }
        ];
    },

    getTeamRoasterThree() {
        return Promise.resolve(this.getTeamRoasterData().slice(0, 3));
    },
    
    getTeamRoasterThree2() {
        return Promise.resolve(this.getTeamRoasterData2().slice(0, 3));
    },

    getTeamRoasterFour() {
        return Promise.resolve(this.getTeamRoasterData().slice(0, 4));
    },

    getTeamRoasterFour2() {
        return Promise.resolve(this.getTeamRoasterData2().slice(0, 4));
    },

    getTeamRoaster() {
        return Promise.resolve(this.getTeamRoasterData());
    }
};

