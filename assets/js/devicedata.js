// JavaScript Document

	var planPrice = {
		'voice': [1220, 1382, 1490, 1706, 2138, 2894, 3542, 5054, 6566, 8618, 11664],
		'data': [518, 842, 1058, 1598, 2138, 2894, 4298, 5810, 8078, 11124],
		'sms': [670, 994, 1210, 1750, 2290, 3046, 4449, 5961, 8230, 11275],
		'share': [1922, 2462, 3218, 3866, 5378, 6890, 8942, 11988]
	};

    var simPrice_array = {
        'voice': /*1*/3240,
        'data': /*1*/3240,
        'sms' : /*1*/3240,
		'free': 3240
    };
    
    // 端末価格・申込みURL
    var deviceData_array = {
		'aquos_sense_plus_sh_m07': { // aquos_sense_plus_sh_m07
                'price' : 46224,
                'voice' : {
						'white' : {
								'docomo' : {
                                	'linkURL' : 'https://shop.aeondigitalworld.com/shop/cart/cart.aspx?goods=A116-2007940528050',
                                	'gaAction' : 'aquos_sense_plus_sh_m07_white'
								},
								'au' : {
									'linkURL' : 'https://shop.aeondigitalworld.com/shop/cart/cart.aspx?goods=A116-2007940528104',
                                	'gaAction' : 'aquos_sense_plus_sh_m07_white'
								}
						},
						'beige' : {
								'docomo' : {
                                	'linkURL' : 'https://shop.aeondigitalworld.com/shop/cart/cart.aspx?goods=A116-2007940528197',
                                	'gaAction' : 'aquos_sense_plus_sh_m07_beige'
								},
								'au' : {
									'linkURL' : 'https://shop.aeondigitalworld.com/shop/cart/cart.aspx?goods=A116-2007940528241',
                                	'gaAction' : 'aquos_sense_plus_sh_m07_beige'
								}
						},
						'black' : {
								'docomo' : {
                                	'linkURL' : 'https://shop.aeondigitalworld.com/shop/cart/cart.aspx?goods=A116-2007940528128',
                                	'gaAction' : 'aquos_sense_plus_sh_m07_black'
								},
								'au' : {
									'linkURL' : 'https://shop.aeondigitalworld.com/shop/cart/cart.aspx?goods=A116-2007940528173',
                                	'gaAction' : 'aquos_sense_plus_sh_m07_black'
								}
						}
				},
                'data' : {
						'white' : {
								'sim01' : {
									'docomo': {
	                                	'linkURL' : 'https://shop.aeondigitalworld.com/shop/cart/cart.aspx?goods=A116-2007940528067',
	                                	'gaAction' : 'aquos_sense_plus_sh_m07_white'
									}
								},
								'sim02' : {
									'docomo': {
										'linkURL' : 'https://shop.aeondigitalworld.com/shop/cart/cart.aspx?goods=A116-2007940528081',
	                                	'gaAction' : 'aquos_sense_plus_sh_m07_white'
									}
								}
						},
						'beige' : {
								'sim01' : {
									'docomo': {
	                                	'linkURL' : 'https://shop.aeondigitalworld.com/shop/cart/cart.aspx?goods=A116-2007940528203',
	                                	'gaAction' : 'aquos_sense_plus_sh_m07_beige'
									}
								},
								'sim02' : {
									'docomo': {
										'linkURL' : 'https://shop.aeondigitalworld.com/shop/cart/cart.aspx?goods=A116-2007940528227',
	                                	'gaAction' : 'aquos_sense_plus_sh_m07_beige'
									}
								}
						},
						'black' : {
								'sim01' : {
									'docomo': {
	                                	'linkURL' : 'https://shop.aeondigitalworld.com/shop/cart/cart.aspx?goods=A116-2007940528135',
	                                	'gaAction' : 'aquos_sense_plus_sh_m07_black'
									}
								},
								'sim02' : {
									'docomo': {
										'linkURL' : 'https://shop.aeondigitalworld.com/shop/cart/cart.aspx?goods=A116-2007940528159',
	                                	'gaAction' : 'aquos_sense_plus_sh_m07_black'
									}
								}
						}
				},									
                'sms' : {
						'white' : {
								'sim01' : {
									'docomo' : {
	                                	'linkURL' : 'https://shop.aeondigitalworld.com/shop/cart/cart.aspx?goods=A116-2007940528074',
	                                	'gaAction' : 'aquos_sense_plus_sh_m07_white'
									},
									'au' : {
										'linkURL' : 'https://shop.aeondigitalworld.com/shop/cart/cart.aspx?goods=A116-2007940528111',
	                                	'gaAction' : 'aquos_sense_plus_sh_m07_white'
									}
								},
								'sim02' : {
									'docomo' : {
										'linkURL' : 'https://shop.aeondigitalworld.com/shop/cart/cart.aspx?goods=A116-2007940528098',
	                                	'gaAction' : 'aquos_sense_plus_sh_m07_white'
									}
								}
						},
						'beige' : {
								'sim01' : {
									'docomo' : {
	                                	'linkURL' : 'https://shop.aeondigitalworld.com/shop/cart/cart.aspx?goods=A116-2007940528210',
	                                	'gaAction' : 'aquos_sense_plus_sh_m07_beige'
									},
									'au' : {
										'linkURL' : 'https://shop.aeondigitalworld.com/shop/cart/cart.aspx?goods=A116-2007940528258',
	                                	'gaAction' : 'aquos_sense_plus_sh_m07_beige'
									}
								},
								'sim02' : {
									'docomo' : {
										'linkURL' : 'https://shop.aeondigitalworld.com/shop/cart/cart.aspx?goods=A116-2007940528234',
	                                	'gaAction' : 'aquos_sense_plus_sh_m07_beige'
									}
								}
						},
						'black' : {
								'sim01' : {
									'docomo' : {
	                                	'linkURL' : 'https://shop.aeondigitalworld.com/shop/cart/cart.aspx?goods=A116-2007940528142',
	                                	'gaAction' : 'aquos_sense_plus_sh_m07_black'
									},
									'au' : {
										'linkURL' : 'https://shop.aeondigitalworld.com/shop/cart/cart.aspx?goods=A116-2007940528180',
	                                	'gaAction' : 'aquos_sense_plus_sh_m07_black'
									}
								},
								'sim02' : {
									'docomo' : {
										'linkURL' : 'https://shop.aeondigitalworld.com/shop/cart/cart.aspx?goods=A116-2007940528166',
	                                	'gaAction' : 'aquos_sense_plus_sh_m07_black'
									}
								}
						}
				},
                'deviceOnly' : {
						'white' : {
	                            'linkURL' : 'https://shop.aeondigitalworld.com/shop/cart/cart.aspx?goods=A116-4974019974491',
	                            'gaAction' : 'aquos_sense_plus_sh_m07_white'
						},
						'beige' : {
	                            'linkURL' : 'https://shop.aeondigitalworld.com/shop/cart/cart.aspx?goods=A116-4974019974514',
	                            'gaAction' : 'aquos_sense_plus_sh_m07_beige'
						},
						'black' : {
	                            'linkURL' : 'https://shop.aeondigitalworld.com/shop/cart/cart.aspx?goods=A116-4974019974507',
	                            'gaAction' : 'aquos_sense_plus_sh_m07_black'
						}
				}
		},
		'huawei_p20': { // huawei_p20
                'price' : 75384,
                'voice' : {
						'blue' : {
								'docomo' : {
                                	'linkURL' : 'https://shop.aeondigitalworld.com/shop/cart/cart.aspx?goods=A116-2007940527954',
                                	'gaAction' : 'huawei_p20_blue'
								},
								'au' : {
									'linkURL' : 'https://shop.aeondigitalworld.com/shop/cart/cart.aspx?goods=A',
                                	'gaAction' : 'huawei_p20_blue'
								}
						},
						'pink' : {
								'docomo' : {
                                	'linkURL' : 'https://shop.aeondigitalworld.com/shop/cart/cart.aspx?goods=A116-2007940527909',
                                	'gaAction' : 'huawei_p20_pink'
								},
								'au' : {
									'linkURL' : 'https://shop.aeondigitalworld.com/shop/cart/cart.aspx?goods=A',
                                	'gaAction' : 'huawei_p20_pink'
								}
						},
						'black' : {
								'docomo' : {
                                	'linkURL' : 'https://shop.aeondigitalworld.com/shop/cart/cart.aspx?goods=A116-2007940528005',
                                	'gaAction' : 'huawei_p20_black'
								},
								'au' : {
									'linkURL' : 'https://shop.aeondigitalworld.com/shop/cart/cart.aspx?goods=A',
                                	'gaAction' : 'huawei_p20_black'
								}
						}
				},
                'data' : {
						'blue' : {
								'sim01' : {
									'docomo': {
	                                	'linkURL' : 'https://shop.aeondigitalworld.com/shop/cart/cart.aspx?goods=A116-2007940527961',
	                                	'gaAction' : 'huawei_p20_blue'
									}
								},
								'sim02' : {
									'docomo': {
										'linkURL' : 'https://shop.aeondigitalworld.com/shop/cart/cart.aspx?goods=A116-2007940527985',
	                                	'gaAction' : 'huawei_p20_blue'
									}
								}
						},
						'pink' : {
								'sim01' : {
									'docomo': {
	                                	'linkURL' : 'https://shop.aeondigitalworld.com/shop/cart/cart.aspx?goods=A116-2007940527916',
	                                	'gaAction' : 'huawei_p20_pink'
									}
								},
								'sim02' : {
									'docomo': {
										'linkURL' : 'https://shop.aeondigitalworld.com/shop/cart/cart.aspx?goods=A116-2007940527930',
	                                	'gaAction' : 'huawei_p20_pink'
									}
								}
						},
						'black' : {
								'sim01' : {
									'docomo': {
	                                	'linkURL' : 'https://shop.aeondigitalworld.com/shop/cart/cart.aspx?goods=A116-2007940528012',
	                                	'gaAction' : 'huawei_p20_black'
									}
								},
								'sim02' : {
									'docomo': {
										'linkURL' : 'https://shop.aeondigitalworld.com/shop/cart/cart.aspx?goods=A116-2007940528036',
	                                	'gaAction' : 'huawei_p20_black'
									}
								}
						}
				},									
                'sms' : {
						'blue' : {
								'sim01' : {
									'docomo' : {
	                                	'linkURL' : 'https://shop.aeondigitalworld.com/shop/cart/cart.aspx?goods=A116-2007940527978',
	                                	'gaAction' : 'huawei_p20_blue'
									},
									'au' : {
										'linkURL' : 'https://shop.aeondigitalworld.com/shop/cart/cart.aspx?goods=A',
	                                	'gaAction' : 'huawei_p20_blue'
									}
								},
								'sim02' : {
									'docomo' : {
										'linkURL' : 'https://shop.aeondigitalworld.com/shop/cart/cart.aspx?goods=A116-2007940527992',
	                                	'gaAction' : 'huawei_p20_blue'
									}
								}
						},
						'pink' : {
								'sim01' : {
									'docomo' : {
	                                	'linkURL' : 'https://shop.aeondigitalworld.com/shop/cart/cart.aspx?goods=A116-2007940527923',
	                                	'gaAction' : 'huawei_p20_pink'
									},
									'au' : {
										'linkURL' : 'https://shop.aeondigitalworld.com/shop/cart/cart.aspx?goods=A',
	                                	'gaAction' : 'huawei_p20_pink'
									}
								},
								'sim02' : {
									'docomo' : {
										'linkURL' : 'https://shop.aeondigitalworld.com/shop/cart/cart.aspx?goods=A116-2007940527947',
	                                	'gaAction' : 'huawei_p20_pink'
									}
								}
						},
						'black' : {
								'sim01' : {
									'docomo' : {
	                                	'linkURL' : 'https://shop.aeondigitalworld.com/shop/cart/cart.aspx?goods=A116-2007940528029',
	                                	'gaAction' : 'huawei_p20_black'
									},
									'au' : {
										'linkURL' : 'https://shop.aeondigitalworld.com/shop/cart/cart.aspx?goods=A',
	                                	'gaAction' : 'huawei_p20_black'
									}
								},
								'sim02' : {
									'docomo' : {
										'linkURL' : 'https://shop.aeondigitalworld.com/shop/cart/cart.aspx?goods=A116-2007940528043',
	                                	'gaAction' : 'huawei_p20_black'
									}
								}
						}
				},
                'deviceOnly' : {
						'blue' : {
	                            'linkURL' : 'https://shop.aeondigitalworld.com/shop/cart/cart.aspx?goods=A116-6901443235940',
	                            'gaAction' : 'huawei_p20_blue'
						},
						'pink' : {
	                            'linkURL' : 'https://shop.aeondigitalworld.com/shop/cart/cart.aspx?goods=A116-6901443235957',
	                            'gaAction' : 'huawei_p20_pink'
						},
						'black' : {
	                            'linkURL' : 'https://shop.aeondigitalworld.com/shop/cart/cart.aspx?goods=A116-6901443235933',
	                            'gaAction' : 'huawei_p20_black'
						}
				}
		},'huawei_p20_lite': { // huawei_p20_lite
                'price' : 34344,
                'voice' : {
						'blue' : {
								'docomo' : {
                                	'linkURL' : 'https://shop.aeondigitalworld.com/shop/cart/cart.aspx?goods=A116-2007940527763',
                                	'gaAction' : 'huawei_p20_lite_blue'
								},
								'au' : {
									'linkURL' : 'https://shop.aeondigitalworld.com/shop/cart/cart.aspx?goods=A116-2007940527817',
                                	'gaAction' : 'huawei_p20_lite_blue'
								}
						},
						'pink' : {
								'docomo' : {
                                	'linkURL' : 'https://shop.aeondigitalworld.com/shop/cart/cart.aspx?goods=A116-2007940527695',
                                	'gaAction' : 'huawei_p20_lite_pink'
								},
								'au' : {
									'linkURL' : 'https://shop.aeondigitalworld.com/shop/cart/cart.aspx?goods=A116-2007940527749',
                                	'gaAction' : 'huawei_p20_lite_pink'
								}
						},
						'black' : {
								'docomo' : {
                                	'linkURL' : 'https://shop.aeondigitalworld.com/shop/cart/cart.aspx?goods=A116-2007940527831',
                                	'gaAction' : 'huawei_p20_lite_black'
								},
								'au' : {
									'linkURL' : 'https://shop.aeondigitalworld.com/shop/cart/cart.aspx?goods=A116-2007940527886',
                                	'gaAction' : 'huawei_p20_lite_black'
								}
						}
				},
                'data' : {
						'blue' : {
								'sim01' : {
									'docomo': {
	                                	'linkURL' : 'https://shop.aeondigitalworld.com/shop/cart/cart.aspx?goods=A116-2007940527770',
	                                	'gaAction' : 'huawei_p20_lite_blue'
									}
								},
								'sim02' : {
									'docomo': {
										'linkURL' : 'https://shop.aeondigitalworld.com/shop/cart/cart.aspx?goods=A116-2007940527794',
	                                	'gaAction' : 'huawei_p20_lite_blue'
									}
								}
						},
						'pink' : {
								'sim01' : {
									'docomo': {
	                                	'linkURL' : 'https://shop.aeondigitalworld.com/shop/cart/cart.aspx?goods=A116-2007940527701',
	                                	'gaAction' : 'huawei_p20_lite_pink'
									}
								},
								'sim02' : {
									'docomo': {
										'linkURL' : 'https://shop.aeondigitalworld.com/shop/cart/cart.aspx?goods=A116-2007940527725',
	                                	'gaAction' : 'huawei_p20_lite_pink'
									}
								}
						},
						'black' : {
								'sim01' : {
									'docomo': {
	                                	'linkURL' : 'https://shop.aeondigitalworld.com/shop/cart/cart.aspx?goods=A116-2007940527848',
	                                	'gaAction' : 'huawei_p20_lite_black'
									}
								},
								'sim02' : {
									'docomo': {
										'linkURL' : 'https://shop.aeondigitalworld.com/shop/cart/cart.aspx?goods=A116-2007940527862',
	                                	'gaAction' : 'huawei_p20_lite_black'
									}
								}
						}
				},									
                'sms' : {
						'blue' : {
								'sim01' : {
									'docomo' : {
	                                	'linkURL' : 'https://shop.aeondigitalworld.com/shop/cart/cart.aspx?goods=A116-2007940527787',
	                                	'gaAction' : 'huawei_p20_lite_blue'
									},
									'au' : {
										'linkURL' : 'https://shop.aeondigitalworld.com/shop/cart/cart.aspx?goods=A116-2007940527824',
	                                	'gaAction' : 'huawei_p20_lite_blue'
									}
								},
								'sim02' : {
									'docomo' : {
										'linkURL' : 'https://shop.aeondigitalworld.com/shop/cart/cart.aspx?goods=A116-2007940527800',
	                                	'gaAction' : 'huawei_p20_lite_blue'
									}
								}
						},
						'pink' : {
								'sim01' : {
									'docomo' : {
	                                	'linkURL' : 'https://shop.aeondigitalworld.com/shop/cart/cart.aspx?goods=A116-2007940527718',
	                                	'gaAction' : 'huawei_p20_lite_pink'
									},
									'au' : {
										'linkURL' : 'https://shop.aeondigitalworld.com/shop/cart/cart.aspx?goods=A116-2007940527756',
	                                	'gaAction' : 'huawei_p20_lite_pink'
									}
								},
								'sim02' : {
									'docomo' : {
										'linkURL' : 'https://shop.aeondigitalworld.com/shop/cart/cart.aspx?goods=A116-2007940527732',
	                                	'gaAction' : 'huawei_p20_lite_pink'
									}
								}
						},
						'black' : {
								'sim01' : {
									'docomo' : {
	                                	'linkURL' : 'https://shop.aeondigitalworld.com/shop/cart/cart.aspx?goods=A116-2007940527855',
	                                	'gaAction' : 'huawei_p20_lite_black'
									},
									'au' : {
										'linkURL' : 'https://shop.aeondigitalworld.com/shop/cart/cart.aspx?goods=A116-2007940527893',
	                                	'gaAction' : 'huawei_p20_lite_black'
									}
								},
								'sim02' : {
									'docomo' : {
										'linkURL' : 'https://shop.aeondigitalworld.com/shop/cart/cart.aspx?goods=A116-2007940527879',
	                                	'gaAction' : 'huawei_p20_lite_black'
									}
								}
						}
				},
                'deviceOnly' : {
						'blue' : {
	                            'linkURL' : 'https://shop.aeondigitalworld.com/shop/cart/cart.aspx?goods=A116-6901443235919',
	                            'gaAction' : 'huawei_p20_lite_blue'
						},
						'pink' : {
	                            'linkURL' : 'https://shop.aeondigitalworld.com/shop/cart/cart.aspx?goods=A116-6901443235902',
	                            'gaAction' : 'huawei_p20_lite_pink'
						},
						'black' : {
	                            'linkURL' : 'https://shop.aeondigitalworld.com/shop/cart/cart.aspx?goods=A116-6901443235926',
	                            'gaAction' : 'huawei_p20_lite_black'
						}
				}
		},'asus_zenfone_5q': { // asus_zenfone_5q
                'price' : 42984,
                'voice' : {
						'red' : {
								'docomo' : {
                                	'linkURL' : 'https://shop.aeondigitalworld.com/shop/cart/cart.aspx?goods=A116-2007940525424',
                                	'gaAction' : 'asus_zenfone_5q_red'
								},
								'au' : {
									'linkURL' : 'https://shop.aeondigitalworld.com/shop/cart/cart.aspx?goods=A116-2007940525479',
                                	'gaAction' : 'asus_zenfone_5q_red'
								}
						},
						'white' : {
								'docomo' : {
                                	'linkURL' : 'https://shop.aeondigitalworld.com/shop/cart/cart.aspx?goods=A116-2007940525356',
                                	'gaAction' : 'asus_zenfone_5q_white'
								},
								'au' : {
									'linkURL' : 'https://shop.aeondigitalworld.com/shop/cart/cart.aspx?goods=A116-2007940525400',
                                	'gaAction' : 'asus_zenfone_5q_white'
								}
						},
						'black' : {
								'docomo' : {
                                	'linkURL' : 'https://shop.aeondigitalworld.com/shop/cart/cart.aspx?goods=A116-2007940525288',
                                	'gaAction' : 'asus_zenfone_5q_black'
								},
								'au' : {
									'linkURL' : 'https://shop.aeondigitalworld.com/shop/cart/cart.aspx?goods=A116-2007940525332',
                                	'gaAction' : 'asus_zenfone_5q_black'
								}
						}
				},
                'data' : {
						'red' : {
								'sim01' : {
									'docomo': {
	                                	'linkURL' : 'https://shop.aeondigitalworld.com/shop/cart/cart.aspx?goods=A116-2007940525431',
	                                	'gaAction' : 'asus_zenfone_5q_red'
									}
								},
								'sim02' : {
									'docomo': {
										'linkURL' : 'https://shop.aeondigitalworld.com/shop/cart/cart.aspx?goods=A116-2007940525455',
	                                	'gaAction' : 'asus_zenfone_5q_red'
									}
								}
						},
						'white' : {
								'sim01' : {
									'docomo': {
	                                	'linkURL' : 'https://shop.aeondigitalworld.com/shop/cart/cart.aspx?goods=A116-2007940525363',
	                                	'gaAction' : 'asus_zenfone_5q_white'
									}
								},
								'sim02' : {
									'docomo': {
										'linkURL' : 'https://shop.aeondigitalworld.com/shop/cart/cart.aspx?goods=A116-2007940525387',
	                                	'gaAction' : 'asus_zenfone_5q_white'
									}
								}
						},
						'black' : {
								'sim01' : {
									'docomo': {
	                                	'linkURL' : 'https://shop.aeondigitalworld.com/shop/cart/cart.aspx?goods=A116-2007940525295',
	                                	'gaAction' : 'asus_zenfone_5q_black'
									}
								},
								'sim02' : {
									'docomo': {
										'linkURL' : 'https://shop.aeondigitalworld.com/shop/cart/cart.aspx?goods=A116-2007940525318',
	                                	'gaAction' : 'asus_zenfone_5q_black'
									}
								}
						}
				},									
                'sms' : {
						'red' : {
								'sim01' : {
									'docomo' : {
	                                	'linkURL' : 'https://shop.aeondigitalworld.com/shop/cart/cart.aspx?goods=A116-2007940525448',
	                                	'gaAction' : 'asus_zenfone_5q_red'
									},
									'au' : {
										'linkURL' : 'https://shop.aeondigitalworld.com/shop/cart/cart.aspx?goods=A116-2007940527688',
	                                	'gaAction' : 'asus_zenfone_5q_red'
									}
								},
								'sim02' : {
									'docomo' : {
										'linkURL' : 'https://shop.aeondigitalworld.com/shop/cart/cart.aspx?goods=A116-2007940525462',
	                                	'gaAction' : 'asus_zenfone_5q_red'
									}
								}
						},
						'white' : {
								'sim01' : {
									'docomo' : {
	                                	'linkURL' : 'https://shop.aeondigitalworld.com/shop/cart/cart.aspx?goods=A116-2007940525370',
	                                	'gaAction' : 'asus_zenfone_5q_white'
									},
									'au' : {
										'linkURL' : 'https://shop.aeondigitalworld.com/shop/cart/cart.aspx?goods=A116-2007940525417',
	                                	'gaAction' : 'asus_zenfone_5q_white'
									}
								},
								'sim02' : {
									'docomo' : {
										'linkURL' : 'https://shop.aeondigitalworld.com/shop/cart/cart.aspx?goods=A116-2007940525394',
	                                	'gaAction' : 'asus_zenfone_5q_white'
									}
								}
						},
						'black' : {
								'sim01' : {
									'docomo' : {
	                                	'linkURL' : 'https://shop.aeondigitalworld.com/shop/cart/cart.aspx?goods=A116-2007940525301',
	                                	'gaAction' : 'asus_zenfone_5q_black'
									},
									'au' : {
										'linkURL' : 'https://shop.aeondigitalworld.com/shop/cart/cart.aspx?goods=A116-2007940525349',
	                                	'gaAction' : 'asus_zenfone_5q_black'
									}
								},
								'sim02' : {
									'docomo' : {
										'linkURL' : 'https://shop.aeondigitalworld.com/shop/cart/cart.aspx?goods=A116-2007940525325',
	                                	'gaAction' : 'asus_zenfone_5q_black'
									}
								}
						}
				},
                'deviceOnly' : {
						'red' : {
	                            'linkURL' : 'https://shop.aeondigitalworld.com/shop/cart/cart.aspx?goods=A116-0889349979587',
	                            'gaAction' : 'asus_zenfone_5q_red'
						},
						'white' : {
	                            'linkURL' : 'https://shop.aeondigitalworld.com/shop/cart/cart.aspx?goods=A116-0889349979570',
	                            'gaAction' : 'asus_zenfone_5q_white'
						},
						'black' : {
	                            'linkURL' : 'https://shop.aeondigitalworld.com/shop/cart/cart.aspx?goods=A116-0889349979563',
	                            'gaAction' : 'asus_zenfone_5q_black'
						}
				}
		},
		'asus_zenfone_5': { // asus_zenfone_5
                'price' : 57024,
                'voice' : {
						'black' : {
								'docomo' : {
                                	'linkURL' : 'https://shop.aeondigitalworld.com/shop/cart/cart.aspx?goods=A116-2007940525141',
                                	'gaAction' : 'asus_zenfone_5_black'
								},
								'au' : {
									'linkURL' : 'https://shop.aeondigitalworld.com/shop/cart/cart.aspx?goods=A116-2007940525196',
                                	'gaAction' : 'asus_zenfone_5_black'
								}
						},
						'silver' : {
								'docomo' : {
                                	'linkURL' : 'https://shop.aeondigitalworld.com/shop/cart/cart.aspx?goods=A116-2007940525219',
                                	'gaAction' : 'asus_zenfone_5_silver'
								},
								'au' : {
									'linkURL' : 'https://shop.aeondigitalworld.com/shop/cart/cart.aspx?goods=A116-2007940525264',
                                	'gaAction' : 'asus_zenfone_5_silver'
								}
						}
				},
                'data' : {
						'black' : {
								'sim01' : {
									'docomo': {
	                                	'linkURL' : 'https://shop.aeondigitalworld.com/shop/cart/cart.aspx?goods=A116-2007940525158',
	                                	'gaAction' : 'asus_zenfone_5_black'
									}
								},
								'sim02' : {
									'docomo': {
										'linkURL' : 'https://shop.aeondigitalworld.com/shop/cart/cart.aspx?goods=A116-2007940525172',
	                                	'gaAction' : 'asus_zenfone_5_black'
									}
								}
						},
						'silver' : {
								'sim01' : {
									'docomo': {
	                                	'linkURL' : 'https://shop.aeondigitalworld.com/shop/cart/cart.aspx?goods=A116-2007940525226',
	                                	'gaAction' : 'asus_zenfone_5_silver'
									}
								},
								'sim02' : {
									'docomo': {
										'linkURL' : 'https://shop.aeondigitalworld.com/shop/cart/cart.aspx?goods=A116-2007940525240',
	                                	'gaAction' : 'asus_zenfone_5_silver'
									}
								}
						}
				},									
                'sms' : {
						'black' : {
								'sim01' : {
									'docomo' : {
	                                	'linkURL' : 'https://shop.aeondigitalworld.com/shop/cart/cart.aspx?goods=A116-2007940525165',
	                                	'gaAction' : 'asus_zenfone_5_black'
									},
									'au' : {
										'linkURL' : 'https://shop.aeondigitalworld.com/shop/cart/cart.aspx?goods=A116-2007940525202',
	                                	'gaAction' : 'asus_zenfone_5_black'
									}
								},
								'sim02' : {
									'docomo' : {
										'linkURL' : 'https://shop.aeondigitalworld.com/shop/cart/cart.aspx?goods=A116-2007940525189',
	                                	'gaAction' : 'asus_zenfone_5_black'
									}
								}
						},
						'silver' : {
								'sim01' : {
									'docomo' : {
	                                	'linkURL' : 'https://shop.aeondigitalworld.com/shop/cart/cart.aspx?goods=A116-2007940525233',
	                                	'gaAction' : 'asus_zenfone_5_silver'
									},
									'au' : {
										'linkURL' : 'https://shop.aeondigitalworld.com/shop/cart/cart.aspx?goods=A116-2007940525271',
	                                	'gaAction' : 'asus_zenfone_5_silver'
									}
								},
								'sim02' : {
									'docomo' : {
										'linkURL' : 'https://shop.aeondigitalworld.com/shop/cart/cart.aspx?goods=A116-2007940525257',
	                                	'gaAction' : 'asus_zenfone_5_silver'
									}
								}
						}
				},
                'deviceOnly' : {
						'black' : {
	                            'linkURL' : 'https://shop.aeondigitalworld.com/shop/cart/cart.aspx?goods=A116-0889349979549',
	                            'gaAction' : 'asus_zenfone_5_black'
						},
						'silver' : {
	                            'linkURL' : 'https://shop.aeondigitalworld.com/shop/cart/cart.aspx?goods=A116-0889349979556',
	                            'gaAction' : 'asus_zenfone_5_silver'
						}

				}
		},'asus_zenfone_4_selfie': { // asus_zenfone_4_selfie
                'price' : 32184,
                'voice' : {
						'gold' : {
								'docomo' : {
                                	'linkURL' : 'https://shop.aeondigitalworld.com/shop/cart/cart.aspx?goods=A116-2007940524939',
                                	'gaAction' : 'asus_zenfone_4_selfie_gold'
								},
								'au' : {
									'linkURL' : 'https://shop.aeondigitalworld.com/shop/cart/cart.aspx?goods=A116-2007940524984',
                                	'gaAction' : 'asus_zenfone_4_selfie_gold'
								}
						},
						'black' : {
								'docomo' : {
                                	'linkURL' : 'https://shop.aeondigitalworld.com/shop/cart/cart.aspx?goods=A116-2007940525004',
                                	'gaAction' : 'asus_zenfone_4_selfie_black'
								},
								'au' : {
									'linkURL' : 'https://shop.aeondigitalworld.com/shop/cart/cart.aspx?goods=A116-2007940525059',
                                	'gaAction' : 'asus_zenfone_4_selfie_black'
								}
						},
						'pink' : {
								'docomo' : {
                                	'linkURL' : 'https://shop.aeondigitalworld.com/shop/cart/cart.aspx?goods=A116-2007940525073',
                                	'gaAction' : 'asus_zenfone_4_selfie_pink'
								},
								'au' : {
									'linkURL' : 'https://shop.aeondigitalworld.com/shop/cart/cart.aspx?goods=A116-2007940525127',
                                	'gaAction' : 'asus_zenfone_4_selfie_pink'
								}
						}
				},
                'data' : {
						'gold' : {
								'sim01' : {
									'docomo': {
										'linkURL' : 'https://shop.aeondigitalworld.com/shop/cart/cart.aspx?goods=A116-2007940524946',
	                                	'gaAction' : 'asus_zenfone_4_selfie_gold'
									}
								},
								'sim02' : {
									'docomo': {
										'linkURL' : 'https://shop.aeondigitalworld.com/shop/cart/cart.aspx?goods=A116-2007940524960',
	                                	'gaAction' : 'asus_zenfone_4_selfie_gold'
									}
								},
						},
						'black' : {
								'sim01' : {
									'docomo': {
	                                	'linkURL' : 'https://shop.aeondigitalworld.com/shop/cart/cart.aspx?goods=A116-2007940525011',
	                                	'gaAction' : 'asus_zenfone_4_selfie_black'
									}
								},
								'sim02' : {
									'docomo': {
										'linkURL' : 'https://shop.aeondigitalworld.com/shop/cart/cart.aspx?goods=A116-2007940525035',
	                                	'gaAction' : 'asus_zenfone_4_selfie_black'
									}
								}
						},
						'pink' : {
								'sim01' : {
									'docomo': {
	                                	'linkURL' : 'https://shop.aeondigitalworld.com/shop/cart/cart.aspx?goods=A116-2007940525080',
	                                	'gaAction' : 'asus_zenfone_4_selfie_pink'
									}
								},
								'sim02' : {
									'docomo': {
										'linkURL' : 'https://shop.aeondigitalworld.com/shop/cart/cart.aspx?goods=A116-2007940525103',
	                                	'gaAction' : 'asus_zenfone_4_selfie_pink'
									}
								}
						}
				},									
                'sms' : {
						'gold' : {
								'sim01' : {
									'docomo' : {
	                                	'linkURL' : 'https://shop.aeondigitalworld.com/shop/cart/cart.aspx?goods=A116-2007940524953',
	                                	'gaAction' : 'asus_zenfone_4_selfie_gold'
									},
									'au': {
										'linkURL' : 'https://shop.aeondigitalworld.com/shop/cart/cart.aspx?goods=A116-2007940524991',
	                                	'gaAction' : 'asus_zenfone_4_selfie_gold'
									}
								},
								'sim02' : {
									'docomo': {
										'linkURL' : 'https://shop.aeondigitalworld.com/shop/cart/cart.aspx?goods=A116-2007940524977',
	                                	'gaAction' : 'asus_zenfone_4_selfie_gold'
									}
								}
						},
						'black' : {
								'sim01' : {
									'docomo' : {
	                                	'linkURL' : 'https://shop.aeondigitalworld.com/shop/cart/cart.aspx?goods=A116-2007940525028',
	                                	'gaAction' : 'asus_zenfone_4_selfie_black'
									},
									'au' : {
										'linkURL' : 'https://shop.aeondigitalworld.com/shop/cart/cart.aspx?goods=A116-2007940525066',
	                                	'gaAction' : 'asus_zenfone_4_selfie_black'
									}
								},
								'sim02' : {
									'docomo' : {
										'linkURL' : 'https://shop.aeondigitalworld.com/shop/cart/cart.aspx?goods=A116-2007940525042',
	                                	'gaAction' : 'asus_zenfone_4_selfie_black'
									}
								}
						},
						'pink' : {
								'sim01' : {
									'docomo' : {
	                                	'linkURL' : 'https://shop.aeondigitalworld.com/shop/cart/cart.aspx?goods=A116-2007940525097',
	                                	'gaAction' : 'asus_zenfone_4_selfie_pink'
									},
									'au' : {
										'linkURL' : 'https://shop.aeondigitalworld.com/shop/cart/cart.aspx?goods=A116-2007940525134',
	                                	'gaAction' : 'asus_zenfone_4_selfie_pink'
									}
								},
								'sim02' : {
									'docomo' : {
										'linkURL' : 'https://shop.aeondigitalworld.com/shop/cart/cart.aspx?goods=A116-2007940525110',
	                                	'gaAction' : 'asus_zenfone_4_selfie_pink'
									}
								}
						}
				},
                'deviceOnly' : {
						'gold' : {
	                            'linkURL' : 'https://shop.aeondigitalworld.com/shop/cart/cart.aspx?goods=A116-0889349896594',
	                            'gaAction' : 'asus_zenfone_4_selfie_gold'
						},
						'black' : {
	                            'linkURL' : 'https://shop.aeondigitalworld.com/shop/cart/cart.aspx?goods=A116-0889349894002',
	                            'gaAction' : 'asus_zenfone_4_selfie_black'
						},
						'pink' : {
	                            'linkURL' : 'https://shop.aeondigitalworld.com/shop/cart/cart.aspx?goods=A116-0889349896600',
	                            'gaAction' : 'asus_zenfone_4_selfie_pink'
						}

				}
		},
		'asus_zenfone_4_customize': { // asus_zenfone_4_customize
                'price' : 48384,
                'deviceOnly' : {
						'black' : {
	                            'linkURL' : 'https://shop.aeondigitalworld.com/shop/cart/cart.aspx?goods=A116-0889349852439',
	                            'gaAction' : 'asus_zenfone_4_customize_black'
						},
						'white' : {
	                            'linkURL' : 'https://shop.aeondigitalworld.com/shop/cart/cart.aspx?goods=A116-0889349852446',
	                            'gaAction' : 'asus_zenfone_4_customize_white'
						}
				}
		},
		'alcatel_shine_lite': { // alcatel_shine_lite
                'price' : 18144,
                'voice' : {
						'white' : {
								'docomo' : {
                                	'linkURL' : 'https://shop.aeondigitalworld.com/shop/cart/cart.aspx?goods=A116-2007940519805',
                                	'gaAction' : 'alcatel_shine_lite_white'
								},
								'au' : {
									'linkURL' : 'https://shop.aeondigitalworld.com/shop/cart/cart.aspx?goods=A116-2007940524816',
                                	'gaAction' : 'alcatel_shine_lite_white'
								}
						},
						'gold' : {
								'docomo' : {
                                	'linkURL' : 'https://shop.aeondigitalworld.com/shop/cart/cart.aspx?goods=A116-2007940519751',
                                	'gaAction' : 'alcatel_shine_lite_gold'
								},
								'au' : {
									'linkURL' : 'https://shop.aeondigitalworld.com/shop/cart/cart.aspx?goods=A116-2007940524793',
                                	'gaAction' : 'alcatel_shine_lite_gold'
								}
						},
						'black' : {
								'docomo' : {
                                	'linkURL' : 'https://shop.aeondigitalworld.com/shop/cart/cart.aspx?goods=A116-2007940519706',
                                	'gaAction' : 'alcatel_shine_lite_black'
								},
								'au' : {
									'linkURL' : 'https://shop.aeondigitalworld.com/shop/cart/cart.aspx?goods=A116-2007940524779',
                                	'gaAction' : 'alcatel_shine_lite_black'
								}
						}
				},
                'data' : {
						'white' : {
								'sim01' : {
									'docomo': {
										'linkURL' : 'https://shop.aeondigitalworld.com/shop/cart/cart.aspx?goods=A116-2007940519812',
	                                	'gaAction' : 'alcatel_shine_lite_white'
									}
								},
								'sim02' : {
									'docomo': {
										'linkURL' : 'https://shop.aeondigitalworld.com/shop/cart/cart.aspx?goods=A116-2007940519836',
	                                	'gaAction' : 'alcatel_shine_lite_white'
									}
								},
						},
						'gold' : {
								'sim01' : {
									'docomo': {
	                                	'linkURL' : 'https://shop.aeondigitalworld.com/shop/cart/cart.aspx?goods=A116-2007940519768',
	                                	'gaAction' : 'alcatel_shine_lite_gold'
									}
								},
								'sim02' : {
									'docomo': {
										'linkURL' : 'https://shop.aeondigitalworld.com/shop/cart/cart.aspx?goods=A116-2007940519782',
	                                	'gaAction' : 'alcatel_shine_lite_gold'
									}
								}
						},
						'black' : {
								'sim01' : {
									'docomo': {
	                                	'linkURL' : 'https://shop.aeondigitalworld.com/shop/cart/cart.aspx?goods=A116-2007940519713',
	                                	'gaAction' : 'alcatel_shine_lite_black'
									}
								},
								'sim02' : {
									'docomo': {
										'linkURL' : 'https://shop.aeondigitalworld.com/shop/cart/cart.aspx?goods=A116-2007940519737',
	                                	'gaAction' : 'alcatel_shine_lite_black'
									}
								}
						}
				},									
                'sms' : {
						'white' : {
								'sim01' : {
									'docomo' : {
	                                	'linkURL' : 'https://shop.aeondigitalworld.com/shop/cart/cart.aspx?goods=A116-2007940519829',
	                                	'gaAction' : 'alcatel_shine_lite_white'
									},
									'au': {
										'linkURL' : 'https://shop.aeondigitalworld.com/shop/cart/cart.aspx?goods=A116-2007940524823',
	                                	'gaAction' : 'alcatel_shine_lite_white'
									}
								},
								'sim02' : {
									'docomo': {
										'linkURL' : 'https://shop.aeondigitalworld.com/shop/cart/cart.aspx?goods=A116-2007940519843',
	                                	'gaAction' : 'alcatel_shine_lite_white'
									}
								}
						},
						'gold' : {
								'sim01' : {
									'docomo' : {
	                                	'linkURL' : 'https://shop.aeondigitalworld.com/shop/cart/cart.aspx?goods=A116-2007940519775',
	                                	'gaAction' : 'alcatel_shine_lite_gold'
									},
									'au' : {
										'linkURL' : 'https://shop.aeondigitalworld.com/shop/cart/cart.aspx?goods=A116-2007940524809',
	                                	'gaAction' : 'alcatel_shine_lite_gold'
									}
								},
								'sim02' : {
									'docomo' : {
										'linkURL' : 'https://shop.aeondigitalworld.com/shop/cart/cart.aspx?goods=A116-2007940519799',
	                                	'gaAction' : 'alcatel_shine_lite_gold'
									}
								}
						},
						'black' : {
								'sim01' : {
									'docomo' : {
	                                	'linkURL' : 'https://shop.aeondigitalworld.com/shop/cart/cart.aspx?goods=A116-2007940519720',
	                                	'gaAction' : 'alcatel_shine_lite_black'
									},
									'au' : {
										'linkURL' : 'https://shop.aeondigitalworld.com/shop/cart/cart.aspx?goods=A116-2007940524786',
	                                	'gaAction' : 'alcatel_shine_lite_black'
									}
								},
								'sim02' : {
									'docomo' : {
										'linkURL' : 'https://shop.aeondigitalworld.com/shop/cart/cart.aspx?goods=A116-2007940519744',
	                                	'gaAction' : 'alcatel_shine_lite_black'
									}
								}
						}
				},
                'deviceOnly' : {
						'white' : {
	                            'linkURL' : 'https://shop.aeondigitalworld.com/shop/cart/cart.aspx?goods=A116-4894461429007',
	                            'gaAction' : 'alcatel_shine_lite_white'
						},
						'gold' : {
	                            'linkURL' : 'https://shop.aeondigitalworld.com/shop/cart/cart.aspx?goods=A116-4894461429229',
	                            'gaAction' : 'alcatel_shine_lite_gold'
						},
						'black' : {
	                            'linkURL' : 'https://shop.aeondigitalworld.com/shop/cart/cart.aspx?goods=A116-4894461429236',
	                            'gaAction' : 'alcatel_shine_lite_black'
						}

				}
		},
		'aquos_sh_m04': { // aquos_sh_m04
                'price' : 26784,
                'voice' : {
						'blue' : {
								'docomo' : {
                                	'linkURL' : 'https://shop.aeondigitalworld.com/shop/cart/cart.aspx?goods=A116-2007940524458',
                                	'gaAction' : 'aquos_sh_m04_blue'
								},
								'au' : {
									'linkURL' : 'https://shop.aeondigitalworld.com/shop/cart/cart.aspx?goods=A116-2007940524915',
                                	'gaAction' : 'aquos_sh_m04_blue'
								}
						},
						'silver' : {
								'docomo' : {
                                	'linkURL' : 'https://shop.aeondigitalworld.com/shop/cart/cart.aspx?goods=A116-2007940524403',
                                	'gaAction' : 'aquos_sh_m04_silver'
								},
								'au' : {
									'linkURL' : 'https://shop.aeondigitalworld.com/shop/cart/cart.aspx?goods=A116-2007940524892',
                                	'gaAction' : 'aquos_sh_m04_silver'
								}
						}
				},
                'data' : {
						'blue' : {
								'sim01' : {
									'docomo': {
										'linkURL' : 'https://shop.aeondigitalworld.com/shop/cart/cart.aspx?goods=A116-2007940524465',
	                                	'gaAction' : 'aquos_sh_m04_blue'
									}
								},
								'sim02' : {
									'docomo': {
										'linkURL' : 'https://shop.aeondigitalworld.com/shop/cart/cart.aspx?goods=A116-2007940524489',
	                                	'gaAction' : 'aquos_sh_m04_blue'
									}
								},
						},
						'silver' : {
								'sim01' : {
									'docomo': {
	                                	'linkURL' : 'https://shop.aeondigitalworld.com/shop/cart/cart.aspx?goods=A116-2007940524410',
	                                	'gaAction' : 'aquos_sh_m04_silver'
									}
								},
								'sim02' : {
									'docomo': {
										'linkURL' : 'https://shop.aeondigitalworld.com/shop/cart/cart.aspx?goods=A116-2007940524434',
	                                	'gaAction' : 'aquos_sh_m04_silver'
									}
								}
						}
				},									
                'sms' : {
						'blue' : {
								'sim01' : {
									'docomo' : {
	                                	'linkURL' : 'https://shop.aeondigitalworld.com/shop/cart/cart.aspx?goods=A116-2007940524472',
	                                	'gaAction' : 'aquos_sh_m04_blue'
									},
									'au': {
										'linkURL' : 'https://shop.aeondigitalworld.com/shop/cart/cart.aspx?goods=A116-2007940524922',
	                                	'gaAction' : 'aquos_sh_m04_blue'
									}
								},
								'sim02' : {
									'docomo': {
										'linkURL' : 'https://shop.aeondigitalworld.com/shop/cart/cart.aspx?goods=A116-2007940524496',
	                                	'gaAction' : 'aquos_sh_m04_blue'
									}
								}
						},
						'silver' : {
								'sim01' : {
									'docomo' : {
	                                	'linkURL' : 'https://shop.aeondigitalworld.com/shop/cart/cart.aspx?goods=A116-2007940524427',
	                                	'gaAction' : 'aquos_sh_m04_silver'
									},
									'au' : {
										'linkURL' : 'https://shop.aeondigitalworld.com/shop/cart/cart.aspx?goods=A116-2007940524908',
	                                	'gaAction' : 'aquos_sh_m04_silver'
									}
								},
								'sim02' : {
									'docomo' : {
										'linkURL' : 'https://shop.aeondigitalworld.com/shop/cart/cart.aspx?goods=A116-2007940524441',
	                                	'gaAction' : 'aquos_sh_m04_silver'
									}
								}
						}
				},
                'deviceOnly' : {
						'blue' : {
	                            'linkURL' : 'https://shop.aeondigitalworld.com/shop/cart/cart.aspx?goods=A116-4974019952581',
	                            'gaAction' : 'aquos_sh_m04_blue'
						},
						'silver' : {
	                            'linkURL' : 'https://shop.aeondigitalworld.com/shop/cart/cart.aspx?goods=A116-4974019952574',
	                            'gaAction' : 'aquos_sh_m04_silver'
						}
				}
		},
		'huawei_nova_lite2': { // huawei_nova_lite2
                'price' : 27864,
                'voice' : {
						'blue' : {
								'docomo' : {
                                	'linkURL' : 'https://shop.aeondigitalworld.com/shop/cart/cart.aspx?goods=A116-2007940519959',
                                	'gaAction' : 'huawei_nova_lite2_blue'
								}
						},
						'black' : {
								'docomo' : {
                                	'linkURL' : 'https://shop.aeondigitalworld.com/shop/cart/cart.aspx?goods=A116-2007940519850',
                                	'gaAction' : 'huawei_nova_lite2_black'
								}
						},
						'gold' : {
								'docomo' : {
                                	'linkURL' : 'https://shop.aeondigitalworld.com/shop/cart/cart.aspx?goods=A116-2007940519904',
                                	'gaAction' : 'huawei_nova_lite2_gold'
								}
						}
				},
                'data' : {
						'blue' : {
								'sim01' : {
									'docomo': {
										'linkURL' : 'https://shop.aeondigitalworld.com/shop/cart/cart.aspx?goods=A116-2007940519966',
	                                	'gaAction' : 'huawei_nova_lite2_blue'
									}
								},
								'sim02' : {
									'docomo' : {
										'linkURL' : 'https://shop.aeondigitalworld.com/shop/cart/cart.aspx?goods=A116-2007940524380',
	                                	'gaAction' : 'huawei_nova_lite2_blue'
									}
								},
						},
						'black' : {
								'sim01' : {
									'docomo' : {
	                                	'linkURL' : 'https://shop.aeondigitalworld.com/shop/cart/cart.aspx?goods=A116-2007940519867',
	                                	'gaAction' : 'huawei_nova_lite2_black'
									}
								},
								'sim02' : {
									'docomo' : {
										'linkURL' : 'https://shop.aeondigitalworld.com/shop/cart/cart.aspx?goods=A116-2007940519881',
	                                	'gaAction' : 'huawei_nova_lite2_black'
									}
								}
						},
						'gold' : {
								'sim01' : {
									'docomo' : {
	                                	'linkURL' : 'https://shop.aeondigitalworld.com/shop/cart/cart.aspx?goods=A116-2007940519911',
	                                	'gaAction' : 'huawei_nova_lite2_gold'
									}
								},
								'sim02' : {
									'docomo' : {
										'linkURL' : 'https://shop.aeondigitalworld.com/shop/cart/cart.aspx?goods=A116-2007940519935',
	                                	'gaAction' : 'huawei_nova_lite2_gold'
									}
								}
						}
				},									
                'sms' : {
						'blue' : {
								'sim01' : {
									'docomo' : {
	                                	'linkURL' : 'https://shop.aeondigitalworld.com/shop/cart/cart.aspx?goods=A116-2007940519973',
	                                	'gaAction' : 'huawei_nova_lite2_blue'
									}
								},
								'sim02' : {
									'docomo': {
										'linkURL' : 'https://shop.aeondigitalworld.com/shop/cart/cart.aspx?goods=A116-2007940524397',
	                                	'gaAction' : 'huawei_nova_lite2_blue'
									}
								}
						},
						'black' : {
								'sim01' : {
									'docomo' : {
	                                	'linkURL' : 'https://shop.aeondigitalworld.com/shop/cart/cart.aspx?goods=A116-2007940519874',
	                                	'gaAction' : 'huawei_nova_lite2_black'
									}
								},
								'sim02' : {
									'docomo' : {
										'linkURL' : 'https://shop.aeondigitalworld.com/shop/cart/cart.aspx?goods=A116-2007940519898',
	                                	'gaAction' : 'huawei_nova_lite2_black'
									}
								}
						},
						'gold' : {
								'sim01' : {
									'docomo' : {
	                                	'linkURL' : 'https://shop.aeondigitalworld.com/shop/cart/cart.aspx?goods=A116-2007940519928',
	                                	'gaAction' : 'huawei_nova_lite2_gold'
									}
								},
								'sim02' : {
									'docomo': {
										'linkURL' : 'https://shop.aeondigitalworld.com/shop/cart/cart.aspx?goods=A116-2007940519942',
	                                	'gaAction' : 'huawei_nova_lite2_gold'
									}
								}
						}
				},
                'deviceOnly' : {
						'blue' : {
	                            'linkURL' : 'https://shop.aeondigitalworld.com/shop/cart/cart.aspx?goods=A116-6901443213115',
	                            'gaAction' : 'huawei_nova_lite2_blue'
						},
						'black' : {
	                            'linkURL' : 'https://shop.aeondigitalworld.com/shop/cart/cart.aspx?goods=A116-6901443213122',
	                            'gaAction' : 'huawei_nova_lite2_black'
						},
						'gold' : {
	                            'linkURL' : 'https://shop.aeondigitalworld.com/shop/cart/cart.aspx?goods=A116-6901443213108',
	                            'gaAction' : 'huawei_nova_lite2_gold'
						}
				}
		},
		'asus_zenfone_4_max': { // asus_zenfone_4_max
                'price' : 26784,
                'voice' : {
						'black' : {
								'docomo': {
                                	'linkURL' : 'https://shop.aeondigitalworld.com/shop/cart/cart.aspx?goods=A116-2007940519553',
                                	'gaAction' : 'asus_zenfone_4_max_black'
								},
								'au': {
									'linkURL' : 'https://shop.aeondigitalworld.com/shop/cart/cart.aspx?goods=A116-2007940524830',
                                	'gaAction' : 'asus_zenfone_4_max_black'
								}
						},
						'gold' : {
								'docomo': {
                                	'linkURL' : 'https://shop.aeondigitalworld.com/shop/cart/cart.aspx?goods=A116-2007940519607',
                                	'gaAction' : 'asus_zenfone_4_max_gold'
								},
								'au': {
									'linkURL' : 'https://shop.aeondigitalworld.com/shop/cart/cart.aspx?goods=A116-2007940524854',
                                	'gaAction' : 'asus_zenfone_4_max_gold'
								}
						},
						'pink' : {
								'docomo': {
                                	'linkURL' : 'https://shop.aeondigitalworld.com/shop/cart/cart.aspx?goods=A116-2007940519652',
                                	'gaAction' : 'asus_zenfone_4_max_pink'
								},
								'au': {
									'linkURL' : 'https://shop.aeondigitalworld.com/shop/cart/cart.aspx?goods=A116-2007940524878',
                                	'gaAction' : 'asus_zenfone_4_max_pink'
								}
						}
				},
                'data' : {
						'black' : {
								'sim01' : {
									'docomo': {
	                                	'linkURL' : 'https://shop.aeondigitalworld.com/shop/cart/cart.aspx?goods=A116-2007940519560',
	                                	'gaAction' : 'asus_zenfone_4_max_black'
									}
								},
								'sim02' : {
									'docomo': {
										'linkURL' : 'https://shop.aeondigitalworld.com/shop/cart/cart.aspx?goods=A116-2007940519584',
	                                	'gaAction' : 'asus_zenfone_4_max_black'
									}
								}
						},
						'gold' : {
								'sim01' : {
									'docomo': {
	                                	'linkURL' : 'https://shop.aeondigitalworld.com/shop/cart/cart.aspx?goods=A116-2007940519614',
	                                	'gaAction' : 'asus_zenfone_4_max_gold'
									}
								},
								'sim02' : {
									'docomo': {
										'linkURL' : 'https://shop.aeondigitalworld.com/shop/cart/cart.aspx?goods=A116-2007940519638',
	                                	'gaAction' : 'asus_zenfone_4_max_gold'
									}
								}
						},
						'pink' : {
								'sim01' : {
									'docomo': {
	                                	'linkURL' : 'https://shop.aeondigitalworld.com/shop/cart/cart.aspx?goods=A116-2007940519669',
	                                	'gaAction' : 'asus_zenfone_4_max_pink'
									}
								},
								'sim02' : {
									'docomo': {
										'linkURL' : 'https://shop.aeondigitalworld.com/shop/cart/cart.aspx?goods=A116-2007940519683',
	                                	'gaAction' : 'asus_zenfone_4_max_pink'
									}
								}
						}
				},									
                'sms' : {
						'black' : {
								'sim01' : {
									'docomo': {
	                                	'linkURL' : 'https://shop.aeondigitalworld.com/shop/cart/cart.aspx?goods=A116-2007940519577',
	                                	'gaAction' : 'asus_zenfone_4_max_black'
									},
									'au': {
										'linkURL' : 'https://shop.aeondigitalworld.com/shop/cart/cart.aspx?goods=A116-2007940524847',
	                                	'gaAction' : 'asus_zenfone_4_max_black'
									}
								},
								'sim02' : {
									'docomo': {
										'linkURL' : 'https://shop.aeondigitalworld.com/shop/cart/cart.aspx?goods=A116-2007940519591',
	                                	'gaAction' : 'asus_zenfone_4_max_black'
									}
								}
						},
						'gold' : {
								'sim01' : {
									'docomo': {
	                                	'linkURL' : 'https://shop.aeondigitalworld.com/shop/cart/cart.aspx?goods=A116-2007940519621',
	                                	'gaAction' : 'asus_zenfone_4_max_gold'
									},
									'au': {
										'linkURL' : 'https://shop.aeondigitalworld.com/shop/cart/cart.aspx?goods=A116-2007940524861',
	                                	'gaAction' : 'asus_zenfone_4_max_gold'
									}
								},
								'sim02' : {
									'docomo': {
										'linkURL' : 'https://shop.aeondigitalworld.com/shop/cart/cart.aspx?goods=A116-2007940519645',
	                                	'gaAction' : 'asus_zenfone_4_max_gold'
									}
								}
						},
						'pink' : {
								'sim01' : {
									'docomo': {
	                                	'linkURL' : 'https://shop.aeondigitalworld.com/shop/cart/cart.aspx?goods=A116-2007940519676',
	                                	'gaAction' : 'asus_zenfone_4_max_pink'
									},
									'au': {
										'linkURL' : 'https://shop.aeondigitalworld.com/shop/cart/cart.aspx?goods=A116-2007940524885',
	                                	'gaAction' : 'asus_zenfone_4_max_pink'
									}
								},
								'sim02' : {
									'docomo': {
										'linkURL' : 'https://shop.aeondigitalworld.com/shop/cart/cart.aspx?goods=A116-2007940519690',
	                                	'gaAction' : 'asus_zenfone_4_max_pink'
									}
								}
						}
				},
                'deviceOnly' : {
						'black' : {
	                            'linkURL' : 'https://shop.aeondigitalworld.com/shop/cart/cart.aspx?goods=A116-0889349871102',
	                            'gaAction' : 'asus_zenfone_4_max_black'
						},
						'gold' : {
	                            'linkURL' : 'https://shop.aeondigitalworld.com/shop/cart/cart.aspx?goods=A116-0889349871119',
	                            'gaAction' : 'asus_zenfone_4_max_gold'
						},
						'pink' : {
	                            'linkURL' : 'https://shop.aeondigitalworld.com/shop/cart/cart.aspx?goods=A116-0889349871126',
	                            'gaAction' : 'asus_zenfone_4_max_pink'
						}
				}
		},
		'aquos_sense_lite_sh_m05': { // aquos_sense_lite_sh_m05
                'price' : 35424,
                'voice' : {
						'white' : {
								'docomo': {
                                	'linkURL' : 'https://shop.aeondigitalworld.com/shop/cart/cart.aspx?goods=A116-2007940514404',
                                	'gaAction' : 'aquos_sense_lite_sh_m05_white'
								},
								'au': {
									'linkURL' : 'https://shop.aeondigitalworld.com/shop/cart/cart.aspx?goods=A116-2007940524694',
                                	'gaAction' : 'aquos_sense_lite_sh_m05_white'
								}
						},
						'black' : {
								'docomo': {
                                	'linkURL' : 'https://shop.aeondigitalworld.com/shop/cart/cart.aspx?goods=A116-2007940514459',
                                	'gaAction' : 'aquos_sense_lite_sh_m05_black'
								},
								'au': {
									'linkURL' : 'https://shop.aeondigitalworld.com/shop/cart/cart.aspx?goods=A116-2007940524717',
                                	'gaAction' : 'aquos_sense_lite_sh_m05_black'
								}
						},
						'gold' : {
								'docomo': {
                                	'linkURL' : 'https://shop.aeondigitalworld.com/shop/cart/cart.aspx?goods=A116-2007940519454',
                                	'gaAction' : 'aquos_sense_lite_sh_m05_gold'
								},
								'au': {
									'linkURL' : 'https://shop.aeondigitalworld.com/shop/cart/cart.aspx?goods=A116-2007940524731',
                                	'gaAction' : 'aquos_sense_lite_sh_m05_gold'
								}
						},
						'pink' : {
								'docomo': {
                                	'linkURL' : 'https://shop.aeondigitalworld.com/shop/cart/cart.aspx?goods=A116-2007940519508',
                                	'gaAction' : 'aquos_sense_lite_sh_m05_pink'
								},
								'au': {
									'linkURL' : 'https://shop.aeondigitalworld.com/shop/cart/cart.aspx?goods=A116-2007940524755',
                                	'gaAction' : 'aquos_sense_lite_sh_m05_pink'
								}
						}
				},
                'data' : {
						'white' : {
								'sim01' : {
									'docomo': {
	                                	'linkURL' : 'https://shop.aeondigitalworld.com/shop/cart/cart.aspx?goods=A116-2007940514411',
	                                	'gaAction' : 'aquos_sense_lite_sh_m05_white'
									}
								},
								'sim02' : {
									'docomo': {
										'linkURL' : 'https://shop.aeondigitalworld.com/shop/cart/cart.aspx?goods=A116-2007940514435',
	                                	'gaAction' : 'aquos_sense_lite_sh_m05_white'
									}
								}
						},
						'black' : {
								'sim01' : {
									'docomo': {
	                                	'linkURL' : 'https://shop.aeondigitalworld.com/shop/cart/cart.aspx?goods=A116-2007940514466',
	                                	'gaAction' : 'aquos_sense_lite_sh_m05_black'
									}
								},
								'sim02' : {
									'docomo': {
										'linkURL' : 'https://shop.aeondigitalworld.com/shop/cart/cart.aspx?goods=A116-2007940519430',
	                                	'gaAction' : 'aquos_sense_lite_sh_m05_black'
									}
								}
						},
						'gold' : {
								'sim01' : {
									'docomo': {
	                                	'linkURL' : 'https://shop.aeondigitalworld.com/shop/cart/cart.aspx?goods=A116-2007940519461',
	                                	'gaAction' : 'aquos_sense_lite_sh_m05_gold'
									}
								},
								'sim02' : {
									'docomo': {
										'linkURL' : 'https://shop.aeondigitalworld.com/shop/cart/cart.aspx?goods=A116-2007940519485',
	                                	'gaAction' : 'aquos_sense_lite_sh_m05_gold'
									}
								}
						},
						'pink' : {
								'sim01' : {
									'docomo': {
	                                	'linkURL' : 'https://shop.aeondigitalworld.com/shop/cart/cart.aspx?goods=A116-2007940519515',
	                                	'gaAction' : 'aquos_sense_lite_sh_m05_pink'
									}
								},
								'sim02' : {
									'docomo': {
										'linkURL' : 'https://shop.aeondigitalworld.com/shop/cart/cart.aspx?goods=A116-2007940519539',
	                                	'gaAction' : 'aquos_sense_lite_sh_m05_pink'
									}
								}
						}
				},									
                'sms' : {
                        'white' : {
								'sim01' : {
									'docomo': {
	                                	'linkURL' : 'https://shop.aeondigitalworld.com/shop/cart/cart.aspx?goods=A116-2007940514428',
	                                	'gaAction' : 'aquos_sense_lite_sh_m05_white'
									},
									'au': {
										'linkURL' : 'https://shop.aeondigitalworld.com/shop/cart/cart.aspx?goods=A116-2007940524700',
	                                	'gaAction' : 'aquos_sense_lite_sh_m05_white'
									}
								},
								'sim02' : {
									'docomo': {
										'linkURL' : 'https://shop.aeondigitalworld.com/shop/cart/cart.aspx?goods=A116-2007940514442',
	                                	'gaAction' : 'aquos_sense_lite_sh_m05_white'
									}
								}
						},
						'black' : {
								'sim01' : {
									'docomo': {
	                                	'linkURL' : 'https://shop.aeondigitalworld.com/shop/cart/cart.aspx?goods=A116-2007940514473',
	                                	'gaAction' : 'aquos_sense_lite_sh_m05_black'
									},
									'au': {
										'linkURL' : 'https://shop.aeondigitalworld.com/shop/cart/cart.aspx?goods=A116-2007940524724',
	                                	'gaAction' : 'aquos_sense_lite_sh_m05_black'
									}
								},
								'sim02' : {
									'docomo': {
										'linkURL' : 'https://shop.aeondigitalworld.com/shop/cart/cart.aspx?goods=A116-2007940519447',
	                                	'gaAction' : 'aquos_sense_lite_sh_m05_black'
									}
								}
						},
						'gold' : {
								'sim01' : {
									'docomo': {
	                                	'linkURL' : 'https://shop.aeondigitalworld.com/shop/cart/cart.aspx?goods=A116-2007940519478',
	                                	'gaAction' : 'aquos_sense_lite_sh_m05_gold'
									},
									'au': {
										'linkURL' : 'https://shop.aeondigitalworld.com/shop/cart/cart.aspx?goods=A116-2007940524748',
	                                	'gaAction' : 'aquos_sense_lite_sh_m05_gold'
									}
								},
								'sim02' : {
									'docomo': {
										'linkURL' : 'https://shop.aeondigitalworld.com/shop/cart/cart.aspx?goods=A116-2007940519492',
	                                	'gaAction' : 'aquos_sense_lite_sh_m05_gold'
									}
								}
						},
						'pink' : {
								'sim01' : {
									'docomo': {
	                                	'linkURL' : 'https://shop.aeondigitalworld.com/shop/cart/cart.aspx?goods=A116-2007940519522',
	                                	'gaAction' : 'aquos_sense_lite_sh_m05_pink'
									},
									'au': {
										'linkURL' : 'https://shop.aeondigitalworld.com/shop/cart/cart.aspx?goods=A116-2007940524762',
	                                	'gaAction' : 'aquos_sense_lite_sh_m05_pink'
									}
								},
								'sim02' : {
									'docomo': {
										'linkURL' : 'https://shop.aeondigitalworld.com/shop/cart/cart.aspx?goods=A116-2007940519546',
	                                	'gaAction' : 'aquos_sense_lite_sh_m05_pink'
									}
								}
						}
				},
                'deviceOnly' : {
                        'white' : {
	                             'linkURL' : 'https://shop.aeondigitalworld.com/shop/cart/cart.aspx?goods=A116-4974019949147',
	                             'gaAction' : 'aquos_sense_lite_sh_m05_white'
						},
						'black' : {
	                            'linkURL' : 'https://shop.aeondigitalworld.com/shop/cart/cart.aspx?goods=A116-4974019949154',
	                            'gaAction' : 'aquos_sense_lite_sh_m05_black'
						},
						'gold' : {
	                            'linkURL' : 'https://shop.aeondigitalworld.com/shop/cart/cart.aspx?goods=A116-4974019949161',
	                            'gaAction' : 'aquos_sense_lite_sh_m05_gold'
						},
						'pink' : {
	                            'linkURL' : 'https://shop.aeondigitalworld.com/shop/cart/cart.aspx?goods=A116-4974019941912',
	                            'gaAction' : 'aquos_sense_lite_sh_m05_pink'
						}
				}
		},
		'honor9': { // honor9
                'price' : 58104,
                'voice' : {
						'blue' : {
								'docomo': {
                                	'linkURL' : 'https://shop.aeondigitalworld.com/shop/cart/cart.aspx?goods=A116-2007940514060',
                                	'gaAction' : 'honor_9_blue'
								}
						},
						'gray' : {
								'docomo': {
                                	'linkURL' : 'https://shop.aeondigitalworld.com/shop/cart/cart.aspx?goods=A116-2007940514114',
                                	'gaAction' : 'honor_9_gray'
								}
						}
				},
                'data' : {
						'blue' : {
								'sim01' : {
									'docomo': {
	                                	'linkURL' : 'https://shop.aeondigitalworld.com/shop/cart/cart.aspx?goods=A116-2007940514077',
	                                	'gaAction' : 'honor_9_blue'
									}
								},
								'sim02' : {
									'docomo': {
										'linkURL' : 'https://shop.aeondigitalworld.com/shop/cart/cart.aspx?goods=A116-2007940514091',
	                                	'gaAction' : 'honor_9_blue'
									}
								}
						},
						'gray' : {
								'sim01' : {
									'docomo': {
										'linkURL' : 'https://shop.aeondigitalworld.com/shop/cart/cart.aspx?goods=A116-2007940514121',
	                                	'gaAction' : 'honor_9_gray'
									}
								},
								'sim02' : {
									'docomo': {
										'linkURL' : 'https://shop.aeondigitalworld.com/shop/cart/cart.aspx?goods=A116-2007940514145',
	                                	'gaAction' : 'honor_9_gray'
									}
								}
						}
				},									
                'sms' : {
                        'blue' : {
								'sim01' : {
									'docomo': {
	                                	'linkURL' : 'https://shop.aeondigitalworld.com/shop/cart/cart.aspx?goods=A116-2007940514084',
	                                	'gaAction' : 'honor_9_blue'
									}
								},
								'sim02' : {
									'docomo': {
										'linkURL' : 'https://shop.aeondigitalworld.com/shop/cart/cart.aspx?goods=A116-2007940514107',
	                                	'gaAction' : 'honor_9_blue'
									}
								}
						},
						'gray' : {
								'sim01' : {
									'docomo': {
	                                	'linkURL' : 'https://shop.aeondigitalworld.com/shop/cart/cart.aspx?goods=A116-2007940514138',
	                                	'gaAction' : 'honor_9_gray'
									}
								},
								'sim02' : {
									'docomo': {
										'linkURL' : 'https://shop.aeondigitalworld.com/shop/cart/cart.aspx?goods=A116-2007940514152',
	                                	'gaAction' : 'honor_9_gray'
									}
								}
						}
				},
                'deviceOnly' : {
                        'blue' : {
	                             'linkURL' : 'https://shop.aeondigitalworld.com/shop/cart/cart.aspx?goods=A116-6901443195800',
	                             'gaAction' : 'honor_9_blue'
						},
						'gray' : {
	                            'linkURL' : 'https://shop.aeondigitalworld.com/shop/cart/cart.aspx?goods=A116-6901443195794',
	                            'gaAction' : 'honor_9_gray'
						}
				}
		},
		'arrows_m04': { // arrows_m04
                'price' : 40824,
                'voice' : {
						'black' : {
								'docomo': {
                                	'linkURL' : 'https://shop.aeondigitalworld.com/shop/cart/cart.aspx?goods=A116-2007940512813',
                                	'gaAction' : 'arrows_m04_black'
								},
								'au': {
									'linkURL' : 'https://shop.aeondigitalworld.com/shop/cart/cart.aspx?goods=A116-2007940524571',
                                	'gaAction' : 'arrows_m04_black'
								}								
						},
						'white' : {
								'docomo': {
                                	'linkURL' : 'https://shop.aeondigitalworld.com/shop/cart/cart.aspx?goods=A116-2007940513964',
                                	'gaAction' : 'arrows_m04_white'
								},
								'au': {
									'linkURL' : 'https://shop.aeondigitalworld.com/shop/cart/cart.aspx?goods=A116-2007940524595',
                                	'gaAction' : 'arrows_m04_white'
								}
						}
				},
                'data' : {
						'black' : {
								'sim01' : {
									'docomo': {
	                                	'linkURL' : 'https://shop.aeondigitalworld.com/shop/cart/cart.aspx?goods=A116-2007940512820',
	                                	'gaAction' : 'arrows_m04_black'
									}
								},
								'sim02' : {
									'docomo': {
										'linkURL' : 'https://shop.aeondigitalworld.com/shop/cart/cart.aspx?goods=A116-2007940513940',
	                                	'gaAction' : 'arrows_m04_black'
									}
								}
						},
						'white' : {
								'sim01' : {
									'docomo': {
	                                	'linkURL' : 'https://shop.aeondigitalworld.com/shop/cart/cart.aspx?goods=A116-2007940513971',
	                                	'gaAction' : 'arrows_m04_white'
									}
								},
								'sim02' : {
									'docomo': {
										'linkURL' : 'https://shop.aeondigitalworld.com/shop/cart/cart.aspx?goods=A116-2007940513995',
	                                	'gaAction' : 'arrows_m04_white'
									}
								}
						}
				},									
                'sms' : {
                        'black' : {
								'sim01' : {
									'docomo': {
	                                	'linkURL' : 'https://shop.aeondigitalworld.com/shop/cart/cart.aspx?goods=A116-2007940513933',
	                                	'gaAction' : 'arrows_m04_black'
									},
									'au': {
										'linkURL' : 'https://shop.aeondigitalworld.com/shop/cart/cart.aspx?goods=A116-2007940524588',
	                                	'gaAction' : 'arrows_m04_black'
									}
								},
								'sim02' : {
									'docomo': {
										'linkURL' : 'https://shop.aeondigitalworld.com/shop/cart/cart.aspx?goods=A116-2007940513957',
	                                	'gaAction' : 'arrows_m04_black'
									}
								}
						},
						'white' : {
								'sim01' : {
									'docomo': {
	                                	'linkURL' : 'https://shop.aeondigitalworld.com/shop/cart/cart.aspx?goods=A116-2007940513988',
	                                	'gaAction' : 'arrows_m04_white'
									},
									'au': {
	                                	'linkURL' : 'https://shop.aeondigitalworld.com/shop/cart/cart.aspx?goods=A116-2007940524601',
	                                	'gaAction' : 'arrows_m04_white'
									}
								},
								'sim02' : {
									'docomo': {
										'linkURL' : 'https://shop.aeondigitalworld.com/shop/cart/cart.aspx?goods=A116-2007940514008',
	                                	'gaAction' : 'arrows_m04_white'
									}
								}
						}
				},
                'deviceOnly' : {
                        'black' : {
	                             'linkURL' : 'https://shop.aeondigitalworld.com/shop/cart/cart.aspx?goods=A116-4549210293155',
	                             'gaAction' : 'arrows_m04_black'
						},
						'white' : {
	                            'linkURL' : 'https://shop.aeondigitalworld.com/shop/cart/cart.aspx?goods=A116-4549210293162',
	                            'gaAction' : 'arrows_m04_white'
						}
				}
		},
		'huawei_p10_lite': { // huawei_p10_lite
                'price' : 32378,
                'voice' : {
						'white' : {
								'docomo': {
                                	'linkURL' : 'https://shop.aeondigitalworld.com/shop/cart/cart.aspx?goods=A116-2007940512417',
                                	'gaAction' : 'huawei_p10_lite_white'
								},
								'au': {
									'linkURL' : 'https://shop.aeondigitalworld.com/shop/cart/cart.aspx?goods=A116-2007940524656',
                                	'gaAction' : 'huawei_p10_lite_white'
								}
						},
						'black' : {
								'docomo': {
                                	'linkURL' : 'https://shop.aeondigitalworld.com/shop/cart/cart.aspx?goods=A116-2007940512318',
                                	'gaAction' : 'huawei_p10_lite_black'
								},
								'au': {
									'linkURL' : 'https://shop.aeondigitalworld.com/shop/cart/cart.aspx?goods=A116-2007940524618',
                                	'gaAction' : 'huawei_p10_lite_black'
								}
						},
                        'gold' : {
								'docomo': {
                                	'linkURL' : 'https://shop.aeondigitalworld.com/shop/cart/cart.aspx?goods=A116-2007940512363',
                                	'gaAction' : 'huawei_p10_lite_gold'
								},
								'au': {
									'linkURL' : 'https://shop.aeondigitalworld.com/shop/cart/cart.aspx?goods=A116-2007940524632',
                                	'gaAction' : 'huawei_p10_lite_gold'
								}
						},
                        'blue' : {
								'docomo': {
                                	'linkURL' : 'https://shop.aeondigitalworld.com/shop/cart/cart.aspx?goods=A116-2007940512462',
                                	'gaAction' : 'huawei_p10_lite_blue'
								},
								'au': {
									'linkURL' : 'https://shop.aeondigitalworld.com/shop/cart/cart.aspx?goods=A116-2007940524670',
                                	'gaAction' : 'huawei_p10_lite_blue'
								}
						}
				},
                'data' : {
						'white' : {
								'sim01' : {
									'docomo': {
	                                	'linkURL' : 'https://shop.aeondigitalworld.com/shop/cart/cart.aspx?goods=A116-2007940512424',
	                                	'gaAction' : 'huawei_p10_lite_white'
									}
								},
								'sim02' : {
									'docomo': {
										'linkURL' : 'https://shop.aeondigitalworld.com/shop/cart/cart.aspx?goods=A116-2007940512448',
	                                	'gaAction' : 'huawei_p10_lite_white'
									}
								}
						},
						'black' : {
								'sim01' : {
									'docomo': {
	                                	'linkURL' : 'https://shop.aeondigitalworld.com/shop/cart/cart.aspx?goods=A116-2007940512325',
	                                	'gaAction' : 'huawei_p10_lite_black'
									}
								},
								'sim02' : {
									'docomo': {
										'linkURL' : 'https://shop.aeondigitalworld.com/shop/cart/cart.aspx?goods=A116-2007940512349',
	                                	'gaAction' : 'huawei_p10_lite_black'
									}
								}
						},
                        'gold' : {
								'sim01' : {
									'docomo': {
	                                	'linkURL' : 'https://shop.aeondigitalworld.com/shop/cart/cart.aspx?goods=A116-2007940512370',
	                                	'gaAction' : 'huawei_p10_lite_gold'
									}
								},
								'sim02' : {
									'docomo': {
										'linkURL' : 'https://shop.aeondigitalworld.com/shop/cart/cart.aspx?goods=A116-2007940512394',
	                                	'gaAction' : 'huawei_p10_lite_gold'
									}
								}
						},
                        'blue' : {
								'sim01' : {
									'docomo': {
	                                	'linkURL' : 'https://shop.aeondigitalworld.com/shop/cart/cart.aspx?goods=A116-2007940512479',
	                                	'gaAction' : 'huawei_p10_lite_blue'
									}
								},
								'sim02' : {
									'docomo': {
										'linkURL' : 'https://shop.aeondigitalworld.com/shop/cart/cart.aspx?goods=A116-2007940512493',
	                                	'gaAction' : 'huawei_p10_lite_blue'
									}
								}
						}
				},									
                'sms' : {
                        'white' : {
								'sim01' : {
									'docomo': {
	                                	'linkURL' : 'https://shop.aeondigitalworld.com/shop/cart/cart.aspx?goods=A116-2007940512431',
	                                	'gaAction' : 'huawei_p10_lite_white'
									},
									'au': {
										'linkURL' : 'https://shop.aeondigitalworld.com/shop/cart/cart.aspx?goods=A116-2007940524663',
	                                	'gaAction' : 'huawei_p10_lite_white'
									}
								},
								'sim02' : {
									'docomo': {
										'linkURL' : 'https://shop.aeondigitalworld.com/shop/cart/cart.aspx?goods=A116-2007940512455',
	                                	'gaAction' : 'huawei_p10_lite_white'
									}
								}
						},
						'black' : {
								'sim01' : {
									'docomo': {
	                                	'linkURL' : 'https://shop.aeondigitalworld.com/shop/cart/cart.aspx?goods=A116-2007940512332',
	                                	'gaAction' : 'huawei_p10_lite_black'
									},
									'au': {
										'linkURL' : 'https://shop.aeondigitalworld.com/shop/cart/cart.aspx?goods=A116-2007940524625',
	                                	'gaAction' : 'huawei_p10_lite_black'
									}
								},
								'sim02' : {
									'docomo': {
										'linkURL' : 'https://shop.aeondigitalworld.com/shop/cart/cart.aspx?goods=A116-2007940512356',
	                                	'gaAction' : 'huawei_p10_lite_black'
									}
								}
						},
                        'gold' : {
								'sim01' : {
									'docomo': {
	                                	'linkURL' : 'https://shop.aeondigitalworld.com/shop/cart/cart.aspx?goods=A116-2007940512387',
	                                	'gaAction' : 'huawei_p10_lite_gold'
									},
									'au': {
										'linkURL' : 'https://shop.aeondigitalworld.com/shop/cart/cart.aspx?goods=A116-2007940524649',
	                                	'gaAction' : 'huawei_p10_lite_gold'
									}
								},
								'sim02' : {
									'docomo': {
										'linkURL' : 'https://shop.aeondigitalworld.com/shop/cart/cart.aspx?goods=A116-2007940512400',
	                                	'gaAction' : 'huawei_p10_lite_gold'
									}
								}
						},
                        'blue' : {
								'sim01' : {
									'docomo': {
										'linkURL' : 'https://shop.aeondigitalworld.com/shop/cart/cart.aspx?goods=A116-2007940512486',
	                                	'gaAction' : 'huawei_p10_lite_blue'
									},
									'au': {
										'linkURL' : 'https://shop.aeondigitalworld.com/shop/cart/cart.aspx?goods=A116-2007940524687',
	                                	'gaAction' : 'huawei_p10_lite_blue'
									}
								},
								'sim02' : {
									'docomo': {
										'linkURL' : 'https://shop.aeondigitalworld.com/shop/cart/cart.aspx?goods=A116-2007940512509',
	                                	'gaAction' : 'huawei_p10_lite_blue'
									}
								}
						}
				},
                'deviceOnly' : {
                        'white' : {
	                             'linkURL' : 'https://shop.aeondigitalworld.com/shop/cart/cart.aspx?goods=A116-6901443175291',
	                             'gaAction' : 'huawei_p10_lite_white'
						},
						'black' : {
	                            'linkURL' : 'https://shop.aeondigitalworld.com/shop/cart/cart.aspx?goods=A116-6901443175307',
	                            'gaAction' : 'huawei_p10_lite_black'
						},
                        'gold' : {
	                            'linkURL' : 'https://shop.aeondigitalworld.com/shop/cart/cart.aspx?goods=A116-6901443175314',
	                            'gaAction' : 'huawei_p10_lite_gold'
						},
                        'blue' : {
								'linkURL' : 'https://shop.aeondigitalworld.com/shop/cart/cart.aspx?goods=A116-6901443175321',
	                        	'gaAction' : 'huawei_p10_lite_blue'
						}
				}
		},
		'huawei_p10': { // huawei_p10
                'price' : 65664,
                'voice' : {
						'blue' : {
								'docomo': {
                                	'linkURL' : 'https://shop.aeondigitalworld.com/shop/cart/cart.aspx?goods=A116-2007940512516',
                                	'gaAction' : 'huawei_p10_blue'
								}
						},
						'gold' : {
								'docomo': {
                                	'linkURL' : 'https://shop.aeondigitalworld.com/shop/cart/cart.aspx?goods=A116-2007940512660',
                                	'gaAction' : 'huawei_p10_gold'
								}
						},
                        'silver' : {
								'docomo': {
                                	'linkURL' : 'https://shop.aeondigitalworld.com/shop/cart/cart.aspx?goods=A116-2007940512615',
                                	'gaAction' : 'huawei_p10_silver'
								}
						},
                        'black' : {
								'docomo': {
                                	'linkURL' : 'https://shop.aeondigitalworld.com/shop/cart/cart.aspx?goods=A116-2007940512561',
                                	'gaAction' : 'huawei_p10_black'
								}
						}
				},
                'data' : {
						'blue' : {
								'sim01' : {
									'docomo': {
	                                	'linkURL' : 'https://shop.aeondigitalworld.com/shop/cart/cart.aspx?goods=A116-2007940512523',
	                                	'gaAction' : 'huawei_p10_blue'
									}
								},
								'sim02' : {
									'docomo': {
										'linkURL' : 'https://shop.aeondigitalworld.com/shop/cart/cart.aspx?goods=A116-2007940512547',
	                                	'gaAction' : 'huawei_p10_blue'
									}
								}
						},
						'gold' : {
								'sim01' : {
									'docomo': {
	                                	'linkURL' : 'https://shop.aeondigitalworld.com/shop/cart/cart.aspx?goods=A116-2007940512677',
	                                	'gaAction' : 'huawei_p10_gold'
									}
								},
								'sim02' : {
									'docomo': {
										'linkURL' : 'https://shop.aeondigitalworld.com/shop/cart/cart.aspx?goods=A116-2007940512691',
	                                	'gaAction' : 'huawei_p10_gold'
									}
								}
						},
                        'silver' : {
								'sim01' : {
									'docomo': {
	                                	'linkURL' : 'https://shop.aeondigitalworld.com/shop/cart/cart.aspx?goods=A116-2007940512622',
	                                	'gaAction' : 'huawei_p10_silver'
									}
								},
								'sim02' : {
									'docomo': {
										'linkURL' : 'https://shop.aeondigitalworld.com/shop/cart/cart.aspx?goods=A116-2007940512646',
	                                	'gaAction' : 'huawei_p10_silver'
									}
								}
						},
                        'black' : {
								'sim01' : {
									'docomo': {
	                                	'linkURL' : 'https://shop.aeondigitalworld.com/shop/cart/cart.aspx?goods=A116-2007940512578',
	                                	'gaAction' : 'huawei_p10_black'
									}
								},
								'sim02' : {
									'docomo': {
										'linkURL' : 'https://shop.aeondigitalworld.com/shop/cart/cart.aspx?goods=A116-2007940512592',
	                                	'gaAction' : 'huawei_p10_black'
									}
								}
						}
				},									
                'sms' : {
                        'blue' : {
								'sim01' : {
									'docomo': {
										'linkURL' : 'https://shop.aeondigitalworld.com/shop/cart/cart.aspx?goods=A116-2007940512530',
	                                	'gaAction' : 'huawei_p10_blue'
									}
								},
								'sim02' : {
									'docomo': {
										'linkURL' : 'https://shop.aeondigitalworld.com/shop/cart/cart.aspx?goods=A116-2007940512554',
	                                	'gaAction' : 'huawei_p10_blue'
									}
								}
						},
						'gold' : {
								'sim01' : {
									'docomo': {
	                                	'linkURL' : 'https://shop.aeondigitalworld.com/shop/cart/cart.aspx?goods=A116-2007940512684',
	                                	'gaAction' : 'huawei_p10_gold'
									}
								},
								'sim02' : {
									'docomo': {
										'linkURL' : 'https://shop.aeondigitalworld.com/shop/cart/cart.aspx?goods=A116-2007940512707',
	                                	'gaAction' : 'huawei_p10_gold'
									}
								}
						},
                        'silver' : {
								'sim01' : {
									'docomo': {
	                                	'linkURL' : 'https://shop.aeondigitalworld.com/shop/cart/cart.aspx?goods=A116-2007940512639',
	                                	'gaAction' : 'huawei_p10_silver'
									}
								},
								'sim02' : {
									'docomo': {
										'linkURL' : 'https://shop.aeondigitalworld.com/shop/cart/cart.aspx?goods=A116-2007940512653',
	                                	'gaAction' : 'huawei_p10_silver'
									}
								}
						},
                        'black' : {
								'sim01' : {
									'docomo': {
	                                	'linkURL' : 'https://shop.aeondigitalworld.com/shop/cart/cart.aspx?goods=A116-2007940512585',
	                                	'gaAction' : 'huawei_p10_black'
									}
								},
								'sim02' : {
									'docomo': {
										'linkURL' : 'https://shop.aeondigitalworld.com/shop/cart/cart.aspx?goods=A116-2007940512608',
	                                	'gaAction' : 'huawei_p10_black'
									}
								}
						}
				},
                'deviceOnly' : {
                        'blue' : {
	                             'linkURL' : 'https://shop.aeondigitalworld.com/shop/cart/cart.aspx?goods=A116-6901443175376',
	                             'gaAction' : 'huawei_p10_blue'
						},
						'gold' : {
	                            'linkURL' : 'https://shop.aeondigitalworld.com/shop/cart/cart.aspx?goods=A116-6901443175352',
	                            'gaAction' : 'huawei_p10_gold'
						},
                        'silver' : {
	                            'linkURL' : 'https://shop.aeondigitalworld.com/shop/cart/cart.aspx?goods=A116-6901443175345',
	                            'gaAction' : 'huawei_p10_silver'
						},
                        'black' : {
								'linkURL' : 'https://shop.aeondigitalworld.com/shop/cart/cart.aspx?goods=A116-6901443175369',
	                        	'gaAction' : 'huawei_p10_black'
						}
				}
		},
		'huawei_p10_plus': { // huawei_p10_plus
                'price' : 73224,
                'voice' : {
						'green' : {
								'docomo': {
                                	'linkURL' : 'https://shop.aeondigitalworld.com/shop/cart/cart.aspx?goods=A116-2007940512769',
                                	'gaAction' : 'huawei_p10_plus_green'
								}
						},
						'gold' : {
								'docomo': {
                                	'linkURL' : 'https://shop.aeondigitalworld.com/shop/cart/cart.aspx?goods=A116-2007940512714',
                                	'gaAction' : 'huawei_p10_plus_gold'
								}
						}
				},
                'data' : {
						'green' : {
								'sim01' : {
									'docomo': {
	                                	'linkURL' : 'https://shop.aeondigitalworld.com/shop/cart/cart.aspx?goods=A116-2007940512776',
	                                	'gaAction' : 'huawei_p10_plus_green'
									}
								},
								'sim02' : {
									'docomo': {
										'linkURL' : 'https://shop.aeondigitalworld.com/shop/cart/cart.aspx?goods=A116-2007940512790',
	                                	'gaAction' : 'huawei_p10_plus_green'
									}
								}
						},
						'gold' : {
								'sim01' : {
									'docomo': {
	                                	'linkURL' : 'https://shop.aeondigitalworld.com/shop/cart/cart.aspx?goods=A116-2007940512721',
	                                	'gaAction' : 'huawei_p10_plus_gold'
									}
								},
								'sim02' : {
									'docomo': {
										'linkURL' : 'https://shop.aeondigitalworld.com/shop/cart/cart.aspx?goods=A116-2007940512745',
	                                	'gaAction' : 'huawei_p10_plus_gold'
									}
								}
						}
				},									
                'sms' : {
                        'green' : {
								'sim01' : {
									'docomo': {
	                                	'linkURL' : 'https://shop.aeondigitalworld.com/shop/cart/cart.aspx?goods=A116-2007940512783',
	                                	'gaAction' : 'huawei_p10_plus_green'
									}
								},
								'sim02' : {
									'docomo': {
										'linkURL' : 'https://shop.aeondigitalworld.com/shop/cart/cart.aspx?goods=A116-2007940512806',
	                                	'gaAction' : 'huawei_p10_plus_green'
									}
								}
						},
						'gold' : {
								'sim01' : {
									'docomo': {
	                                	'linkURL' : 'https://shop.aeondigitalworld.com/shop/cart/cart.aspx?goods=A116-2007940512738',
	                                	'gaAction' : 'huawei_p10_plus_gold'
									}
								},
								'sim02' : {
									'docomo': {
										'linkURL' : 'https://shop.aeondigitalworld.com/shop/cart/cart.aspx?goods=A116-2007940512752',
	                                	'gaAction' : 'huawei_p10_plus_gold'
									}
								}
						}
				},
                'deviceOnly' : {
                        'green' : {
	                             'linkURL' : 'https://shop.aeondigitalworld.com/shop/cart/cart.aspx?goods=A116-6901443182169',
	                             'gaAction' : 'huawei_p10_plus_green'
						},
						'gold' : {
	                            'linkURL' : 'https://shop.aeondigitalworld.com/shop/cart/cart.aspx?goods=A116-6901443182152',
	                            'gaAction' : 'huawei_p10_plus_gold'
						}
				}
		},
        'arrows_m02': { // Arrows M02
                'price' : 21384,
                'voice' : {
                        'black' : {
								'docomo': {
                                	'linkURL' : 'https://shop.aeondigitalworld.com/shop/cart/cart.aspx?goods=A116-2007940471288',
                                	'gaAction' : 'arrowsM02_black'
								},
								'au': {
									'linkURL' : 'https://shop.aeondigitalworld.com/shop/cart/cart.aspx?goods=A',
                                	'gaAction' : 'arrowsM02_black'
								}
						},
                        'white' : {
								'docomo': {
                                	'linkURL' : 'https://shop.aeondigitalworld.com/shop/cart/cart.aspx?goods=A116-2007940471295',
                                	'gaAction' : 'arrowsM02_white'
								},
								'au': {
									'linkURL' : 'https://shop.aeondigitalworld.com/shop/cart/cart.aspx?goods=A',
                                	'gaAction' : 'arrowsM02_white'
								}
						}
				},
                'data' : {
                        'black' : {
								'sim01' : {
									'docomo': {
	                                	'linkURL' : 'https://shop.aeondigitalworld.com/shop/cart/cart.aspx?goods=A116-2007940471844',
	                                	'gaAction' : 'arrowsM02_black'
									}
								},
								'sim02' : {
									'docomo': {
										'linkURL' : 'https://shop.aeondigitalworld.com/shop/cart/cart.aspx?goods=A116-2007940491095',
	                                	'gaAction' : 'arrowsM02_black'
									}
								}
						},
                        'white' : {
								'sim01' : {
									'docomo': {
	                                	'linkURL' : 'https://shop.aeondigitalworld.com/shop/cart/cart.aspx?goods=A116-2007940471851',
	                                	'gaAction' : 'arrowsM02_white'
									}
								},
								'sim02' : {
									'docomo': {
										'linkURL' : 'https://shop.aeondigitalworld.com/shop/cart/cart.aspx?goods=A116-2007940491101',
	                                	'gaAction' : 'arrowsM02_white'
									}
								}
						}
				},									
                'sms' : {
                        'black' : {
								'sim01' : {
									'docomo': {
	                                	'linkURL' : 'https://shop.aeondigitalworld.com/shop/cart/cart.aspx?goods=A116-2007940471943',
	                                	'gaAction' : 'arrowsM02_black'
									},
									'au': {
										'linkURL' : 'https://shop.aeondigitalworld.com/shop/cart/cart.aspx?goods=A',
	                                	'gaAction' : 'arrowsM02_black'
									}
								},
								'sim02' : {
									'docomo': {
										'linkURL' : 'https://shop.aeondigitalworld.com/shop/cart/cart.aspx?goods=A116-2007940491163',
	                                	'gaAction' : 'arrowsM02_black'
									}
								}
						},
                        'white' : {
								'sim01' : {
									'docomo': {
										'linkURL' : 'https://shop.aeondigitalworld.com/shop/cart/cart.aspx?goods=A116-2007940471950',
	                                	'gaAction' : 'arrowsM02_white'
									},
									'au': {
										'linkURL' : 'https://shop.aeondigitalworld.com/shop/cart/cart.aspx?goods=A',
	                                	'gaAction' : 'arrowsM02_white'
									}
								},
								'sim02' : {
									'docomo': {
								    	'linkURL' : 'https://shop.aeondigitalworld.com/shop/cart/cart.aspx?goods=A116-2007940491170',
	                                	'gaAction' : 'arrowsM02_white'
									}
								}
						}
				},
                'deviceOnly' : {
                        'black' : {
                                'linkURL' : 'https://shop.aeondigitalworld.com/shop/cart/cart.aspx?goods=A116-4549210131365',
                                'gaAction' : 'arrowsM02_black'
						},
                        'white' : {
                                'linkURL' : 'https://shop.aeondigitalworld.com/shop/cart/cart.aspx?goods=A116-4549210131372',
                                'gaAction' : 'arrowsM02_white'
						}
				}
		},
        'aquos_sh_m02': { // AQUOS SH-M02
                'price' : 21384,
                'voice' : {
                        'white' : {
								'docomo': {
                                	'linkURL' : 'https://shop.aeondigitalworld.com/shop/cart/cart.aspx?goods=A116-2007940471271',
                                	'gaAction' : 'AQUOS_SH_M02_white'
								}
						}
				},
                'data' : {
                        'white' : {
								'sim01' : {
									'docomo': {
	                                	'linkURL' : 'https://shop.aeondigitalworld.com/shop/cart/cart.aspx?goods=A116-2007940471837',
	                                	'gaAction' : 'AQUOS_SH_M02_white'
									}
								},
								'sim02' : {
									'docomo': {
										'linkURL' : 'https://shop.aeondigitalworld.com/shop/cart/cart.aspx?goods=A116-2007940491088',
	                                	'gaAction' : 'AQUOS_SH_M02_white'
									}
								}
						}
				},
                'sms' : {
                        'white' : {
								'sim01' : {
									'docomo': {
	                                	'linkURL' : 'https://shop.aeondigitalworld.com/shop/cart/cart.aspx?goods=A116-2007940471936',
	                                	'gaAction' : 'AQUOS_SH_M02_white'
									}
								},
								'sim02': {
									'docomo': {
										'linkURL' : 'https://shop.aeondigitalworld.com/shop/cart/cart.aspx?goods=A116-2007940491156',
	                                	'gaAction' : 'AQUOS_SH_M02_white'
									}
								}
						}
				},
                'deviceOnly' : {
                        'white' : {
                                'linkURL' : 'https://shop.aeondigitalworld.com/shop/cart/cart.aspx?goods=A116-4974019880839',
                                'gaAction' : 'AQUOS_SH_M02_white'
						}
				}
		},
        'xperia_j1_compact': { // Xperia J1 Compact
                'price' : 42984,
                 'voice' : {
                        'white' : {
								'docomo': {
                                	'linkURL' : 'https://shop.aeondigitalworld.com/shop/cart/cart.aspx?goods=A116-2007940471301',
                                	'gaAction' : 'Xperia_J1_Compact_white'
								}
						}
				},
                 'data' : {
                        'white' : {
								'sim01' : {
									'docomo': {
	                                	'linkURL' : 'https://shop.aeondigitalworld.com/shop/cart/cart.aspx?goods=A116-2007940471868',
	                                	'gaAction' : 'Xperia_J1_Compact_white'
									}
								},
								'sim02' : {
									'docomo': {
										'linkURL' : 'https://shop.aeondigitalworld.com/shop/cart/cart.aspx?goods=A116-2007940491118',
	                                	'gaAction' : 'Xperia_J1_Compact_white'
									}
								}
						}
				},
                'sms' : {
                        'white' : {
								'sim01' : {
									'docomo': {
	                                	'linkURL' : 'https://shop.aeondigitalworld.com/shop/cart/cart.aspx?goods=A116-2007940471967',
	                                	'gaAction' : 'Xperia_J1_Compact_white'
									}
								},
								'sim02' : {
									'docomo': {
										'linkURL' : 'https://shop.aeondigitalworld.com/shop/cart/cart.aspx?goods=A116-2007940491187',
	                                	'gaAction' : 'Xperia_J1_Compact_white'
									}
								}
						}
				},
                 'deviceOnly' : {
                        'white' : {
                                'linkURL' : 'https://shop.aeondigitalworld.com/shop/cart/cart.aspx?goods=A116-4582345077511',
                                'gaAction' : 'Xperia_J1_Compact_white'
						}
				}
		},
        'kyocera_s301': { // KYOCERA S301
                'price' : 10800,
                'voice' : {
                        'white' : {
								'docomo': {
                                	'linkURL' : 'https://shop.aeondigitalworld.com/shop/cart/cart.aspx?goods=A116-2007940471332',
                                	'gaAction' : 'KYOCERA_S301_white'
								}
						}
				},
                'data' : {
                        'white' : {
								'sim01' : {
									'docomo': {
	                                	'linkURL' : 'https://shop.aeondigitalworld.com/shop/cart/cart.aspx?goods=A116-2007940471899',
	                                	'gaAction' : 'KYOCERA_S301_white'
									}
								},
								'sim02' : {
									'docomo': {
										'linkURL' : 'https://shop.aeondigitalworld.com/shop/cart/cart.aspx?goods=A116-2007940491149',
	                                	'gaAction' : 'KYOCERA_S301_white'
									}
								}
						}
				},
                'sms' : {
                        'white' : {
								'sim01' : {
									'docomo': {
	                                	'linkURL' : 'https://shop.aeondigitalworld.com/shop/cart/cart.aspx?goods=A116-2007940471998',
	                                	'gaAction' : 'KYOCERA_S301_white'
									}
								},
								'sim02' : {
									'docomo': {
										'linkURL' : 'https://shop.aeondigitalworld.com/shop/cart/cart.aspx?goods=A116-2007940491217',
	                                	'gaAction' : 'KYOCERA_S301_white'
									}
								}
						}
				},
                'deviceOnly' : {
                        'white' : {
                                'linkURL' : 'https://shop.aeondigitalworld.com/shop/cart/cart.aspx?goods=A116-4960664737130',
                                'gaAction' : 'KYOCERA_S301_white'
						}
				}
		},
        'zte_blade_e01': { // ZTE BLADE E01
                'price' : 13824,/*17064*/
                'voice' : {
                        'black' : {
								'docomo': {
                                	'linkURL' : 'https://shop.aeondigitalworld.com/shop/cart/cart.aspx?goods=A116-2007940483243',
                                	'gaAction' : 'ZTE_BLADE_E01_black'
								}
						},
                        'white' : {
								'docomo': {
                                	'linkURL' : 'https://shop.aeondigitalworld.com/shop/cart/cart.aspx?goods=A116-2007940483274',
                                	'gaAction' : 'ZTE_BLADE_E01_white'
								}
						}
				},
                'data' : {
                        'black' : {
								'sim01' : {
									'docomo': {
	                                	'linkURL' : 'https://shop.aeondigitalworld.com/shop/cart/cart.aspx?goods=A116-2007940483250',
	                                	'gaAction' : 'ZTE_BLADE_E01_black'
									}
								},
								'sim02' : {
									'docomo': {
										'linkURL' : 'https://shop.aeondigitalworld.com/shop/cart/cart.aspx?goods=A116-2007940491446',
	                                	'gaAction' : 'ZTE_BLADE_E01_black'
									}
								}
						},
                        'white' : {
								'sim01' : {
									'docomo': {
	                                	'linkURL' : 'https://shop.aeondigitalworld.com/shop/cart/cart.aspx?goods=A116-2007940483281',
	                                	'gaAction' : 'ZTE_BLADE_E01_white'
									}
								},
								'sim02' : {
									'docomo': {
										'linkURL' : 'https://shop.aeondigitalworld.com/shop/cart/cart.aspx?goods=A116-2007940491460',
	                                	'gaAction' : 'ZTE_BLADE_E01_white'
									}
								}
						}
				},
                'sms' : {
                        'black' : {
								'sim01' : {
									'docomo': {
	                                	'linkURL' : 'https://shop.aeondigitalworld.com/shop/cart/cart.aspx?goods=A116-2007940483267',
	                                	'gaAction' : 'ZTE_BLADE_E01_black'
									}
								},
								'sim02' : {
									'docomo': {
										'linkURL' : 'https://shop.aeondigitalworld.com/shop/cart/cart.aspx?goods=A116-2007940491453',
	                                	'gaAction' : 'ZTE_BLADE_E01_black'
									}
								}
						},
                        'white' : {
								'sim01' : {
									'docomo': {
	                                	'linkURL' : 'https://shop.aeondigitalworld.com/shop/cart/cart.aspx?goods=A116-2007940483298',
	                                	'gaAction' : 'ZTE_BLADE_E01_white'
									}
								},
								'sim02' : {
									'docomo': {
										'linkURL' : 'https://shop.aeondigitalworld.com/shop/cart/cart.aspx?goods=A116-2007940491477',
	                                	'gaAction' : 'ZTE_BLADE_E01_white'
									}
								}
						}
				},
                'deviceOnly' : {
                        'black' : {
                                'linkURL' : 'https://shop.aeondigitalworld.com/shop/cart/cart.aspx?goods=A116-4571491596656',
                                'gaAction' : 'ZTE_BLADE_E01_black'
						},
                        'white' : {
                                'linkURL' : 'https://shop.aeondigitalworld.com/shop/cart/cart.aspx?goods=A116-4571491596663',
                                'gaAction' : 'ZTE_BLADE_E01_white'
						}
				}
		},
        'arrows_m03': { // Arrows M03
                'price' : 32184,
                'voice' : {
                        'pink' : {
								'docomo' : {
                                	'linkURL' : 'https://shop.aeondigitalworld.com/shop/cart/cart.aspx?goods=A116-2007940485056',
                                	'gaAction' : 'arrowsM03_pink'
								},
								'au' : {
									'linkURL' : 'https://shop.aeondigitalworld.com/shop/cart/cart.aspx?goods=A116-2007940524519',
                                	'gaAction' : 'arrowsM03_pink'
								}
						},
                        'black' : {
								'docomo' : {
									'linkURL' : 'https://shop.aeondigitalworld.com/shop/cart/cart.aspx?goods=A116-2007940485087',
                                	'gaAction' : 'arrowsM03_black'
								},
								'au' : {
									'linkURL' : 'https://shop.aeondigitalworld.com/shop/cart/cart.aspx?goods=A116-2007940524533',
                                	'gaAction' : 'arrowsM03_black'
								}
						},
                        'white' : {
								'docomo' : {
									'linkURL' : 'https://shop.aeondigitalworld.com/shop/cart/cart.aspx?goods=A116-2007940485117',
                                	'gaAction' : 'arrowsM03_white'
								},
								'au' : {
									'linkURL' : 'https://shop.aeondigitalworld.com/shop/cart/cart.aspx?goods=A116-2007940524557',
                                	'gaAction' : 'arrowsM03_white'
								}
						}
				},
                'data' : {
                        'pink' : {
								'sim01' : {
									'docomo': {
	                                	'linkURL' : 'https://shop.aeondigitalworld.com/shop/cart/cart.aspx?goods=A116-2007940485063',
	                                	'gaAction' : 'arrowsM03_pink'
									}
								},
								'sim02' : {
									'docomo': {
										'linkURL' : 'https://shop.aeondigitalworld.com/shop/cart/cart.aspx?goods=A116-2007940491521',
	                                	'gaAction' : 'arrowsM03_pink'
									}
								}
						},
                        'black' : {
								'sim01' : {
									'docomo': {
	                                	'linkURL' : 'https://shop.aeondigitalworld.com/shop/cart/cart.aspx?goods=A116-2007940485094',
	                                	'gaAction' : 'arrowsM03_black'
									}
								},
								'sim02' : {
									'docomo': {
										'linkURL' : 'https://shop.aeondigitalworld.com/shop/cart/cart.aspx?goods=A116-2007940491545',
	                                	'gaAction' : 'arrowsM03_black'
									}
								}
						},
                        'white' : {
								'sim01' : {
									'docomo': {
										'linkURL' : 'https://shop.aeondigitalworld.com/shop/cart/cart.aspx?goods=A116-2007940485124',
	                                	'gaAction' : 'arrowsM03_white'
									}
								},
								'sim02' : {
									'docomo': {
										'linkURL' : 'https://shop.aeondigitalworld.com/shop/cart/cart.aspx?goods=A116-2007940491569',
	                                	'gaAction' : 'arrowsM03_white'
									}
								}
						}
				},
                'sms' : {
                        'pink' : {
								'sim01' : {
									'docomo': {
	                                	'linkURL' : 'https://shop.aeondigitalworld.com/shop/cart/cart.aspx?goods=A116-2007940485070',
	                                	'gaAction' : 'arrowsM03_pink'
									},
									'au' : {
										'linkURL' : 'https://shop.aeondigitalworld.com/shop/cart/cart.aspx?goods=A116-2007940524526',
	                                	'gaAction' : 'arrowsM03_pink'
									}
								},
								'sim02' : {
									'docomo': {
										'linkURL' : 'https://shop.aeondigitalworld.com/shop/cart/cart.aspx?goods=A116-2007940491538',
	                                	'gaAction' : 'arrowsM03_pink'
									}
								}
						},
                        'black' : {
								'sim01' : {
									'docomo': {
	                                	'linkURL' : 'https://shop.aeondigitalworld.com/shop/cart/cart.aspx?goods=A116-2007940485100',
	                                	'gaAction' : 'arrowsM03_black'
									},
									'au': {
										'linkURL' : 'https://shop.aeondigitalworld.com/shop/cart/cart.aspx?goods=A116-2007940524540',
	                                	'gaAction' : 'arrowsM03_black'
									}
								},
								'sim02' : {
									'docomo': {
										'linkURL' : 'https://shop.aeondigitalworld.com/shop/cart/cart.aspx?goods=A116-2007940491552',
	                                	'gaAction' : 'arrowsM03_black'
									}
								}
						},
                        'white' : {
								'sim01' : {
									'docomo': {
	                                	'linkURL' : 'https://shop.aeondigitalworld.com/shop/cart/cart.aspx?goods=A116-2007940485131',
	                                	'gaAction' : 'arrowsM03_white'
									},
									'au': {
										'linkURL' : 'https://shop.aeondigitalworld.com/shop/cart/cart.aspx?goods=A116-2007940524564',
	                                	'gaAction' : 'arrowsM03_white'
									}
								},
								'sim02' : {
									'docomo': {
	                                	'linkURL' : 'https://shop.aeondigitalworld.com/shop/cart/cart.aspx?goods=A116-2007940491576',
	                                	'gaAction' : 'arrowsM03_white'
									}
								}
						}
				},
                'deviceOnly' : {
                        'pink' : {
                                'linkURL' : 'https://shop.aeondigitalworld.com/shop/cart/cart.aspx?goods=A116-4549210209606',
                                'gaAction' : 'arrowsM03_pink'
						},
                        'black' : {
                                'linkURL' : 'https://shop.aeondigitalworld.com/shop/cart/cart.aspx?goods=A116-4549210209613',
                                'gaAction' : 'arrowsM03_black'
						},
                        'white' : {
                                'linkURL' : 'https://shop.aeondigitalworld.com/shop/cart/cart.aspx?goods=A116-4549210209620',
                                'gaAction' : 'arrowsM03_white'
						}
				}
			},
			'aquos_sh_n01': { // Aquos SH-N01
                'price' : 25920,
                'voice' : {
                        'white' : {
								'docomo': {
                                	'linkURL' : 'https://shop.aeondigitalworld.com/shop/cart/cart.aspx?goods=A116-2007940489498',
                                	'gaAction' : 'AQUOS_SH_N01_white'
								}
						},
                        'black' : {
								'docomo': {
                                	'linkURL' : 'https://shop.aeondigitalworld.com/shop/cart/cart.aspx?goods=A116-2007940489504',
                                	'gaAction' : 'AQUOS_SH_N01_black'
								}
						},
                        'red' : {
								'docomo': {
                                	'linkURL' : 'https://shop.aeondigitalworld.com/shop/cart/cart.aspx?goods=A116-2007940489511',
                                	'gaAction' : 'AQUOS_SH_N01_red'
								}
						}
				},
                'deviceOnly' : {
                        'white' : {
                                'linkURL' : 'https://shop.aeondigitalworld.com/shop/cart/cart.aspx?goods=A116-4974019913339',
                                'gaAction' : 'AQUOS_SH_N01_white'
						},
                        'black' : {
                                'linkURL' : 'https://shop.aeondigitalworld.com/shop/cart/cart.aspx?goods=A116-4974019913599',
                                'gaAction' : 'AQUOS_SH_N01_black'
						},
                        'red' : {
                                'linkURL' : 'https://shop.aeondigitalworld.com/shop/cart/cart.aspx?goods=A116-4974019913605',
                                'gaAction' : 'AQUOS_SH_N01_red'
						}
				}
		},
        'aterm_mr05ln': { // Aterm MR05LN
                'price' : 28944,
                 'data' : {
                        'black' : {
								'sim01' : {
									'docomo': {
	                                	'linkURL' : 'https://shop.aeondigitalworld.com/shop/cart/cart.aspx?goods=A116-2007940485544',
	                                	'gaAction' : 'Aterm_MR05LN_black'
									}
								},
								'sim02' : {
									'docomo': {
		                            	'linkURL' : 'https://shop.aeondigitalworld.com/shop/cart/cart.aspx?goods=A116-2007940491583',
	                                	'gaAction' : 'Aterm_MR05LN_black'
									}
								}
						}
				},
                'deviceOnly' : {
                        'black' : {
                                'linkURL' : 'https://shop.aeondigitalworld.com/shop/cart/cart.aspx?goods=A116-4549815073855',
                                'gaAction' : 'Aterm_MR05LN_black'
						}
				}
		},
		'huawei_nova_lite': { // HUAWEI nova
                'price' : 23544,
                'voice' : {
                        'white' : {
								'docomo': {
                                	'linkURL' : 'https://shop.aeondigitalworld.com/shop/cart/cart.aspx?goods=A116-2007940494935',
                                	'gaAction' : 'HUAWEI_nova_lite_white'
								}
						},
                        'black' : {
								'docomo': {
                                	'linkURL' : 'https://shop.aeondigitalworld.com/shop/cart/cart.aspx?goods=A116-2007940494881',
                                	'gaAction' : 'HUAWEI_nova_lite_black'
								}
						},
                        'gold' : {
								'docomo': {
                                	'linkURL' : 'https://shop.aeondigitalworld.com/shop/cart/cart.aspx?goods=A116-2007940494980',
                                	'gaAction' : 'HUAWEI_nova_lite_gold'
								}
						}
				},
                'data' : {
                        'white' : {
								'sim01' : {
									'docomo': {
	                                	'linkURL' : 'https://shop.aeondigitalworld.com/shop/cart/cart.aspx?goods=A116-2007940494942',
	                                	'gaAction' : 'HUAWEI_nova_lite_white'
									}
								},
								'sim02' : {
									'docomo': {
										'linkURL' : 'https://shop.aeondigitalworld.com/shop/cart/cart.aspx?goods=A116-2007940494966',
	                                	'gaAction' : 'HUAWEI_nova_lite_white'
									}
								}
						},
                        'black' : {
								'sim01' : {
									'docomo': {
	                                	'linkURL' : 'https://shop.aeondigitalworld.com/shop/cart/cart.aspx?goods=A116-2007940494898',
	                                	'gaAction' : 'HUAWEI_nova_lite_black'
									}
								},
								'sim02' : {
									'docomo': {
										'linkURL' : 'https://shop.aeondigitalworld.com/shop/cart/cart.aspx?goods=A116-2007940494911',
	                                	'gaAction' : 'HUAWEI_nova_lite_black'
									}
								}
						},
                        'gold' : {
								'sim01' : {
									'docomo': {
	                                	'linkURL' : 'https://shop.aeondigitalworld.com/shop/cart/cart.aspx?goods=A116-2007940494997',
	                                	'gaAction' : 'HUAWEI_nova_lite_gold'
									}
								},
								'sim02' : {
									'docomo': {
										'linkURL' : 'https://shop.aeondigitalworld.com/shop/cart/cart.aspx?goods=A116-2007940495017',
	                                	'gaAction' : 'HUAWEI_nova_lite_gold'
									}
								}
						}
				},
                'sms' : {
                        'white' : {
								'sim01' : {
									'docomo': {
										'linkURL' : 'https://shop.aeondigitalworld.com/shop/cart/cart.aspx?goods=A116-2007940494959',
	                                	'gaAction' : 'HUAWEI_nova_lite_white'
									}
								},
								'sim02' : {
									'docomo': {
										'linkURL' : 'https://shop.aeondigitalworld.com/shop/cart/cart.aspx?goods=A116-2007940494973',
	                                	'gaAction' : 'HUAWEI_nova_lite_white'
									}
								}
						},
                        'black' : {
								'sim01' : {
									'docomo': {
	                                	'linkURL' : 'https://shop.aeondigitalworld.com/shop/cart/cart.aspx?goods=A116-2007940494904',
	                                	'gaAction' : 'HUAWEI_nova_lite_black'
									}
								},
								'sim02' : {
									'docomo': {
										'linkURL' : 'https://shop.aeondigitalworld.com/shop/cart/cart.aspx?goods=A116-2007940494928',
	                                	'gaAction' : 'HUAWEI_nova_lite_black'
									}
								}
						},
                        'gold' : {
								'sim01' : {
									'docomo': {
	                                	'linkURL' : 'https://shop.aeondigitalworld.com/shop/cart/cart.aspx?goods=A116-2007940495000',
	                                	'gaAction' : 'HUAWEI_nova_lite_gold'
									}
								},
								'sim02' : {
									'docomo': {
	                                	'linkURL' : 'https://shop.aeondigitalworld.com/shop/cart/cart.aspx?goods=A116-2007940495024',
	                                	'gaAction' : 'HUAWEI_nova_lite_gold'
									}
								}
						}
				},
                'deviceOnly' : {
                        'white' : {
                                'linkURL' : 'https://shop.aeondigitalworld.com/shop/cart/cart.aspx?goods=A116-6901443163540',
                                'gaAction' : 'HUAWEI_nova_lite_white'
						},
                        'black' : {
                                'linkURL' : 'https://shop.aeondigitalworld.com/shop/cart/cart.aspx?goods=A116-6901443163557',
                                'gaAction' : 'HUAWEI_nova_lite_black'
						},
                        'gold' : {
                                'linkURL' : 'https://shop.aeondigitalworld.com/shop/cart/cart.aspx?goods=A116-6901443163533',
                                'gaAction' : 'HUAWEI_nova_lite_gold'
						}
				}
		},
		'alcatel_pixi4': { // Alcatel PIXI4
                'price' : 10800,
                'voice' : {
                        'silver' : {
								'docomo': {
                                	'linkURL' : 'https://shop.aeondigitalworld.com/shop/cart/cart.aspx?goods=A116-2007940494836',
                                	'gaAction' : 'Alcatel_PIXI4_silver'
								}
						},
                        'gray' : {
								'docomo': {
                                	'linkURL' : 'https://shop.aeondigitalworld.com/shop/cart/cart.aspx?goods=A116-2007940494782',
                                	'gaAction' : 'Alcatel_PIXI4_gray'
								}
						}
				},
                'data' : {
                        'silver' : {
								'sim01' : {
									'docomo': {
	                                	'linkURL' : 'https://shop.aeondigitalworld.com/shop/cart/cart.aspx?goods=A116-2007940494843',
	                                	'gaAction' : 'Alcatel_PIXI4_silver'
									}
								},
								'sim02' : {
									'docomo': {
										'linkURL' : 'https://shop.aeondigitalworld.com/shop/cart/cart.aspx?goods=A116-2007940494867',
	                                	'gaAction' : 'Alcatel_PIXI4_silver'
									}
								}
						},
                        'gray' : {
								'sim01' : {
									'docomo': {
	                                	'linkURL' : 'https://shop.aeondigitalworld.com/shop/cart/cart.aspx?goods=A116-2007940494799',
	                                	'gaAction' : 'Alcatel_PIXI4_gray'
									}
								},
								'sim02' : {
									'docomo': {
										'linkURL' : 'https://shop.aeondigitalworld.com/shop/cart/cart.aspx?goods=A116-2007940494812',
	                                	'gaAction' : 'Alcatel_PIXI4_gray'
									}
								}
						}
				},
                'sms' : {
                        'silver' : {
								'sim01' : {
									'docomo': {
	                                	'linkURL' : 'https://shop.aeondigitalworld.com/shop/cart/cart.aspx?goods=A116-2007940494850',
	                                	'gaAction' : 'Alcatel_PIXI4_silver'
									}
								},
								'sim02' : {
									'docomo': {
										'linkURL' : 'https://shop.aeondigitalworld.com/shop/cart/cart.aspx?goods=A116-2007940494874',
	                                	'gaAction' : 'Alcatel_PIXI4_silver'
									}
								}
						},
                        'gray' : {
								'sim01' : {
									'docomo': {
	                                	'linkURL' : 'https://shop.aeondigitalworld.com/shop/cart/cart.aspx?goods=A116-2007940494805',
	                                	'gaAction' : 'Alcatel_PIXI4_gray'
									}
								},
								'sim02' : {
									'docomo': {
										'linkURL' : 'https://shop.aeondigitalworld.com/shop/cart/cart.aspx?goods=A116-2007940494829',
	                                	'gaAction' : 'Alcatel_PIXI4_gray'
									}
								}
						}
				},
                'deviceOnly' : {
                        'silver' : {
                                'linkURL' : 'https://shop.aeondigitalworld.com/shop/cart/cart.aspx?goods=A116-4894461444666',
                                'gaAction' : 'Alcatel_PIXI4_silver'
						},
                        'gray' : {
                                'linkURL' : 'https://shop.aeondigitalworld.com/shop/cart/cart.aspx?goods=A116-4894461444673',
                                'gaAction' : 'Alcatel_PIXI4_gray'
						}
				}
		},
		'vaio_phone_a_vpa0511s': { // VAIO Phone A VPA0511S
                'price' : 21384,
                'voice' : {
                        'silver' : {
								'docomo': {
                                	'linkURL' : 'https://shop.aeondigitalworld.com/shop/cart/cart.aspx?goods=A116-2007940507833',
                                	'gaAction' : 'VAIO_phone_a_vpa0511s_silver'
								}
						}
				},
                'data' : {
                        'silver' : {
								'sim01' : {
									'docomo': {
	                                	'linkURL' : 'https://shop.aeondigitalworld.com/shop/cart/cart.aspx?goods=A116-2007940507840',
	                                	'gaAction' : 'VAIO_phone_a_vpa0511s_silver'
									}
								},
								'sim02' : {
									'docomo': {
										'linkURL' : 'https://shop.aeondigitalworld.com/shop/cart/cart.aspx?goods=A116-2007940507864',
	                                	'gaAction' : 'VAIO_phone_a_vpa0511s_silver'
									}
								}
						}
				},
                'sms' : {
                        'silver' : {
								'sim01' : {
									'docomo': {
	                                	'linkURL' : 'https://shop.aeondigitalworld.com/shop/cart/cart.aspx?goods=A116-2007940507857',
	                                	'gaAction' : 'VAIO_phone_a_vpa0511s_silver'
									}
								},
								'sim02' : {
									'docomo': {
										'linkURL' : 'https://shop.aeondigitalworld.com/shop/cart/cart.aspx?goods=A116-2007940507871',
	                                	'gaAction' : 'VAIO_phone_a_vpa0511s_silver'
									}
								}
						}
				},
                'deviceOnly' : {
                        'silver' : {
                                'linkURL' : 'https://shop.aeondigitalworld.com/shop/cart/cart.aspx?goods=A116-4589914504188',
                                'gaAction' : 'VAIO_phone_a_vpa0511s_silver'
						}
				}
		},
        'simOnly' : { // SIMのみ
                'voice' : {
                        'standard' : {
                                'linkURL' : 'https://shop.aeondigitalworld.com/shop/cart/cart.aspx?goods=A116-4545904002409',
                                'gaAction' : ''
						},
                        'micro' : {
                                'linkURL' : 'https://shop.aeondigitalworld.com/shop/cart/cart.aspx?goods=A116-4545904002416',
                                'gaAction' : ''
						},
                        'nano' : {
                                'linkURL' : 'https://shop.aeondigitalworld.com/shop/cart/cart.aspx?goods=A116-4545904002423',
                                'gaAction' : ''
						},
						'free' : {
						 		'linkURL' : 'https://shop.aeondigitalworld.com/shop/cart/cart.aspx?goods=A116-4545904003567',
                                'gaAction' : ''
						}
				},
                'data' : {
                        'standard' : {
								'sim01' : {
									'linkURL' : 'https://shop.aeondigitalworld.com/shop/cart/cart.aspx?goods=A116-2007940471103',
	                                'gaAction' : ''
								},
								'sim02' : {
									'linkURL' : 'https://shop.aeondigitalworld.com/shop/cart/cart.aspx?goods=A116-2007940487500',
	                                'gaAction' : ''
								}
						},
                        'micro' : {
								'sim01' : {
	                                'linkURL' : 'https://shop.aeondigitalworld.com/shop/cart/cart.aspx?goods=A116-2007940471110',
	                                'gaAction' : ''
								},
								'sim02' : {
									'linkURL' : 'https://shop.aeondigitalworld.com/shop/cart/cart.aspx?goods=A116-2007940487517',
	                                'gaAction' : ''
								}
						},
                        'nano' : {
								'sim01' : {
	                                'linkURL' : 'https://shop.aeondigitalworld.com/shop/cart/cart.aspx?goods=A116-2007940471127',
	                                'gaAction' : ''
								},
								'sim02' : {
									'linkURL' : 'https://shop.aeondigitalworld.com/shop/cart/cart.aspx?goods=A116-2007940487555',
	                                'gaAction' : ''
								}
						}
				},
                'sms' : {
                        'standard' : {
								'sim01' : {
									'linkURL' : 'https://shop.aeondigitalworld.com/shop/cart/cart.aspx?goods=A116-2007940471134',
									'gaAction' : ''
								},
								'sim02' : {
									'linkURL' : 'https://shop.aeondigitalworld.com/shop/cart/cart.aspx?goods=A116-2007940487562',
									'gaAction' : ''
								}
						},
                        'micro' : {
								'sim01' : {
	                                'linkURL' : 'https://shop.aeondigitalworld.com/shop/cart/cart.aspx?goods=A116-2007940471141',
	                                'gaAction' : ''
								},
								'sim02' : {
									'linkURL' : 'https://shop.aeondigitalworld.com/shop/cart/cart.aspx?goods=A116-2007940487579',
	                                'gaAction' : ''
								}
						},
                        'nano' : {
								'sim01' : {
	                                'linkURL' : 'https://shop.aeondigitalworld.com/shop/cart/cart.aspx?goods=A116-2007940471158',
	                                'gaAction' : ''
								},
								'sim02' : {
									'linkURL' : 'https://shop.aeondigitalworld.com/shop/cart/cart.aspx?goods=A116-2007940487586',
	                                'gaAction' : ''
								}
						},
						'free' : {
								'linkURL' : 'https://shop.aeondigitalworld.com/shop/cart/cart.aspx?goods=A116-2007940524502',
	                            'gaAction' : ''
						}
				}
		}
    };

    // 端末一覧・詳細ボタン→デジタルワールドへリンク
    var deviceDetail_array = {
		'huawei_mate10_pro': { // huawei_mate10_pro
				'blue' : {
                        'linkURL' : 'https://shop.aeondigitalworld.com/shop/g/gA116-6901443204977/',
                        'gaAction' : 'huawei_mate10_pro_blue'},
				'gray' : {
                        'linkURL' : 'https://shop.aeondigitalworld.com/shop/g/gA116-6901443204984/',
                        'gaAction' : 'huawei_mate10_pro_gray'}},
		'asus_zenfone3_max': { // asus_zenfone3_max
				'gold' : {
                        'linkURL' : 'https://shop.aeondigitalworld.com/shop/g/gA116-0889349542262/',
                        'gaAction' : 'zenfone3_max_gold'},
				'gray' : {
                        'linkURL' : 'https://shop.aeondigitalworld.com/shop/g/gA116-0889349542279/',
                        'gaAction' : 'zenfone3_max_gray'},
                'silver' : {
                        'linkURL' : 'https://shop.aeondigitalworld.com/shop/g/gA116-0889349542286/',
                        'gaAction' : 'zenfone3_max_silver'}},
		'zte_axon_7': { // zte_axon_7
				'aeongold' : {
                        'linkURL' : 'https://shop.aeondigitalworld.com/shop/g/gA116-4571491596250/',
                        'gaAction' : 'axon_7_gold'},
                'qgray' : {
                        'linkURL' : 'https://shop.aeondigitalworld.com/shop/g/gA116-4571491596267/',
                        'gaAction' : 'axon_7_silver'}},
		'zte_axon_7_mini': { // zte_axon_7_mini
				'aeongold' : {
                        'linkURL' : 'https://shop.aeondigitalworld.com/shop/g/gA116-4571491596236/',
                        'gaAction' : 'axon_7_mini_gold'},
                'qgray' : {
                        'linkURL' : 'https://shop.aeondigitalworld.com/shop/g/gA116-4571491596243/',
                        'gaAction' : 'axon_7_mini_gray'}},
		'asuszenfone3_laser': { // zte_axon_7_mini
				'gold' : {
                        'linkURL' : 'https://shop.aeondigitalworld.com/shop/g/gA116-0889349534656/',
                        'gaAction' : 'zenfone3_laser_gold'},
                'silver' : {
                        'linkURL' : 'https://shop.aeondigitalworld.com/shop/g/gA116-0889349534663/',
                        'gaAction' : 'zenfone3_laser_silver'}},
		'huawei_mate_9': { // huawei_mate_9
				'white' : {
                        'linkURL' : 'https://shops.aeonsquare.net/shop/g/gA116-6901443153107/',
                        'gaAction' : 'huawei_mate_9_white'},
                 'gold' : {
                        'linkURL' : 'https://shops.aeonsquare.net/shop/g/gA116-6901443153091/',
                        'gaAction' : 'huawei_mate_9_gold'},
				'black' : {
                        'linkURL' : 'https://shops.aeonsquare.net/shop/g/gA116-6901443168484/',
                        'gaAction' : 'huawei_mate_9_black'}},
        'asus_zenfone3': { // ASUS ZenFone3
                 'white' : {
                        'linkURL' : 'https://shop.aeondigitalworld.com/shop/g/gA116-0889349459966/',
                        'gaAction' : 'zenfone3_white'},
                 'black' : {
                        'linkURL' : 'https://shop.aeondigitalworld.com/shop/g/gA116-0889349459959/',
                        'gaAction' : 'zenfone3_black'}},
        'moto_g4_plus': { // モトローラ Moto G4 Plus
                 'white' : {
                        'linkURL' : 'https://shop.aeondigitalworld.com/shop/g/gA116-4582239431092/',
                        'gaAction' : 'motoG4Plus_white'},
                 'black' : {
                        'linkURL' : 'https://shop.aeondigitalworld.com/shop/g/gA116-4582239431085/',
                        'gaAction' : 'motoG4Plus_black'}},
        'zte_blade_v7lite': { // ZTE BLADE V7LITE
                 'silver' : {
                        'linkURL' : 'https://shop.aeondigitalworld.com/shop/g/gA116-4571491596519/',
                        'gaAction' : 'blade_v7lite_silver'},
                 'gray' : {
                        'linkURL' : 'https://shop.aeondigitalworld.com/shop/g/gA116-4571491596526/',
                        'gaAction' : 'blade_v7lite_gray'}},
        'huawei_p9': { // HUAWEI P9
                 'silver' : {
                        'linkURL' : 'https://shop.aeondigitalworld.com/shop/g/gA116-6901443121915/',
                        'gaAction' : 'huawei_p9_silver'},
                 'gray' : {
                        'linkURL' : 'https://shop.aeondigitalworld.com/shop/g/gA116-6901443121922/',
                        'gaAction' : 'huawei_p9_gray'}},
        'huawei_mediapad': { // HUAWEI MediaPad T2 7.0 Pro
                 'white' : {
                        'linkURL' : 'https://shop.aeondigitalworld.com/shop/g/gA116-6901443121335/',
                        'gaAction' : 'mediapad_t2_white'}},
		'huawei_mediapad_m3_premium': { // HUAWEI MediaPad M3 Pre
                 'gold' : {
                        'linkURL' : 'https://shops.aeonsquare.net/shop/g/gA116-6901443149926/',
                        'gaAction' : 'mediapad_m3_premium_gold'}},
		'huawei_mediapad_m3_standard': { // HUAWEI MediaPad M3 Sta
                 'silver' : {
                        'linkURL' : 'https://shops.aeonsquare.net/shop/g/gA116-6901443149919/',
                        'gaAction' : 'mediapad_m3_standard_silver'}},
        'asus_zenFone3_5_5': { // asus_zenFone3_5_5
                 'black' : {
                        'linkURL' : 'https://shop.aeondigitalworld.com/shop/g/gA116-0889349611555/',
                        'gaAction' : 'asus_zenFone3_5_5_black'},
                 'white' : {
                        'linkURL' : 'https://shop.aeondigitalworld.com/shop/g/gA116-0889349611562/',
                        'gaAction' : 'asus_zenFone3_5_5_white'}},
		'huawei_mediapad_m3_lite_10': { // HUAWEI MediaPad M3 lite 10
                 'gray' : {
                        'linkURL' : 'https://shop.aeondigitalworld.com/shop/g/gA116-6901443179299/',
                        'gaAction' : 'mediapad_m3_lite_10_gray'}},
		'huawei_mediapad_t3_10_lte': { // HUAWEI MediaPad M3 lite 10
                 'gray' : {
                        'linkURL' : 'https://shop.aeondigitalworld.com/shop/g/gA116-6901443176137/',
                        'gaAction' : 'mediapad_t3_10_lte'}},
		'huawei_mediapad_t3_8_lte': { // HUAWEI MediaPad T3 8 LTE
                 'gray' : {
                        'linkURL' : 'https://shop.aeondigitalworld.com/shop/g/gA116-6901443187584/',
                        'gaAction' : 'mediapad_t3_8_gray'}},
		'aterm_ht100ln': { // Aterm HT100LN
                 'gray' : {
                        'linkURL' : 'https://shop.aeondigitalworld.com/shop/g/gA116-4549815499822/',
                        'gaAction' : 'aterm_ht100ln_white'}}
    };
	
	
	
	
	
	
	
	