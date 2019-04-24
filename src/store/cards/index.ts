import {Module} from 'vuex';
import {ICard} from "@/common/interfaces/ICard";
import {ADD_CARD, FINISH_CARD_CREATION} from "@/store/cards/action-types";


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
    jiraLink: ''
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
            return TaskService.getCards()
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
        [UPDATE_CARD_CREATION_STARTED](state, value: boolean) {
            state.isCardCreationStarted = value;
        },
        [UPDATE_NEW_CARD_DESCRIPTION](state, value: string) {
            state.newCard.description = value;
        },
        [RESET_NEW_CARD](state) {
            state.newCard = {...INITIAL_CARD};
        },
        [RESET_CARDS](state) {
            state.cards = [];
        },
    },
    getters: {
        [CARDS](state): ICard[] {
            return state.cards;
        },
        [CARDS_LOADING](state): boolean {
            return state.isLoading;
        },
        [IS_CARD_CREATION_STARTED](state): boolean {
            return state.isCardCreationStarted;
        },
    },
};

export default accountState;
