import {Module} from 'vuex';
import {ICard} from '@/common/interfaces/ICard';
import {ADD_CARD, FINISH_CARD_CREATION, GET_CARD, GET_CARDS, START_CARD_CREATION} from '@/store/cards/action-types';
import {CardService} from '@/common/services/CardService';
import {
    RESET_NEW_CARD, RESET_CARDS,
    UPDATE_NEW_CARD_TITLE,
    UPDATE_CARD_CREATION_STARTED,
    UPDATE_CARDS, UPDATE_CARDS_LOADING,
    UPDATE_NEW_CARD_JIRALINK,
    UPDATE_NEW_CARD_CRNUMBER,
    UPDATE_NEW_CARD_PROJECT,
    UPDATE_NEW_CARD_CREATEDAT,
} from '@/store/cards/mutation-types';
import {
    IS_CARD_CREATION_STARTED,
    NEW_CARD_TITLE,
    CARDS, CARDS_LOADING,
    NEW_CARD_JIRALINK,
    NEW_CARD_CRNUMBER,
    NEW_CARD_PROJECT,
    NEW_CARD_CREATEDAT,
} from '@/store/cards/getter-types';
import {ADD_ALERT} from '@/store/alert/action-types';
import {AlertType} from '@/common/interfaces/IAlert';


interface ICardsState {
    isLoading: boolean;
    cards: ICard[];
    isCardCreationStarted: boolean;
    newCard: ICard;
}

const INITIAL_CARD: ICard = {
    userId: '',
    title: '',
    crNumber: '',
    project: '',
    jiraLink: '',
    createdAt: '',
};

const accountState: Module<ICardsState, {}> = {
    state: {
        cards: [],
        isLoading: false,
        isCardCreationStarted: false,
        newCard: {...INITIAL_CARD},
    },
    actions: {
        [GET_CARDS]({state, commit, dispatch}) {
            commit(UPDATE_CARDS_LOADING, true);
            return CardService.getCards()
                .then((cards: ICard[]) => {
                    commit(UPDATE_CARDS, cards);
                    commit(UPDATE_CARDS_LOADING, false);
                    return cards;
                })
                .catch((err) => {
                    commit(UPDATE_CARDS_LOADING, false);
                    dispatch(ADD_ALERT, {
                        type: AlertType.SUCCESS,
                        text: err.message,
                    });
                });
        },
        [GET_CARD]({dispatch}, cardId: string) {
          return dispatch(GET_CARDS)
              .then((cards: ICard[]) => cards.find((card) => card.id === cardId));
        },
        [START_CARD_CREATION]({state, commit}) {
            commit(UPDATE_CARD_CREATION_STARTED, true);
        },
        [FINISH_CARD_CREATION]({state, commit}) {
            commit(UPDATE_CARD_CREATION_STARTED, false);
            commit(RESET_NEW_CARD);
        },
        [ADD_CARD]({state, dispatch}) {
            return CardService.addCard(state.newCard)
                .then(() => {
                    dispatch(GET_CARDS);
                    dispatch(ADD_ALERT, {
                        type: AlertType.SUCCESS,
                        text: `'${state.newCard.title}' card has been successfully created!`,
                    });
                    dispatch(FINISH_CARD_CREATION);
                })
                .catch((err) => {
                    dispatch(ADD_ALERT, {
                        type: AlertType.SUCCESS,
                        text: err.message,
                    });
                });
        },
    },
    mutations: {
        [UPDATE_CARDS](state, cards) {
            state.cards = cards;
        },
        [UPDATE_CARDS_LOADING](state, value: boolean) {
            state.isLoading = value;
        },
        [UPDATE_NEW_CARD_TITLE](state, value: string) {
            state.newCard.title = value;
        },
        [UPDATE_CARD_CREATION_STARTED](state, value: boolean) {
            state.isCardCreationStarted = value;
        },
        [RESET_NEW_CARD](state) {
            state.newCard = {...INITIAL_CARD};
        },
        [RESET_CARDS](state) {
            state.cards = [];
        },
        [UPDATE_NEW_CARD_JIRALINK](state, value: string) {
            state.newCard.jiraLink = value;
        },
        [UPDATE_NEW_CARD_CRNUMBER](state, value: string) {
            state.newCard.crNumber = value;
        },
        [UPDATE_NEW_CARD_PROJECT](state, value: string) {
            state.newCard.project = value;
        },
        [UPDATE_NEW_CARD_CREATEDAT](state, value: string) {
            state.newCard.createdAt = value;
        },
    },
    getters: {
        [CARDS](state): ICard[] {
            return state.cards;
        },
        [CARDS_LOADING](state): boolean {
            return state.isLoading;
        },
        [NEW_CARD_TITLE](state): string {
            return state.newCard.title;
        },
        [IS_CARD_CREATION_STARTED](state): boolean {
            return state.isCardCreationStarted;
        },
        [NEW_CARD_JIRALINK](state): string {
            return state.newCard.jiraLink;
        },
        [NEW_CARD_CRNUMBER](state): string {
            return state.newCard.crNumber;
        },
        [NEW_CARD_PROJECT](state): string {
            return state.newCard.project;
        },
        [NEW_CARD_CREATEDAT](state): string {
            return state.newCard.createdAt;
        },
    },

};

export default accountState;
