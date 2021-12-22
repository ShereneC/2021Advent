let input = [173,
  175,
  171,
  177,
  179,
  177,
  174,
  177,
  178,
  185,
  189,
  195,
  194,
  211,
  227,
  226,
  227,
  221,
  224,
  227,
  228,
  231,
  232,
  229,
  226,
  244,
  252,
  251,
  258,
  269,
  263,
  255,
  259,
  261,
  232,
  231,
  241,
  244,
  245,
  278,
  258,
  259,
  273,
  272,
  281,
  284,
  288,
  303,
  306,
  312,
  313,
  325,
  327,
  332,
  335,
  345,
  346,
  328,
  329,
  327,
  330,
  325,
  326,
  325,
  351,
  352,
  353,
  363,
  364,
  382,
  402,
  401,
  380,
  370,
  371,
  348,
  359,
  357,
  366,
  386,
  401,
  387,
  388,
  404,
  409,
  430,
  435,
  441,
  475,
  469,
  475,
  473,
  478,
  510,
  507,
  508,
  510,
  502,
  500,
  512,
  517,
  521,
  519,
  532,
  533,
  537,
  538,
  540,
  541,
  545,
  556,
  548,
  543,
  549,
  561,
  562,
  563,
  562,
  561,
  572,
  574,
  575,
  568,
  569,
  570,
  579,
  591,
  590,
  602,
  601,
  581,
  583,
  593,
  590,
  591,
  577,
  576,
  579,
  581,
  563,
  559,
  563,
  564,
  567,
  569,
  570,
  582,
  579,
  601,
  598,
  583,
  589,
  591,
  597,
  611,
  618,
  621,
  622,
  641,
  657,
  658,
  661,
  631,
  633,
  646,
  647,
  652,
  667,
  670,
  676,
  680,
  681,
  683,
  681,
  687,
  690,
  683,
  687,
  690,
  695,
  691,
  693,
  696,
  695,
  700,
  697,
  696,
  700,
  713,
  696,
  693,
  698,
  701,
  700,
  699,
  690,
  692,
  693,
  696,
  722,
  744,
  746,
  758,
  763,
  768,
  782,
  776,
  777,
  787,
  797,
  800,
  801,
  789,
  814,
  815,
  812,
  790,
  791,
  790,
  804,
  813,
  841,
  845,
  844,
  848,
  855,
  847,
  855,
  858,
  859,
  858,
  860,
  867,
  868,
  869,
  877,
  887,
  888,
  895,
  896,
  904,
  905,
  907,
  923,
  932,
  944,
  945,
  950,
  955,
  965,
  990,
  1019,
  1017,
  1025,
  1040,
  1041,
  1066,
  1060,
  1033,
  1034,
  1047,
  1057,
  1060,
  1061,
  1068,
  1071,
  1080,
  1081,
  1090,
  1096,
  1097,
  1098,
  1099,
  1093,
  1096,
  1100,
  1101,
  1112,
  1118,
  1119,
  1121,
  1123,
  1125,
  1126,
  1152,
  1155,
  1149,
  1161,
  1166,
  1178,
  1181,
  1182,
  1189,
  1190,
  1176,
  1169,
  1183,
  1196,
  1183,
  1205,
  1207,
  1198,
  1200,
  1186,
  1172,
  1162,
  1177,
  1179,
  1175,
  1163,
  1164,
  1170,
  1168,
  1171,
  1173,
  1172,
  1174,
  1175,
  1172,
  1173,
  1167,
  1169,
  1173,
  1176,
  1177,
  1178,
  1179,
  1181,
  1185,
  1186,
  1196,
  1183,
  1181,
  1176,
  1190,
  1200,
  1216,
  1240,
  1238,
  1234,
  1224,
  1247,
  1257,
  1258,
  1246,
  1233,
  1234,
  1223,
  1229,
  1231,
  1232,
  1231,
  1232,
  1249,
  1255,
  1254,
  1257,
  1268,
  1298,
  1300,
  1302,
  1325,
  1337,
  1339,
  1345,
  1348,
  1336,
  1341,
  1342,
  1343,
  1344,
  1343,
  1336,
  1351,
  1360,
  1362,
  1359,
  1357,
  1358,
  1364,
  1370,
  1372,
  1373,
  1374,
  1378,
  1409,
  1390,
  1398,
  1410,
  1411,
  1417,
  1418,
  1431,
  1450,
  1451,
  1452,
  1456,
  1468,
  1469,
  1472,
  1475,
  1465,
  1469,
  1453,
  1457,
  1458,
  1474,
  1464,
  1454,
  1457,
  1460,
  1467,
  1469,
  1470,
  1455,
  1456,
  1468,
  1476,
  1498,
  1502,
  1500,
  1514,
  1522,
  1529,
  1528,
  1516,
  1511,
  1516,
  1521,
  1503,
  1523,
  1498,
  1515,
  1527,
  1526,
  1527,
  1556,
  1567,
  1586,
  1607,
  1616,
  1615,
  1611,
  1612,
  1621,
  1599,
  1600,
  1601,
  1625,
  1632,
  1633,
  1628,
  1656,
  1644,
  1646,
  1669,
  1671,
  1675,
  1676,
  1682,
  1681,
  1658,
  1657,
  1671,
  1669,
  1668,
  1669,
  1670,
  1691,
  1708,
  1709,
  1708,
  1724,
  1731,
  1738,
  1748,
  1766,
  1767,
  1769,
  1756,
  1757,
  1758,
  1759,
  1760,
  1773,
  1775,
  1777,
  1780,
  1782,
  1793,
  1813,
  1795,
  1796,
  1798,
  1797,
  1804,
  1806,
  1811,
  1812,
  1813,
  1818,
  1822,
  1829,
  1824,
  1814,
  1811,
  1806,
  1825,
  1844,
  1847,
  1837,
  1841,
  1844,
  1836,
  1825,
  1828,
  1841,
  1846,
  1839,
  1840,
  1847,
  1856,
  1869,
  1870,
  1871,
  1879,
  1884,
  1890,
  1888,
  1859,
  1861,
  1873,
  1870,
  1871,
  1876,
  1885,
  1886,
  1887,
  1888,
  1887,
  1895,
  1888,
  1889,
  1891,
  1890,
  1884,
  1885,
  1854,
  1857,
  1860,
  1841,
  1837,
  1838,
  1841,
  1859,
  1863,
  1865,
  1866,
  1864,
  1853,
  1855,
  1865,
  1867,
  1875,
  1876,
  1877,
  1880,
  1877,
  1876,
  1886,
  1894,
  1901,
  1903,
  1910,
  1901,
  1903,
  1905,
  1911,
  1913,
  1928,
  1938,
  1940,
  1946,
  1956,
  1951,
  1953,
  1955,
  1961,
  1957,
  1960,
  1967,
  1966,
  1970,
  1976,
  1979,
  1980,
  1979,
  1967,
  1974,
  1980,
  1974,
  1975,
  1976,
  2005,
  2012,
  2015,
  2022,
  2023,
  2024,
  2018,
  2017,
  2024,
  2041,
  2042,
  2043,
  2074,
  2075,
  2077,
  2084,
  2090,
  2091,
  2096,
  2097,
  2100,
  2103,
  2090,
  2063,
  2081,
  2082,
  2079,
  2095,
  2093,
  2095,
  2103,
  2084,
  2093,
  2098,
  2116,
  2123,
  2124,
  2123,
  2117,
  2115,
  2120,
  2121,
  2132,
  2138,
  2146,
  2158,
  2162,
  2163,
  2167,
  2177,
  2178,
  2183,
  2178,
  2198,
  2174,
  2187,
  2196,
  2221,
  2224,
  2228,
  2232,
  2237,
  2238,
  2257,
  2262,
  2263,
  2266,
  2280,
  2287,
  2293,
  2280,
  2281,
  2289,
  2290,
  2289,
  2291,
  2307,
  2316,
  2322,
  2321,
  2320,
  2335,
  2339,
  2345,
  2348,
  2357,
  2360,
  2361,
  2367,
  2375,
  2380,
  2382,
  2389,
  2398,
  2384,
  2388,
  2390,
  2367,
  2369,
  2371,
  2366,
  2370,
  2371,
  2379,
  2364,
  2365,
  2368,
  2369,
  2370,
  2377,
  2378,
  2390,
  2392,
  2398,
  2402,
  2393,
  2404,
  2417,
  2441,
  2446,
  2453,
  2459,
  2462,
  2463,
  2464,
  2476,
  2477,
  2481,
  2482,
  2483,
  2477,
  2481,
  2489,
  2500,
  2504,
  2491,
  2490,
  2487,
  2474,
  2475,
  2476,
  2478,
  2489,
  2491,
  2498,
  2501,
  2513,
  2514,
  2532,
  2546,
  2547,
  2553,
  2559,
  2562,
  2580,
  2588,
  2590,
  2602,
  2601,
  2608,
  2613,
  2616,
  2623,
  2626,
  2651,
  2652,
  2654,
  2650,
  2651,
  2654,
  2658,
  2657,
  2660,
  2654,
  2668,
  2669,
  2662,
  2665,
  2647,
  2660,
  2670,
  2672,
  2680,
  2677,
  2678,
  2677,
  2684,
  2677,
  2678,
  2684,
  2702,
  2703,
  2707,
  2727,
  2728,
  2738,
  2739,
  2738,
  2757,
  2759,
  2766,
  2771,
  2775,
  2788,
  2790,
  2794,
  2797,
  2800,
  2798,
  2801,
  2800,
  2802,
  2803,
  2804,
  2831,
  2820,
  2821,
  2824,
  2827,
  2813,
  2816,
  2826,
  2827,
  2829,
  2834,
  2835,
  2841,
  2849,
  2854,
  2855,
  2867,
  2877,
  2894,
  2900,
  2918,
  2917,
  2898,
  2899,
  2901,
  2902,
  2903,
  2901,
  2919,
  2920,
  2931,
  2939,
  2945,
  2946,
  2934,
  2936,
  2947,
  2956,
  2955,
  2958,
  2946,
  2947,
  2951,
  2955,
  2957,
  2960,
  2964,
  2965,
  2974,
  2976,
  2992,
  3009,
  3014,
  3015,
  2997,
  2996,
  3003,
  3000,
  3006,
  3026,
  3019,
  3031,
  3012,
  3013,
  3020,
  3010,
  3014,
  3018,
  3019,
  3031,
  3007,
  3017,
  3018,
  3031,
  3033,
  3025,
  3037,
  3039,
  3033,
  3000,
  3001,
  3003,
  3014,
  3016,
  3034,
  3033,
  3035,
  3038,
  3040,
  3038,
  3020,
  3018,
  3020,
  3021,
  3039,
  3043,
  3034,
  3036,
  3043,
  3059,
  3074,
  3076,
  3090,
  3096,
  3103,
  3101,
  3102,
  3113,
  3114,
  3115,
  3119,
  3127,
  3146,
  3140,
  3145,
  3146,
  3147,
  3151,
  3152,
  3153,
  3154,
  3144,
  3149,
  3157,
  3163,
  3172,
  3175,
  3180,
  3206,
  3207,
  3212,
  3215,
  3211,
  3212,
  3220,
  3229,
  3230,
  3226,
  3227,
  3256,
  3296,
  3299,
  3301,
  3303,
  3301,
  3302,
  3308,
  3324,
  3323,
  3313,
  3314,
  3317,
  3318,
  3317,
  3330,
  3358,
  3360,
  3369,
  3363,
  3368,
  3371,
  3377,
  3381,
  3385,
  3382,
  3379,
  3381,
  3383,
  3385,
  3386,
  3389,
  3388,
  3392,
  3396,
  3393,
  3391,
  3393,
  3394,
  3398,
  3400,
  3403,
  3404,
  3408,
  3424,
  3425,
  3426,
  3424,
  3415,
  3417,
  3420,
  3439,
  3442,
  3447,
  3454,
  3478,
  3480,
  3477,
  3478,
  3470,
  3472,
  3477,
  3476,
  3477,
  3479,
  3509,
  3519,
  3542,
  3547,
  3548,
  3564,
  3565,
  3569,
  3570,
  3584,
  3591,
  3590,
  3589,
  3598,
  3603,
  3605,
  3609,
  3608,
  3628,
  3624,
  3644,
  3652,
  3654,
  3648,
  3650,
  3652,
  3659,
  3661,
  3675,
  3676,
  3690,
  3692,
  3699,
  3700,
  3702,
  3703,
  3706,
  3715,
  3719,
  3720,
  3725,
  3721,
  3730,
  3722,
  3740,
  3750,
  3751,
  3752,
  3761,
  3763,
  3778,
  3777,
  3778,
  3780,
  3777,
  3794,
  3793,
  3792,
  3802,
  3803,
  3806,
  3817,
  3814,
  3823,
  3824,
  3825,
  3826,
  3831,
  3834,
  3835,
  3844,
  3856,
  3857,
  3864,
  3879,
  3904,
  3906,
  3923,
  3933,
  3935,
  3934,
  3935,
  3937,
  3935,
  3944,
  3941,
  3936,
  3937,
  3935,
  3936,
  3935,
  3937,
  3938,
  3949,
  3950,
  3949,
  3952,
  3953,
  3980,
  3989,
  3990,
  3991,
  3992,
  3988,
  3993,
  4003,
  3969,
  3959,
  3964,
  3973,
  3981,
  3987,
  3986,
  3975,
  3982,
  3981,
  3983,
  3981,
  3984,
  3992,
  3991,
  3984,
  3999,
  4003,
  4004,
  3996,
  3992,
  4035,
  4043,
  4042,
  4034,
  4027,
  4051,
  4052,
  4048,
  4051,
  4049,
  4060,
  4059,
  4062,
  4061,
  4063,
  4062,
  4053,
  4056,
  4067,
  4055,
  4057,
  4058,
  4072,
  4077,
  4075,
  4060,
  4057,
  4058,
  4061,
  4060,
  4061,
  4060,
  4070,
  4088,
  4097,
  4093,
  4105,
  4107,
  4105,
  4103,
  4105,
  4109,
  4086,
  4111,
  4112,
  4115,
  4110,
  4118,
  4119,
  4127,
  4128,
  4129,
  4130,
  4134,
  4136,
  4135,
  4138,
  4139,
  4140,
  4135,
  4158,
  4137,
  4138,
  4158,
  4157,
  4154,
  4156,
  4175,
  4176,
  4179,
  4184,
  4198,
  4196,
  4199,
  4180,
  4188,
  4193,
  4192,
  4201,
  4200,
  4192,
  4207,
  4220,
  4218,
  4230,
  4229,
  4247,
  4248,
  4249,
  4253,
  4254,
  4256,
  4265,
  4266,
  4272,
  4268,
  4273,
  4295,
  4296,
  4305,
  4295,
  4310,
  4311,
  4312,
  4311,
  4314,
  4307,
  4305,
  4294,
  4306,
  4321,
  4316,
  4326,
  4330,
  4331,
  4337,
  4336,
  4337,
  4338,
  4340,
  4342,
  4345,
  4347,
  4345,
  4370,
  4384,
  4405,
  4406,
  4419,
  4420,
  4435,
  4439,
  4443,
  4445,
  4447,
  4431,
  4424,
  4433,
  4418,
  4417,
  4416,
  4417,
  4420,
  4424,
  4440,
  4442,
  4454,
  4461,
  4481,
  4483,
  4479,
  4480,
  4484,
  4485,
  4495,
  4498,
  4499,
  4524,
  4527,
  4528,
  4539,
  4541,
  4545,
  4543,
  4559,
  4569,
  4571,
  4568,
  4573,
  4570,
  4571,
  4580,
  4579,
  4580,
  4583,
  4588,
  4589,
  4590,
  4597,
  4632,
  4625,
  4626,
  4618,
  4621,
  4632,
  4642,
  4644,
  4647,
  4650,
  4665,
  4669,
  4666,
  4673,
  4674,
  4677,
  4681,
  4686,
  4651,
  4657,
  4658,
  4664,
  4665,
  4667,
  4685,
  4688,
  4695,
  4712,
  4714,
  4715,
  4717,
  4731,
  4734,
  4738,
  4737,
  4743,
  4745,
  4752,
  4753,
  4748,
  4763,
  4768,
  4769,
  4771,
  4774,
  4801,
  4802,
  4830,
  4845,
  4850,
  4847,
  4873,
  4883,
  4884,
  4885,
  4886,
  4887,
  4896,
  4891,
  4913,
  4914,
  4937,
  4938,
  4953,
  4959,
  4979,
  4984,
  4990,
  4982,
  4979,
  5008,
  5007,
  5008,
  5004,
  5015,
  5017,
  5038,
  5066,
  5067,
  5069,
  5078,
  5091,
  5101,
  5086,
  5088,
  5086,
  5092,
  5097,
  5098,
  5088,
  5070,
  5072,
  5083,
  5082,
  5073,
  5077,
  5080,
  5076,
  5073,
  5065,
  5066,
  5068,
  5069,
  5081,
  5082,
  5084,
  5083,
  5086,
  5089,
  5092,
  5095,
  5130,
  5133,
  5119,
  5129,
  5130,
  5138,
  5140,
  5148,
  5147,
  5150,
  5151,
  5155,
  5163,
  5188,
  5190,
  5192,
  5189,
  5196,
  5180,
  5191,
  5193,
  5197,
  5182,
  5162,
  5163,
  5147,
  5154,
  5155,
  5168,
  5207,
  5216,
  5223,
  5228,
  5227,
  5229,
  5221,
  5218,
  5221,
  5219,
  5220,
  5230,
  5259,
  5260,
  5233,
  5256,
  5258,
  5251,
  5246,
  5230,
  5234,
  5242,
  5245,
  5260,
  5261,
  5269,
  5281,
  5285,
  5296,
  5297,
  5296,
  5297,
  5298,
  5313,
  5314,
  5313,
  5319,
  5313,
  5322,
  5324,
  5325,
  5333,
  5346,
  5354,
  5355,
  5345,
  5347,
  5349,
  5350,
  5352,
  5339,
  5349,
  5345,
  5361,
  5362,
  5363,
  5404,
  5398,
  5424,
  5415,
  5420,
  5433,
  5435,
  5436,
  5437,
  5438,
  5455,
  5454,
  5460,
  5455,
  5453,
  5454,
  5466,
  5469,
  5471,
  5481,
  5482,
  5502,
  5503,
  5501,
  5484,
  5460,
  5461,
  5465,
  5466,
  5470,
  5454,
  5460,
  5486,
  5482,
  5483,
  5502,
  5512,
  5514,
  5516,
  5518,
  5525,
  5526,
  5521,
  5515,
  5518,
  5521,
  5528,
  5539,
  5557,
  5561,
  5577,
  5571,
  5572,
  5579,
  5576,
  5577,
  5589,
  5592,
  5595,
  5596,
  5595,
  5601,
  5587,
  5560,
  5563,
  5562,
  5571,
  5598,
  5606,
  5621,
  5636,
  5637,
  5663,
  5665,
  5678,
  5677,
  5678,
  5679,
  5684,
  5687,
  5684,
  5688,
  5691,
  5690,
  5693,
  5696,
  5707,
  5725,
  5727,
  5731,
  5734,
  5738,
  5748,
  5767,
  5768,
  5763,
  5767,
  5758,
  5760,
  5791,
  5777,
  5778,
  5782,
  5773,
  5776,
  5777,
  5791,
  5792,
  5793,
  5795,
  5781,
  5786,
  5793,
  5805,
  5807,
  5818,
  5822,
  5821,
  5826,
  5827,
  5846,
  5847,
  5864,
  5886,
  5878,
  5873,
  5868,
  5878,
  5876,
  5881,
  5876,
  5888,
  5890,
  5893,
  5894,
  5895,
  5900,
  5907,
  5908,
  5915,
  5916,
  5937,
  5936,
  5927,
  5938,
  5945,
  5944,
  5935,
  5942,
  5943,
  5945,
  5948,
  5977,
  5985,
  5975,
  5985,
  5998,
  5999,
  5996,
  6027,
  6047,
  6031,
  6033,
  6034,
  6022,
  6023,
  6025,
  6030,
  6029,
  6030,
  6034,
  6046,
  6055,
  6061,
  6058,
  6067,
  6070,
  6077,
  6069,
  6088,
  6084,
  6090,
  6100,
  6102,
  6107,
  6111,
  6108,
  6103,
  6104,
  6114,
  6118,
  6107,
  6114,
  6102,
  6112,
  6113,
  6115,
  6116,
  6139,
  6135,
  6143,
  6154,
  6155,
  6160,
  6163,
  6160,
  6163,
  6169,
  6184,
  6176,
  6199,
  6205,
  6204,
  6219,
  6222,
  6231,
  6207,
  6218,
  6219,
  6221,
  6222,
  6221,
  6200,
  6194,
  6203,
  6204,
  6210,
  6209,
  6210,
  6209,
  6210,
  6230,
  6238,
  6239,
  6245,
  6249,
  6264,
  6271,
  6262,
  6275,
  6252,
  6253,
  6240,
  6245,
  6219,
  6220,
  6221,
  6222,
  6225,
  6231,
  6236,
  6238,
  6267,
  6272,
  6273,
  6278,
  6287,
  6286,
  6287,
  6281,
  6264,
  6269,
  6270,
  6274,
  6247,
  6248,
  6259,
  6264,
  6267,
  6276,
  6281,
  6286,
  6284,
  6289,
  6287,
  6275,
  6247,
  6263,
  6261,
  6264,
  6265,
  6270,
  6271,
  6272,
  6271,
  6280,
  6282,
  6283,
  6291,
  6302,
  6303,
  6315,
  6335,
  6361,
  6358,
  6359,
  6362,
  6363,
  6349,
  6348,
  6355,
  6357,
  6358,
  6357,
  6375,
  6374,
  6367,
  6342,
  6350,
  6354,
  6353,
  6354,
  6357,
  6369,
  6371,
  6382,
  6384,
  6371,
  6403,
  6402,
  6412,
  6413,
  6415,
  6416,
  6417,
  6418,
  6419,
  6420,
  6438,
  6436,
  6438,
  6443,
  6454,
  6440,
  6439,
  6431,
  6442,
  6441,
  6444,
  6446,
  6450,
  6422,
  6424,
  6418,
  6426,
  6437,
  6438,
  6439,
  6449,
  6451,
  6452,
  6463,
  6464,
  6475,
  6492,
  6499,
  6506,
  6519,
  6548,
  6545,
  6543,
  6556,
  6565,
  6567,
  6564,
  6553,
  6554,
  6556,
  6564,
  6584,
  6580,
  6581,
  6582,
  6584,
  6585,
  6586,
  6595,
  6596,
  6595,
  6598,
  6575,
  6594,
  6595,
  6593,
  6591,
  6602,
  6603,
  6575,
  6573,
  6577,
  6586,
  6587,
  6615,
  6624,
  6647,
  6677,
  6678,
  6679,
  6683,
  6682,
  6684,
  6689,
  6704,
  6709,
  6723,
  6751,
  6754,
  6755,
  6757,
  6758,
  6774,
  6787,
  6791,
  6816,
  6837,
  6838,
  6846,
  6847,
  6845,
  6847,
  6850,
  6864,
  6863,
  6853,
  6874,
  6875,
  6874,
  6883,
  6891,
  6899,
  6918,
  6920,
  6921,
  6937,
  6934,
  6935,
  6951,
  6950,
  6969,
  6971,
  6976,
  6978,
  6979,
  6987,
  6989,
  6987,
  6989,
  6991,
  6990,
  6991,
  6980,
  6979,
  6963,
  6964,
  6968,
  6972,
  7000,
  6992,
  7003,
  7006,
  7019,
  7022,
  7028,
  7040,
  7035,
  7034,
  7055,
  7063,
  7065,
  7066,
  7071,
  7079,
  7092,
  7102,
  7118,
  7115,
  7121,
]

