const ADD_ITEM = 'search/search/ADD_ITEM';
const PUT_FAVORITE = 'favorite/favorite/PUT_FAVORITE';

const initialState = {
	keyword: [],
	favoriteList: [],
	oportunities: {
		Test1: {
			id: 'Test1',
			favorite: false,
			fit: 'Test1',
			category: 'Test1',
			titleDescription: 'Test1',
			deadLineInitial: '18/06/19',
			deadLineLastOne: '28/08/19',
		},
		Test2: {
			id: 'Test2',
			favorite: false,
			fit: 'Test2',
			category: 'Test2',
			titleDescription: 'Test2',
			deadLineInitial: '18/06/19',
			deadLineLastOne: '28/08/19',
		},
		Test3: {
			id: 'Test3',
			favorite: false,
			fit: 'Test3',
			category: 'Test3',
			titleDescription: 'Test3',
			deadLineInitial: '18/06/19',
			deadLineLastOne: '28/08/19',
		},
		Test4: {
			id: 'Test4',
			favorite: false,
			fit: 'Test4',
			category: 'Test4',
			titleDescription: 'Test4',
			deadLineInitial: '18/06/19',
			deadLineLastOne: '28/08/19',
		},
		Test5: {
			id: 'Test5',
			favorite: false,
			fit: 'Test5',
			category: 'Test5',
			titleDescription: 'Test5',
			deadLineInitial: '18/06/19',
			deadLineLastOne: '28/08/19',
		},
		Test6: {
			id: 'Test6',
			favorite: false,
			fit: 'Test6',
			category: 'Test6',
			titleDescription: 'Test6',
			deadLineInitial: '18/06/19',
			deadLineLastOne: '28/08/19',
		},
		Test7: {
			id: 'Test7',
			favorite: false,
			fit: 'Test7',
			category: 'Test7',
			titleDescription: 'Test7',
			deadLineInitial: '18/06/19',
			deadLineLastOne: '28/08/19',
		},
		Test8: {
			id: 'Test8',
			favorite: false,
			fit: 'Test8',
			category: 'Test8',
			titleDescription: 'Test8',
			deadLineInitial: '18/06/19',
			deadLineLastOne: '28/08/19',
		},
		Test9: {
			id: 'Test9',
			favorite: false,
			fit: 'Test9',
			category: 'Test9',
			titleDescription: 'Test9',
			deadLineInitial: '18/06/19',
			deadLineLastOne: '28/08/19',
		},
		Test10: {
			id: 'Test10',
			favorite: false,
			fit: 'Test10',
			category: 'Test10',
			titleDescription: 'Test10',
			deadLineInitial: '18/06/19',
			deadLineLastOne: '28/08/19',
		},
	},
	selectOportunity: [],
};

export default function (state = initialState, action) {
	switch (action.type) {
	case ADD_ITEM:
		return { 
				...state,
				keyword: state.keyword.concat([action.info])
		};
	case PUT_FAVORITE:
		return {
			...state,
			oportunities: {
				...state.oportunities,
				[action.info]: {
					...state.oportunities[action.info],
					favorite: !state.oportunities[action.info].favorite,
				},
			},
		};
	default:
		return state;
	}
}

export const addItem = (info) => ({
	type: ADD_ITEM,
	info,
});

export const putFavorite = (info) => ({
	type: PUT_FAVORITE,
	info,
});