function advent1() {
  let increase = 0
  for (let i = 1; i < input.length; i++) {
    if (input[i] > input[i - 1]) {
      increase++
    }
  }
  // console.log('The number of increases are', + increase)
}

function advent2() {
  let increase = 0
  for (let i = 1; i < input.length - 2; i++) {
    if ((input[i - 1] + input[i] + input[i + 1]) < (input[i] + input[i + 1] + input[i + 2])) {
      increase++
    }
  }
  // console.log('this is for advent2 increases ' + increase)
}

let inputDay2 = ['forward 5',
  'down 7',
  'forward 8',
  'forward 1',
  'forward 1',
  'down 1',
  'down 9',
  'up 4',
  'down 5',
  'down 3',
  'up 1',
  'up 1',
  'forward 1',
  'up 2',
  'forward 5',
  'forward 4',
  'forward 7',
  'down 4',
  'up 9',
  'forward 5',
  'down 5',
  'forward 2',
  'forward 1',
  'forward 3',
  'down 6',
  'up 8',
  'up 8',
  'forward 8',
  'up 7',
  'down 3',
  'down 4',
  'forward 2',
  'down 9',
  'forward 9',
  'down 7',
  'down 9',
  'forward 8',
  'down 5',
  'forward 9',
  'forward 2',
  'forward 7',
  'down 4',
  'forward 8',
  'down 4',
  'up 7',
  'forward 7',
  'forward 7',
  'forward 5',
  'forward 1',
  'down 1',
  'down 5',
  'forward 9',
  'forward 9',
  'down 2',
  'down 2',
  'down 2',
  'forward 4',
  'forward 3',
  'forward 2',
  'down 7',
  'down 7',
  'forward 8',
  'forward 3',
  'forward 1',
  'up 4',
  'forward 9',
  'down 1',
  'up 2',
  'forward 3',
  'forward 7',
  'up 6',
  'up 9',
  'forward 4',
  'down 8',
  'down 5',
  'down 9',
  'forward 9',
  'forward 4',
  'forward 5',
  'forward 3',
  'down 9',
  'forward 1',
  'forward 7',
  'down 5',
  'forward 5',
  'forward 3',
  'down 6',
  'down 5',
  'down 8',
  'forward 6',
  'down 2',
  'forward 2',
  'down 6',
  'forward 1',
  'up 5',
  'up 3',
  'forward 7',
  'down 2',
  'forward 2',
  'forward 1',
  'forward 9',
  'up 9',
  'up 3',
  'forward 5',
  'down 5',
  'forward 9',
  'up 9',
  'down 7',
  'down 1',
  'up 9',
  'down 7',
  'up 4',
  'forward 1',
  'up 2',
  'up 5',
  'down 2',
  'forward 1',
  'down 3',
  'forward 5',
  'down 4',
  'down 1',
  'down 2',
  'down 4',
  'down 5',
  'forward 3',
  'forward 2',
  'forward 6',
  'forward 8',
  'forward 6',
  'down 4',
  'up 7',
  'forward 2',
  'down 3',
  'down 7',
  'down 1',
  'forward 7',
  'forward 1',
  'forward 9',
  'forward 8',
  'forward 3',
  'up 8',
  'forward 4',
  'up 7',
  'up 8',
  'forward 2',
  'forward 5',
  'down 2',
  'down 1',
  'forward 1',
  'up 6',
  'down 7',
  'forward 2',
  'up 6',
  'up 2',
  'forward 5',
  'down 5',
  'forward 5',
  'forward 3',
  'up 7',
  'forward 1',
  'down 3',
  'forward 4',
  'up 5',
  'forward 6',
  'forward 1',
  'up 6',
  'up 7',
  'forward 1',
  'forward 2',
  'up 6',
  'up 6',
  'forward 1',
  'forward 5',
  'up 9',
  'down 4',
  'down 9',
  'down 2',
  'down 5',
  'down 7',
  'down 3',
  'down 2',
  'down 7',
  'forward 8',
  'down 1',
  'forward 6',
  'forward 4',
  'up 8',
  'up 6',
  'forward 5',
  'forward 3',
  'forward 3',
  'down 9',
  'up 1',
  'up 3',
  'up 1',
  'up 8',
  'up 9',
  'down 5',
  'down 5',
  'forward 2',
  'forward 5',
  'down 9',
  'down 1',
  'down 4',
  'forward 5',
  'up 9',
  'forward 2',
  'forward 8',
  'up 1',
  'down 9',
  'down 9',
  'down 2',
  'down 9',
  'up 5',
  'forward 7',
  'down 3',
  'forward 3',
  'down 2',
  'forward 4',
  'forward 9',
  'forward 6',
  'down 1',
  'down 4',
  'down 4',
  'down 7',
  'down 6',
  'down 7',
  'forward 8',
  'forward 1',
  'forward 6',
  'forward 8',
  'up 1',
  'down 2',
  'down 8',
  'forward 4',
  'forward 2',
  'down 1',
  'down 1',
  'down 9',
  'forward 4',
  'down 3',
  'down 5',
  'down 7',
  'down 8',
  'forward 9',
  'forward 9',
  'forward 4',
  'down 9',
  'down 5',
  'up 3',
  'up 2',
  'forward 9',
  'down 6',
  'forward 4',
  'down 9',
  'forward 9',
  'up 6',
  'up 3',
  'forward 3',
  'down 1',
  'up 1',
  'forward 1',
  'forward 8',
  'up 4',
  'up 9',
  'forward 9',
  'down 9',
  'up 4',
  'down 4',
  'up 7',
  'forward 1',
  'down 7',
  'forward 9',
  'down 3',
  'forward 5',
  'forward 4',
  'down 1',
  'down 6',
  'down 5',
  'down 2',
  'forward 7',
  'down 2',
  'forward 1',
  'down 6',
  'forward 8',
  'down 3',
  'down 7',
  'down 1',
  'down 8',
  'up 4',
  'forward 7',
  'forward 9',
  'forward 1',
  'forward 9',
  'forward 8',
  'forward 9',
  'down 4',
  'up 6',
  'down 2',
  'up 8',
  'down 7',
  'down 5',
  'up 2',
  'up 7',
  'down 9',
  'up 1',
  'forward 1',
  'down 9',
  'forward 9',
  'forward 2',
  'forward 1',
  'up 9',
  'down 5',
  'down 1',
  'forward 7',
  'down 5',
  'forward 6',
  'down 3',
  'forward 2',
  'up 4',
  'down 8',
  'down 9',
  'down 9',
  'forward 6',
  'forward 6',
  'down 2',
  'forward 7',
  'up 2',
  'forward 4',
  'down 6',
  'down 4',
  'up 1',
  'up 5',
  'up 2',
  'down 7',
  'down 4',
  'down 4',
  'up 7',
  'forward 8',
  'up 5',
  'down 3',
  'forward 9',
  'forward 8',
  'down 5',
  'forward 2',
  'up 5',
  'down 6',
  'down 8',
  'forward 2',
  'forward 7',
  'up 8',
  'forward 3',
  'up 4',
  'up 8',
  'forward 8',
  'forward 2',
  'forward 8',
  'down 4',
  'down 9',
  'down 1',
  'down 4',
  'down 3',
  'forward 9',
  'forward 5',
  'down 8',
  'forward 7',
  'down 4',
  'up 1',
  'down 4',
  'down 9',
  'forward 4',
  'forward 9',
  'down 8',
  'down 4',
  'down 2',
  'forward 5',
  'forward 2',
  'forward 4',
  'forward 4',
  'forward 5',
  'down 4',
  'up 4',
  'up 9',
  'down 7',
  'forward 2',
  'up 5',
  'forward 3',
  'down 5',
  'down 8',
  'down 8',
  'down 4',
  'forward 9',
  'forward 4',
  'forward 3',
  'down 4',
  'down 4',
  'down 3',
  'up 6',
  'up 2',
  'forward 4',
  'up 8',
  'down 1',
  'forward 2',
  'forward 4',
  'down 7',
  'forward 7',
  'forward 3',
  'down 3',
  'down 1',
  'up 6',
  'up 7',
  'down 9',
  'up 7',
  'forward 9',
  'forward 6',
  'forward 4',
  'down 2',
  'forward 4',
  'forward 4',
  'forward 9',
  'down 5',
  'forward 4',
  'down 9',
  'up 9',
  'up 6',
  'forward 6',
  'down 6',
  'forward 4',
  'down 3',
  'forward 4',
  'down 9',
  'up 1',
  'down 5',
  'down 4',
  'forward 4',
  'down 7',
  'down 3',
  'down 6',
  'down 5',
  'forward 4',
  'forward 3',
  'down 5',
  'forward 6',
  'down 3',
  'up 2',
  'down 2',
  'up 5',
  'down 4',
  'forward 9',
  'forward 1',
  'down 8',
  'forward 8',
  'up 9',
  'down 3',
  'down 4',
  'forward 1',
  'forward 2',
  'up 3',
  'down 9',
  'up 9',
  'forward 3',
  'down 8',
  'forward 7',
  'forward 4',
  'forward 2',
  'up 9',
  'forward 5',
  'forward 7',
  'forward 9',
  'up 4',
  'forward 2',
  'forward 7',
  'down 6',
  'down 2',
  'up 5',
  'forward 3',
  'down 8',
  'up 9',
  'forward 1',
  'forward 9',
  'down 1',
  'up 3',
  'down 5',
  'up 8',
  'down 1',
  'forward 1',
  'forward 8',
  'forward 7',
  'up 9',
  'forward 6',
  'forward 5',
  'forward 9',
  'down 2',
  'forward 4',
  'down 9',
  'forward 1',
  'up 4',
  'forward 2',
  'down 9',
  'down 8',
  'down 5',
  'up 9',
  'forward 6',
  'down 7',
  'up 8',
  'forward 9',
  'up 5',
  'down 3',
  'forward 2',
  'forward 5',
  'forward 6',
  'up 5',
  'forward 6',
  'down 7',
  'down 4',
  'forward 3',
  'down 8',
  'forward 9',
  'down 2',
  'forward 7',
  'down 5',
  'down 2',
  'forward 5',
  'forward 9',
  'forward 3',
  'up 3',
  'up 7',
  'down 4',
  'forward 3',
  'up 8',
  'forward 8',
  'forward 1',
  'down 4',
  'forward 4',
  'forward 2',
  'forward 6',
  'up 1',
  'down 7',
  'forward 3',
  'down 6',
  'down 7',
  'forward 4',
  'forward 5',
  'up 9',
  'forward 3',
  'forward 6',
  'down 2',
  'down 1',
  'forward 5',
  'up 6',
  'down 3',
  'forward 9',
  'down 8',
  'up 3',
  'up 5',
  'up 6',
  'down 7',
  'forward 1',
  'down 8',
  'forward 7',
  'down 3',
  'forward 1',
  'up 9',
  'down 4',
  'up 9',
  'forward 9',
  'down 4',
  'forward 3',
  'up 3',
  'down 1',
  'up 3',
  'up 6',
  'forward 9',
  'forward 6',
  'down 9',
  'down 8',
  'forward 9',
  'up 8',
  'down 8',
  'forward 4',
  'forward 3',
  'forward 2',
  'down 6',
  'down 7',
  'down 1',
  'down 2',
  'down 2',
  'down 5',
  'forward 8',
  'forward 2',
  'down 4',
  'forward 4',
  'down 5',
  'forward 9',
  'forward 1',
  'down 9',
  'up 4',
  'up 5',
  'up 9',
  'forward 5',
  'down 6',
  'up 7',
  'forward 1',
  'up 8',
  'up 3',
  'forward 2',
  'down 1',
  'forward 3',
  'up 8',
  'up 7',
  'down 8',
  'down 9',
  'forward 7',
  'down 2',
  'up 5',
  'up 8',
  'down 3',
  'forward 3',
  'forward 1',
  'up 7',
  'down 3',
  'up 9',
  'down 8',
  'up 5',
  'forward 1',
  'down 8',
  'up 4',
  'up 7',
  'down 2',
  'down 9',
  'forward 3',
  'up 4',
  'forward 4',
  'down 9',
  'forward 1',
  'forward 3',
  'forward 9',
  'up 6',
  'forward 7',
  'up 8',
  'forward 5',
  'down 2',
  'down 2',
  'forward 4',
  'down 6',
  'forward 7',
  'forward 9',
  'up 8',
  'forward 2',
  'up 6',
  'forward 6',
  'forward 1',
  'forward 5',
  'forward 9',
  'forward 5',
  'forward 1',
  'forward 8',
  'forward 4',
  'forward 1',
  'down 2',
  'forward 3',
  'forward 8',
  'forward 6',
  'forward 1',
  'down 7',
  'forward 1',
  'up 2',
  'forward 6',
  'up 2',
  'up 8',
  'down 3',
  'down 9',
  'forward 2',
  'forward 3',
  'up 9',
  'down 7',
  'forward 6',
  'up 3',
  'forward 4',
  'forward 1',
  'up 4',
  'down 1',
  'down 3',
  'down 7',
  'down 4',
  'forward 4',
  'forward 5',
  'up 6',
  'down 4',
  'down 9',
  'down 2',
  'forward 4',
  'down 6',
  'forward 4',
  'forward 5',
  'forward 3',
  'down 9',
  'down 3',
  'up 8',
  'down 2',
  'down 8',
  'up 3',
  'down 1',
  'forward 1',
  'forward 3',
  'down 8',
  'up 3',
  'up 8',
  'up 1',
  'down 3',
  'down 9',
  'down 9',
  'down 6',
  'forward 9',
  'down 7',
  'down 7',
  'down 4',
  'forward 3',
  'forward 3',
  'down 2',
  'down 6',
  'up 9',
  'forward 9',
  'down 9',
  'forward 9',
  'down 8',
  'down 1',
  'up 3',
  'forward 4',
  'up 2',
  'forward 8',
  'up 9',
  'forward 8',
  'up 5',
  'forward 9',
  'down 7',
  'forward 9',
  'forward 7',
  'down 9',
  'down 6',
  'down 5',
  'forward 5',
  'forward 1',
  'forward 8',
  'up 1',
  'up 7',
  'up 5',
  'forward 3',
  'down 1',
  'forward 4',
  'up 6',
  'up 3',
  'down 1',
  'forward 4',
  'down 4',
  'forward 4',
  'forward 5',
  'down 2',
  'down 7',
  'down 1',
  'forward 5',
  'forward 2',
  'forward 5',
  'forward 1',
  'forward 1',
  'down 7',
  'up 7',
  'forward 8',
  'down 7',
  'forward 6',
  'forward 2',
  'down 9',
  'forward 2',
  'down 7',
  'down 5',
  'up 1',
  'down 6',
  'down 7',
  'down 6',
  'down 1',
  'forward 5',
  'down 5',
  'forward 6',
  'up 9',
  'forward 9',
  'up 1',
  'down 9',
  'forward 4',
  'down 6',
  'down 2',
  'forward 3',
  'down 9',
  'up 6',
  'forward 1',
  'down 2',
  'forward 8',
  'forward 7',
  'forward 4',
  'forward 2',
  'forward 7',
  'forward 1',
  'down 9',
  'forward 7',
  'down 4',
  'up 6',
  'down 7',
  'forward 1',
  'up 8',
  'forward 5',
  'up 3',
  'up 1',
  'down 6',
  'forward 9',
  'up 7',
  'up 5',
  'down 2',
  'up 9',
  'up 4',
  'forward 1',
  'forward 1',
  'forward 9',
  'down 3',
  'down 6',
  'forward 1',
  'up 6',
  'up 9',
  'down 9',
  'forward 7',
  'forward 8',
  'up 9',
  'up 4',
  'down 8',
  'up 3',
  'down 8',
  'forward 9',
  'down 3',
  'down 6',
  'forward 7',
  'up 4',
  'forward 7',
  'down 2',
  'down 6',
  'up 4',
  'down 8',
  'down 4',
  'down 2',
  'up 5',
  'down 4',
  'down 2',
  'forward 9',
  'up 9',
  'forward 3',
  'down 9',
  'up 1',
  'down 8',
  'down 5',
  'forward 5',
  'forward 3',
  'up 3',
  'forward 9',
  'down 1',
  'forward 1',
  'up 2',
  'down 9',
  'forward 5',
  'forward 6',
  'up 3',
  'forward 2',
  'forward 8',
  'down 9',
  'up 7',
  'down 8',
  'up 5',
  'forward 9',
  'forward 3',
  'down 7',
  'forward 9',
  'down 8',
  'forward 7',
  'down 6',
  'down 6',
  'down 1',
  'up 4',
  'up 1',
  'forward 3',
  'down 7',
  'up 3',
  'down 3',
  'forward 5',
  'down 8',
  'forward 2',
  'down 9',
  'forward 6',
  'down 6',
  'down 6',
  'forward 9',
  'down 2',
  'forward 6',
  'up 7',
  'down 3',
  'up 5',
  'forward 4',
  'down 7',
  'forward 8',
  'forward 9',
  'forward 7',
  'down 3',
  'forward 7',
  'forward 2',
  'down 6',
  'forward 6',
  'down 2',
  'down 1',
  'forward 4',
  'forward 5',
  'up 6',
  'forward 7',
  'up 3',
  'up 5',
  'forward 2',
  'forward 8',
  'forward 9',
  'down 2',
  'forward 4',
  'forward 5',
  'down 7',
  'up 8',
  'forward 9',
  'forward 9',
  'down 3',
  'down 1',
  'forward 2',
  'forward 2',
  'down 9',
  'up 5',
  'down 5',
  'up 5',
  'down 2',
  'forward 1',
  'down 2',
  'down 9',
  'down 1',
  'forward 2',
  'down 9',
  'down 1',
  'forward 7',
  'down 8',
  'down 5',
  'down 1',
  'up 5',
  'forward 4',
  'down 8',
  'down 6',
  'down 6',
  'forward 9',
  'up 7',
  'up 2',
  'up 8',
  'down 1',
  'forward 9',
  'down 9',
  'down 5',
  'forward 2',
  'down 7',
  'up 8',
  'forward 5',
  'up 2',
  'down 1',
  'down 8',
  'up 5',
  'forward 1',
  'forward 1',
  'down 7',
  'up 2',
  'down 3',
  'up 6',
  'down 6',
  'forward 7',
  'down 3',
  'forward 8',
  'down 1',
  'down 4',
  'down 3',
  'up 8',
  'down 9',
  'up 2',
  'up 5',
  'forward 2',
  'forward 5',
  'forward 8',
  'up 7',
  'forward 4',
  'forward 2',
  'forward 2',
  'forward 3',
  'up 4',
  'down 3',
  'forward 7',
  'forward 9',
  'forward 7',
]

function day2Dive() {
  let horizontal = 0
  let depth = 0
  for (let i = 0; i < inputDay2.length; i++) {
    inputDay2[i].startsWith("for") ? horizontal += parseInt(inputDay2[i][inputDay2[i].length - 1]) : inputDay2[i].startsWith("up") ? depth -= parseInt(inputDay2[i][inputDay2[i].length - 1]) : depth += parseInt(inputDay2[i][inputDay2[i].length - 1])
  }
  // console.log('number of horizontals = ' + horizontal)
  // console.log('number of depth units = ' + depth)
}

function day2DiveP2() {
  let horizontal = 0
  let depth = 0
  let aim = 0
  for (let i = 0; i < inputDay2.length; i++) {
    if (inputDay2[i].startsWith("for")) {
      horizontal += parseInt(inputDay2[i][inputDay2[i].length - 1])
      depth += (aim * parseInt(inputDay2[i][inputDay2[i].length - 1]))
    } else {
      inputDay2[i].startsWith("up") ? aim -= parseInt(inputDay2[i][inputDay2[i].length - 1]) : aim += parseInt(inputDay2[i][inputDay2[i].length - 1])
    }
  }
  // console.log('number of horizontals = ' + horizontal)
  // console.log('number of depth units = ' + depth)
  // console.log('number of aim units = ' + aim)
}

const fs = require("fs");

const lines = fs
  .readFileSync("day03.txt", { encoding: "utf-8" })
  .split("\n")
// .filter((x) => Boolean(x))
// .map((x) => parseInt(x));

// console.log(lines)
// console.log(lines.length)
// console.log(lines[0].length)
// console.log(lines[0])
// console.log(lines[1].length)

function day3Binary() {
  let gamma = ''
  let epsilon = ''
  for (let j = 0; j < lines[j].length - 1; j++) {
    let zeros = 0
    let ones = 0
    for (let i = 0; i < lines.length; i++) {
      lines[i][j] == 0 ? zeros++ : ones++
    }
    zeros > ones ? gamma += '0' : gamma += '1'
    zeros > ones ? epsilon += '1' : epsilon += '0'
  }
  let gammaDecimal = 0
  let epsilonDecimal = 0
  let multiple = 1
  for (let i = gamma.length - 1; i >= 0; i--) {
    if (gamma[i] == '1') {
      gammaDecimal += multiple
    }
    multiple *= 2
  }
  multiple = 1
  for (let i = epsilon.length - 1; i >= 0; i--) {
    if (epsilon[i] == '1') {
      epsilonDecimal += multiple
    }
    multiple *= 2
  }
  console.log(epsilonDecimal * gammaDecimal)
}

function day3Binary2() {
  let oxygenGeneratorRating = 0
  let co2ScrubberRating = 0
  for (let i = 0; i < lines[i].length - 1; i++) {
    let mostFrequent = null
    let zeros = 0
    let ones = 0
    for (let j = 0; j < lines.length; j++) {
      lines[j][i] == 0 ? zeros++ : ones++
    }
    zeros > ones ? mostFrequent = 0 : mostFrequent = 1
    for (let k = 0; k < lines[k].length; k++) {
      if (!lines[k] == mostFrequent) {
        lines.splice(k, 1)
      }
    }
    console.log(lines)
  }
}

day3Binary2()