
export enum HashType {
    MD5 = 0,
    SHA1 = 1,
    SHA512 = 2,
}

export enum PerceivedTypes {
    None = 0,
    Image = 1,
    Text = 2,
    Audio = 3,
    Video = 4,
    Compressed = 5,
    System = 6,
}

export enum EditFlags {
    None = 0,
    Exclude = 1,
    Show = 2,
    HasExtension = 4,
    NoEdit = 8,
    NoRemove = 16,
    NoNewVerb = 32,
    NoEditVerb = 64,
    NoRemoveVerb = 128,
    NoEditDesc = 256,
    NoEditIcon = 512,
    NoEditDflt = 1024,
    NoEditVerbCmd = 2048,
    NoEditVerbExe = 4096,
    NoDDE = 8192,
    NoEditMIME = 32768,
    OpenIsSafe = 65536,
    AlwaysUnsafe = 131072,
    AlwaysShowExtension = 262144,
    NoRecentDocuments = 1048576,
}

export enum Cultures {
    UnKnown = 0,
    aa = 1,
    aa_DJ = 2,
    aa_ER = 3,
    aa_ET = 4,
    af = 5,
    af_NA = 6,
    af_ZA = 7,
    agq = 8,
    agq_CM = 9,
    ak = 10,
    ak_GH = 11,
    am = 12,
    am_ET = 13,
    ar = 14,
    ar_001 = 15,
    ar_AE = 16,
    ar_BH = 17,
    ar_DJ = 18,
    ar_DZ = 19,
    ar_EG = 20,
    ar_ER = 21,
    ar_IL = 22,
    ar_IQ = 23,
    ar_JO = 24,
    ar_KM = 25,
    ar_KW = 26,
    ar_LB = 27,
    ar_LY = 28,
    ar_MA = 29,
    ar_MR = 30,
    ar_OM = 31,
    ar_PS = 32,
    ar_QA = 33,
    ar_SA = 34,
    ar_SD = 35,
    ar_SO = 36,
    ar_SS = 37,
    ar_SY = 38,
    ar_TD = 39,
    ar_TN = 40,
    ar_YE = 41,
    arn = 42,
    arn_CL = 43,
    as_ = 44,
    as_IN = 45,
    asa = 46,
    asa_TZ = 47,
    ast = 48,
    ast_ES = 49,
    az = 50,
    az_Cyrl = 51,
    az_Cyrl_AZ = 52,
    az_Latn = 53,
    az_Latn_AZ = 54,
    ba = 55,
    ba_RU = 56,
    bas = 57,
    bas_CM = 58,
    be = 59,
    be_BY = 60,
    bem = 61,
    bem_ZM = 62,
    bez = 63,
    bez_TZ = 64,
    bg = 65,
    bg_BG = 66,
    bin = 67,
    bin_NG = 68,
    bm = 69,
    bm_Latn = 70,
    bm_Latn_ML = 71,
    bn = 72,
    bn_BD = 73,
    bn_IN = 74,
    bo = 75,
    bo_CN = 76,
    bo_IN = 77,
    br = 78,
    br_FR = 79,
    brx = 80,
    brx_IN = 81,
    bs = 82,
    bs_Cyrl = 83,
    bs_Cyrl_BA = 84,
    bs_Latn = 85,
    bs_Latn_BA = 86,
    byn = 87,
    byn_ER = 88,
    ca = 89,
    ca_AD = 90,
    ca_ES = 91,
    ca_ES_valencia = 92,
    ca_FR = 93,
    ca_IT = 94,
    ce = 95,
    ce_RU = 96,
    cgg = 97,
    cgg_UG = 98,
    chr = 99,
    chr_Cher = 100,
    chr_Cher_US = 101,
    co = 102,
    co_FR = 103,
    cs = 104,
    cs_CZ = 105,
    cu = 106,
    cu_RU = 107,
    cy = 108,
    cy_GB = 109,
    da = 110,
    da_DK = 111,
    da_GL = 112,
    dav = 113,
    dav_KE = 114,
    de = 115,
    de_AT = 116,
    de_BE = 117,
    de_CH = 118,
    de_DE = 119,
    de_IT = 120,
    de_LI = 121,
    de_LU = 122,
    dje = 123,
    dje_NE = 124,
    dsb = 125,
    dsb_DE = 126,
    dua = 127,
    dua_CM = 128,
    dv = 129,
    dv_MV = 130,
    dyo = 131,
    dyo_SN = 132,
    dz = 133,
    dz_BT = 134,
    ebu = 135,
    ebu_KE = 136,
    ee = 137,
    ee_GH = 138,
    ee_TG = 139,
    el = 140,
    el_CY = 141,
    el_GR = 142,
    en = 143,
    en_001 = 144,
    en_029 = 145,
    en_150 = 146,
    en_AG = 147,
    en_AI = 148,
    en_AS = 149,
    en_AT = 150,
    en_AU = 151,
    en_BB = 152,
    en_BE = 153,
    en_BI = 154,
    en_BM = 155,
    en_BS = 156,
    en_BW = 157,
    en_BZ = 158,
    en_CA = 159,
    en_CC = 160,
    en_CH = 161,
    en_CK = 162,
    en_CM = 163,
    en_CX = 164,
    en_CY = 165,
    en_DE = 166,
    en_DK = 167,
    en_DM = 168,
    en_ER = 169,
    en_FI = 170,
    en_FJ = 171,
    en_FK = 172,
    en_FM = 173,
    en_GB = 174,
    en_GD = 175,
    en_GG = 176,
    en_GH = 177,
    en_GI = 178,
    en_GM = 179,
    en_GU = 180,
    en_GY = 181,
    en_HK = 182,
    en_ID = 183,
    en_IE = 184,
    en_IL = 185,
    en_IM = 186,
    en_IN = 187,
    en_IO = 188,
    en_JE = 189,
    en_JM = 190,
    en_KE = 191,
    en_KI = 192,
    en_KN = 193,
    en_KY = 194,
    en_LC = 195,
    en_LR = 196,
    en_LS = 197,
    en_MG = 198,
    en_MH = 199,
    en_MO = 200,
    en_MP = 201,
    en_MS = 202,
    en_MT = 203,
    en_MU = 204,
    en_MW = 205,
    en_MY = 206,
    en_NA = 207,
    en_NF = 208,
    en_NG = 209,
    en_NL = 210,
    en_NR = 211,
    en_NU = 212,
    en_NZ = 213,
    en_PG = 214,
    en_PH = 215,
    en_PK = 216,
    en_PN = 217,
    en_PR = 218,
    en_PW = 219,
    en_RW = 220,
    en_SB = 221,
    en_SC = 222,
    en_SD = 223,
    en_SE = 224,
    en_SG = 225,
    en_SH = 226,
    en_SI = 227,
    en_SL = 228,
    en_SS = 229,
    en_SX = 230,
    en_SZ = 231,
    en_TC = 232,
    en_TK = 233,
    en_TO = 234,
    en_TT = 235,
    en_TV = 236,
    en_TZ = 237,
    en_UG = 238,
    en_UM = 239,
    en_US = 240,
    en_VC = 241,
    en_VG = 242,
    en_VI = 243,
    en_VU = 244,
    en_WS = 245,
    en_ZA = 246,
    en_ZM = 247,
    en_ZW = 248,
    eo = 249,
    eo_001 = 250,
    es = 251,
    es_419 = 252,
    es_AR = 253,
    es_BO = 254,
    es_BR = 255,
    es_BZ = 256,
    es_CL = 257,
    es_CO = 258,
    es_CR = 259,
    es_CU = 260,
    es_DO = 261,
    es_EC = 262,
    es_ES = 263,
    es_GQ = 264,
    es_GT = 265,
    es_HN = 266,
    es_MX = 267,
    es_NI = 268,
    es_PA = 269,
    es_PE = 270,
    es_PH = 271,
    es_PR = 272,
    es_PY = 273,
    es_SV = 274,
    es_US = 275,
    es_UY = 276,
    es_VE = 277,
    et = 278,
    et_EE = 279,
    eu = 280,
    eu_ES = 281,
    ewo = 282,
    ewo_CM = 283,
    fa = 284,
    fa_IR = 285,
    ff = 286,
    ff_CM = 287,
    ff_GN = 288,
    ff_Latn = 289,
    ff_Latn_SN = 290,
    ff_MR = 291,
    ff_NG = 292,
    fi = 293,
    fi_FI = 294,
    fil = 295,
    fil_PH = 296,
    fo = 297,
    fo_DK = 298,
    fo_FO = 299,
    fr = 300,
    fr_029 = 301,
    fr_BE = 302,
    fr_BF = 303,
    fr_BI = 304,
    fr_BJ = 305,
    fr_BL = 306,
    fr_CA = 307,
    fr_CD = 308,
    fr_CF = 309,
    fr_CG = 310,
    fr_CH = 311,
    fr_CI = 312,
    fr_CM = 313,
    fr_DJ = 314,
    fr_DZ = 315,
    fr_FR = 316,
    fr_GA = 317,
    fr_GF = 318,
    fr_GN = 319,
    fr_GP = 320,
    fr_GQ = 321,
    fr_HT = 322,
    fr_KM = 323,
    fr_LU = 324,
    fr_MA = 325,
    fr_MC = 326,
    fr_MF = 327,
    fr_MG = 328,
    fr_ML = 329,
    fr_MQ = 330,
    fr_MR = 331,
    fr_MU = 332,
    fr_NC = 333,
    fr_NE = 334,
    fr_PF = 335,
    fr_PM = 336,
    fr_RE = 337,
    fr_RW = 338,
    fr_SC = 339,
    fr_SN = 340,
    fr_SY = 341,
    fr_TD = 342,
    fr_TG = 343,
    fr_TN = 344,
    fr_VU = 345,
    fr_WF = 346,
    fr_YT = 347,
    fur = 348,
    fur_IT = 349,
    fy = 350,
    fy_NL = 351,
    ga = 352,
    ga_IE = 353,
    gd = 354,
    gd_GB = 355,
    gl = 356,
    gl_ES = 357,
    gn = 358,
    gn_PY = 359,
    gsw = 360,
    gsw_CH = 361,
    gsw_FR = 362,
    gsw_LI = 363,
    gu = 364,
    gu_IN = 365,
    guz = 366,
    guz_KE = 367,
    gv = 368,
    gv_IM = 369,
    ha = 370,
    ha_Latn = 371,
    ha_Latn_GH = 372,
    ha_Latn_NE = 373,
    ha_Latn_NG = 374,
    haw = 375,
    haw_US = 376,
    he = 377,
    he_IL = 378,
    hi = 379,
    hi_IN = 380,
    hr = 381,
    hr_BA = 382,
    hr_HR = 383,
    hsb = 384,
    hsb_DE = 385,
    hu = 386,
    hu_HU = 387,
    hy = 388,
    hy_AM = 389,
    ia = 390,
    ia_001 = 391,
    ia_FR = 392,
    ibb = 393,
    ibb_NG = 394,
    id = 395,
    id_ID = 396,
    ig = 397,
    ig_NG = 398,
    ii = 399,
    ii_CN = 400,
    is_ = 401,
    is_IS = 402,
    it = 403,
    it_CH = 404,
    it_IT = 405,
    it_SM = 406,
    it_VA = 407,
    iu = 408,
    iu_Cans = 409,
    iu_Cans_CA = 410,
    iu_Latn = 411,
    iu_Latn_CA = 412,
    ja = 413,
    ja_JP = 414,
    jgo = 415,
    jgo_CM = 416,
    jmc = 417,
    jmc_TZ = 418,
    jv = 419,
    jv_Java = 420,
    jv_Java_ID = 421,
    jv_Latn = 422,
    jv_Latn_ID = 423,
    ka = 424,
    ka_GE = 425,
    kab = 426,
    kab_DZ = 427,
    kam = 428,
    kam_KE = 429,
    kde = 430,
    kde_TZ = 431,
    kea = 432,
    kea_CV = 433,
    khq = 434,
    khq_ML = 435,
    ki = 436,
    ki_KE = 437,
    kk = 438,
    kk_KZ = 439,
    kkj = 440,
    kkj_CM = 441,
    kl = 442,
    kl_GL = 443,
    kln = 444,
    kln_KE = 445,
    km = 446,
    km_KH = 447,
    kn = 448,
    kn_IN = 449,
    ko = 450,
    ko_KP = 451,
    ko_KR = 452,
    kok = 453,
    kok_IN = 454,
    kr = 455,
    kr_NG = 456,
    ks = 457,
    ks_Arab = 458,
    ks_Arab_IN = 459,
    ks_Deva = 460,
    ks_Deva_IN = 461,
    ksb = 462,
    ksb_TZ = 463,
    ksf = 464,
    ksf_CM = 465,
    ksh = 466,
    ksh_DE = 467,
    ku = 468,
    ku_Arab = 469,
    ku_Arab_IQ = 470,
    ku_Arab_IR = 471,
    kw = 472,
    kw_GB = 473,
    ky = 474,
    ky_KG = 475,
    la = 476,
    la_001 = 477,
    lag = 478,
    lag_TZ = 479,
    lb = 480,
    lb_LU = 481,
    lg = 482,
    lg_UG = 483,
    lkt = 484,
    lkt_US = 485,
    ln = 486,
    ln_AO = 487,
    ln_CD = 488,
    ln_CF = 489,
    ln_CG = 490,
    lo = 491,
    lo_LA = 492,
    lrc = 493,
    lrc_IQ = 494,
    lrc_IR = 495,
    lt = 496,
    lt_LT = 497,
    lu = 498,
    lu_CD = 499,
    luo = 500,
    luo_KE = 501,
    luy = 502,
    luy_KE = 503,
    lv = 504,
    lv_LV = 505,
    mas = 506,
    mas_KE = 507,
    mas_TZ = 508,
    mer = 509,
    mer_KE = 510,
    mfe = 511,
    mfe_MU = 512,
    mg = 513,
    mg_MG = 514,
    mgh = 515,
    mgh_MZ = 516,
    mgo = 517,
    mgo_CM = 518,
    mi = 519,
    mi_NZ = 520,
    mk = 521,
    mk_MK = 522,
    ml = 523,
    ml_IN = 524,
    mn = 525,
    mn_Cyrl = 526,
    mn_MN = 527,
    mn_Mong = 528,
    mn_Mong_CN = 529,
    mn_Mong_MN = 530,
    mni = 531,
    mni_IN = 532,
    moh = 533,
    moh_CA = 534,
    mr = 535,
    mr_IN = 536,
    ms = 537,
    ms_BN = 538,
    ms_MY = 539,
    ms_SG = 540,
    mt = 541,
    mt_MT = 542,
    mua = 543,
    mua_CM = 544,
    my = 545,
    my_MM = 546,
    mzn = 547,
    mzn_IR = 548,
    naq = 549,
    naq_NA = 550,
    nb = 551,
    nb_NO = 552,
    nb_SJ = 553,
    nd = 554,
    nd_ZW = 555,
    nds = 556,
    nds_DE = 557,
    nds_NL = 558,
    ne = 559,
    ne_IN = 560,
    ne_NP = 561,
    nl = 562,
    nl_AW = 563,
    nl_BE = 564,
    nl_BQ = 565,
    nl_CW = 566,
    nl_NL = 567,
    nl_SR = 568,
    nl_SX = 569,
    nmg = 570,
    nmg_CM = 571,
    nn = 572,
    nn_NO = 573,
    nnh = 574,
    nnh_CM = 575,
    no = 576,
    nqo = 577,
    nqo_GN = 578,
    nr = 579,
    nr_ZA = 580,
    nso = 581,
    nso_ZA = 582,
    nus = 583,
    nus_SS = 584,
    nyn = 585,
    nyn_UG = 586,
    oc = 587,
    oc_FR = 588,
    om = 589,
    om_ET = 590,
    om_KE = 591,
    or = 592,
    or_IN = 593,
    os = 594,
    os_GE = 595,
    os_RU = 596,
    pa = 597,
    pa_Arab = 598,
    pa_Arab_PK = 599,
    pa_IN = 600,
    pap = 601,
    pap_029 = 602,
    pl = 603,
    pl_PL = 604,
    prg = 605,
    prg_001 = 606,
    prs = 607,
    prs_AF = 608,
    ps = 609,
    ps_AF = 610,
    pt = 611,
    pt_AO = 612,
    pt_BR = 613,
    pt_CH = 614,
    pt_CV = 615,
    pt_GQ = 616,
    pt_GW = 617,
    pt_LU = 618,
    pt_MO = 619,
    pt_MZ = 620,
    pt_PT = 621,
    pt_ST = 622,
    pt_TL = 623,
    quc = 624,
    quc_Latn = 625,
    quc_Latn_GT = 626,
    quz = 627,
    quz_BO = 628,
    quz_EC = 629,
    quz_PE = 630,
    rm = 631,
    rm_CH = 632,
    rn = 633,
    rn_BI = 634,
    ro = 635,
    ro_MD = 636,
    ro_RO = 637,
    rof = 638,
    rof_TZ = 639,
    ru = 640,
    ru_BY = 641,
    ru_KG = 642,
    ru_KZ = 643,
    ru_MD = 644,
    ru_RU = 645,
    ru_UA = 646,
    rw = 647,
    rw_RW = 648,
    rwk = 649,
    rwk_TZ = 650,
    sa = 651,
    sa_IN = 652,
    sah = 653,
    sah_RU = 654,
    saq = 655,
    saq_KE = 656,
    sbp = 657,
    sbp_TZ = 658,
    sd = 659,
    sd_Arab = 660,
    sd_Arab_PK = 661,
    sd_Deva = 662,
    sd_Deva_IN = 663,
    se = 664,
    se_FI = 665,
    se_NO = 666,
    se_SE = 667,
    seh = 668,
    seh_MZ = 669,
    ses = 670,
    ses_ML = 671,
    sg = 672,
    sg_CF = 673,
    shi = 674,
    shi_Latn = 675,
    shi_Latn_MA = 676,
    shi_Tfng = 677,
    shi_Tfng_MA = 678,
    si = 679,
    si_LK = 680,
    sk = 681,
    sk_SK = 682,
    sl = 683,
    sl_SI = 684,
    sma = 685,
    sma_NO = 686,
    sma_SE = 687,
    smj = 688,
    smj_NO = 689,
    smj_SE = 690,
    smn = 691,
    smn_FI = 692,
    sms = 693,
    sms_FI = 694,
    sn = 695,
    sn_Latn = 696,
    sn_Latn_ZW = 697,
    so = 698,
    so_DJ = 699,
    so_ET = 700,
    so_KE = 701,
    so_SO = 702,
    sq = 703,
    sq_AL = 704,
    sq_MK = 705,
    sq_XK = 706,
    sr = 707,
    sr_Cyrl = 708,
    sr_Cyrl_BA = 709,
    sr_Cyrl_ME = 710,
    sr_Cyrl_RS = 711,
    sr_Cyrl_XK = 712,
    sr_Latn = 713,
    sr_Latn_BA = 714,
    sr_Latn_ME = 715,
    sr_Latn_RS = 716,
    sr_Latn_XK = 717,
    ss = 718,
    ss_SZ = 719,
    ss_ZA = 720,
    ssy = 721,
    ssy_ER = 722,
    st = 723,
    st_LS = 724,
    st_ZA = 725,
    sv = 726,
    sv_AX = 727,
    sv_FI = 728,
    sv_SE = 729,
    sw = 730,
    sw_CD = 731,
    sw_KE = 732,
    sw_TZ = 733,
    sw_UG = 734,
    syr = 735,
    syr_SY = 736,
    ta = 737,
    ta_IN = 738,
    ta_LK = 739,
    ta_MY = 740,
    ta_SG = 741,
    te = 742,
    te_IN = 743,
    teo = 744,
    teo_KE = 745,
    teo_UG = 746,
    tg = 747,
    tg_Cyrl = 748,
    tg_Cyrl_TJ = 749,
    th = 750,
    th_TH = 751,
    ti = 752,
    ti_ER = 753,
    ti_ET = 754,
    tig = 755,
    tig_ER = 756,
    tk = 757,
    tk_TM = 758,
    tn = 759,
    tn_BW = 760,
    tn_ZA = 761,
    to = 762,
    to_TO = 763,
    tr = 764,
    tr_CY = 765,
    tr_TR = 766,
    ts = 767,
    ts_ZA = 768,
    tt = 769,
    tt_RU = 770,
    twq = 771,
    twq_NE = 772,
    tzm = 773,
    tzm_Arab = 774,
    tzm_Arab_MA = 775,
    tzm_Latn = 776,
    tzm_Latn_DZ = 777,
    tzm_Latn_MA = 778,
    tzm_Tfng = 779,
    tzm_Tfng_MA = 780,
    ug = 781,
    ug_CN = 782,
    uk = 783,
    uk_UA = 784,
    ur = 785,
    ur_IN = 786,
    ur_PK = 787,
    uz = 788,
    uz_Arab = 789,
    uz_Arab_AF = 790,
    uz_Cyrl = 791,
    uz_Cyrl_UZ = 792,
    uz_Latn = 793,
    uz_Latn_UZ = 794,
    vai = 795,
    vai_Latn = 796,
    vai_Latn_LR = 797,
    vai_Vaii = 798,
    vai_Vaii_LR = 799,
    ve = 800,
    ve_ZA = 801,
    vi = 802,
    vi_VN = 803,
    vo = 804,
    vo_001 = 805,
    vun = 806,
    vun_TZ = 807,
    wae = 808,
    wae_CH = 809,
    wal = 810,
    wal_ET = 811,
    wo = 812,
    wo_SN = 813,
    xh = 814,
    xh_ZA = 815,
    xog = 816,
    xog_UG = 817,
    yav = 818,
    yav_CM = 819,
    yi = 820,
    yi_001 = 821,
    yo = 822,
    yo_BJ = 823,
    yo_NG = 824,
    zgh = 825,
    zgh_Tfng = 826,
    zgh_Tfng_MA = 827,
    zh = 828,
    zh_CN = 829,
    zh_Hans = 830,
    zh_Hans_HK = 831,
    zh_Hans_MO = 832,
    zh_Hant = 833,
    zh_HK = 834,
    zh_MO = 835,
    zh_SG = 836,
    zh_TW = 837,
    zu = 838,
    zu_ZA = 839,
    zh_CHS = 840,
    zh_CHT = 841,
}

export enum Gender {
    Unknown = 200,
    Male = 201,
    Female = 202,
}

export enum EBloodGroup {
    OPositive = 100,
    APositive = 101,
    BPositive = 102,
    ABPositive = 103,
    ABNegative = 104,
    ANegative = 105,
    BNegative = 106,
    ONegative = 107,
}

export enum EGender {
    Unknown = 200,
    Male = 201,
    Female = 202,
}

export enum EAddressType {
    ContactAddress = 300,
    HomeAddress = 301,
    BusinessAddress = 302,
    BillingAddress = 303,
    ResidentialAddress = 304,
}

export enum EContactType {
    Phone = 400,
    Fax = 401,
    Email = 402,
    Web = 403,
}

export enum EPersonType {
    RealPerson = 500,
    LegalPerson = 501,
}

export enum EMaritalStatus {
    Unknown = 60000,
    Single = 60001,
    Married = 60002,
    Divorced = 60003,
    Widow = 60004,
    TerminationOfMarriage = 60005,
    CancellationOfMarriage = 60006,
}

export enum Countries {
    Turkiye = 1,
    ABD = 2,
    Afganistan = 3,
    Almanya = 4,
    AmerikaKucukOutAdalari = 5,
    AmerikanSamoa = 6,
    AmerikanVirginAdalari = 7,
    Andorra = 8,
    Angola = 9,
    Anguilla = 10,
    Antartika = 11,
    AntiguaBarbuda = 12,
    Arjantin = 13,
    Arnavutluk = 14,
    Aruba = 15,
    Avustralya = 16,
    Avusturya = 17,
    AzerbaycanNahc = 18,
    Bahamalar = 19,
    Bahreyn = 20,
    Banglades = 21,
    Barbados = 22,
    BatiTimor = 23,
    Belcika = 24,
    Belize = 25,
    Benin = 26,
    Bermuda = 27,
    BeyazRusya = 28,
    Bhutan = 29,
    BirlesikArapEmirlikleri = 30,
    Bolivya = 31,
    BosnaHersek = 32,
    Botsvana = 33,
    BouvetAdasi = 34,
    Brezilya = 35,
    Brunei = 36,
    Bulgaristan = 37,
    BurkinaFaso = 38,
    BurmaBirmanya = 39,
    Burundi = 40,
    CapeVerde = 41,
    CaymanAdalari = 42,
    Cebelitarik = 43,
    Ceuta = 44,
    Cezayir = 45,
    Cibuti = 46,
    CocosAdalari = 47,
    CookAdasi = 48,
    Cad = 49,
    CekCumhuriyeti = 50,
    CinHalkCumhur = 51,
    Danimarka = 52,
    DominikCumhur = 53,
    Dominika = 54,
    Ekvator = 55,
    EkvatorGinesi = 56,
    ElSalvador = 57,
    Endonezya = 58,
    Eritre = 59,
    Ermenistan = 60,
    Estonya = 61,
    Etiyopya = 62,
    FalklandAdalari = 63,
    FaroeAdalari = 64,
    Fas = 65,
    Fiji = 66,
    FildisiSahili = 67,
    Filipinler = 68,
    Finlandiya = 69,
    Fransa = 70,
    FransaGuneyBolgeleri = 71,
    FransizPolinezyasi = 72,
    Gabon = 73,
    Gambiya = 74,
    Gana = 75,
    Gine = 76,
    GineBissau = 77,
    Grenada = 78,
    Gronland = 79,
    Guam = 80,
    Guatemala = 81,
    Guyana = 82,
    GuneyAfrikaCum = 83,
    GuneyGeorgiaVeGuneySandvicAdalari = 84,
    GuneyKoreCum = 85,
    Gurcistan = 86,
    Haiti = 87,
    HeardAdalaiVeMcDonaldAdasi = 88,
    Hirvatistan = 89,
    Hindistan = 90,
    Hollanda = 91,
    HollandaAntilleri = 92,
    Honduras = 93,
    HongKong = 94,
    Irak = 95,
    IngilizHintOkyanusuTopraklari = 96,
    IngilizVirginAdalari = 97,
    Ingiltere = 98,
    Iran = 99,
    Irlanda = 100,
    Ispanya = 101,
    Israil = 102,
    Isvec = 103,
    Isvicre = 104,
    IsgalAltindakiFilistinTopraklari = 105,
    Italya = 106,
    Izlanda = 107,
    Jamaika = 108,
    Japonya = 109,
    Kambocya = 110,
    Kamerun = 111,
    Kanada = 112,
    Karadag = 113,
    Katar = 114,
    Kazakistan = 115,
    Kenya = 116,
    KibrisRumKes = 117,
    Kirgizistan = 118,
    Kiribati = 119,
    Kolombiya = 120,
    Komorlar = 121,
    Kongo = 122,
    KongoDemCum = 123,
    Kosova = 124,
    KostaRika = 125,
    KrismisAdalari = 126,
    Kuveyt = 127,
    KuzeyKore = 128,
    KuzeyMarianaAdalari = 129,
    Kuba = 130,
    LaosDemokHalkC = 131,
    Lesoto = 132,
    Letonya = 133,
    Liechtenstein = 134,
    Liberya = 135,
    Libya = 136,
    Litvanya = 137,
    Lubnan = 138,
    Luksemburg = 139,
    Macaristan = 140,
    Madagaskar = 141,
    Makao = 142,
    Makedonya = 143,
    Malavi = 144,
    Maldivler = 145,
    Malezya = 146,
    Mali = 147,
    Malta = 148,
    MarshalAdalari = 149,
    Martinik = 150,
    Mauritius = 151,
    Mayotte = 152,
    Meksika = 153,
    Melilla = 154,
    Misir = 155,
    Mikronezya = 156,
    Mogolistan = 157,
    Moldovya = 158,
    Montserrat = 159,
    Moritanya = 160,
    Mozambik = 161,
    Namibya = 162,
    Nauru = 163,
    Nepal = 164,
    NiueAdasi = 165,
    Nijer = 166,
    Nijerya = 167,
    Nikaragua = 168,
    NorfolkAdasi = 169,
    Norvec = 170,
    OrtaAfrikaCum = 171,
    Ozbekistan = 172,
    Pakistan = 173,
    Palau = 174,
    Panama = 175,
    PapuaYeniGine = 176,
    Paraguay = 177,
    Peru = 178,
    Pitcairn = 179,
    Polonya = 180,
    Portekiz = 181,
    Romanya = 182,
    Ruanda = 183,
    RusyaFederasyonu = 184,
    Samoa = 185,
    SanMarino = 186,
    SaoTomeVePrin = 187,
    Senegal = 188,
    Seyseller = 189,
    Sirbistan = 190,
    SierraLeone = 191,
    Singapur = 192,
    SlovakCumhuriyeti = 193,
    Slovenya = 194,
    SolomonAdalari = 195,
    Somali = 196,
    SriLanka = 197,
    StHelena = 198,
    StKittsVeNevis = 199,
    StPierreVeMiquelon = 200,
    StLucia = 201,
    StVincentVeGrenadines = 202,
    Sudan = 203,
    Surinam = 204,
    SuriyeArapCumhuriyeti = 205,
    SuudiArabistan = 206,
    Svaziland = 207,
    Sili = 208,
    Tacikistan = 209,
    Tanzanya = 210,
    Tayland = 211,
    Tayvan = 212,
    Togo = 213,
    Tokelau = 214,
    Tonga = 215,
    TrinidadVeTobago = 216,
    Tunus = 217,
    TurksVeCaicaosAdalari = 218,
    Tuvalu = 219,
    Turkmenistan = 220,
    Uganda = 221,
    Ukrayna = 222,
    Umman = 223,
    Uruguay = 224,
    Urdun = 225,
    Vanuatu = 226,
    Vatikan = 227,
    Venezuella = 228,
    VietnamSosyalist = 229,
    WallisVeFutuna = 230,
    Yemen = 231,
    YeniKaledonya = 232,
    YeniZelanda = 233,
    YeniZelandaOky = 234,
    Yunanistan = 235,
    Zambiya = 236,
    Zimbabve = 237,
}

export enum EAuthorityObjectType {
    KullaniciGrubu = 1,
    Kullanici = 2,
    Kisi = 3,
}

export enum SearchUnitHierarchyMode {
    Current = 0,
    Childs = 1,
    Parents = 2,
}

export enum SortingType {
    Ascending = 0,
    Descending = 1,
}


export class OperationContractDTO {
    Id: number;
    ServiceContractId: number;
    SecurityToken: number;
    DisplayName: string;
    MethodName: string;
    Enabled: boolean;
    Description: string;
    ServiceContracContractName: string;
    MethodSimpleName: string;
}

export class ServiceContractDTO {
    Id: number;
    DisplayName: string;
    ContractName: string;
    AssemblyQualifiedName: string;
    Description: string;
}

export class LoginAttemptDTO {
    UserId: number;
    UserName: string;
    FullName: string;
    CultureId: Cultures;
    IPAddress: string;
    IsValid: boolean;
    ErrorMessage: string;
    UserGroups: Array<UserMembershipDTO>;
}

export class UserMembershipDTO {
    UserGroupId: number;
    UserGroupName: string;
}

export interface IUserIdentity {
    UserId: number;
    ProxyUserId: number;
    UserName: string;
    FullName: string;
    UserGroupId: number;
    UserGroupName: string;
    CultureId: Cultures;
    IPAddress: string;
    ContextId: number;
}

export class UserValidationResultDTO implements IUserIdentity {
    UserId: number;
    ProxyUserId: number;
    UserName: string;
    FullName: string;
    UserGroupId: number;
    UserGroupName: string;
    CultureId: Cultures;
    IPAddress: string;
    ContextId: number;
    IsValid: boolean;
    ErrorMessage: string;
    UserGroups: Array<UserMembershipDTO>;
    HasProxyPrivilege: boolean;
}

export class OperationHistoryByContractAndMethodDTO {
    ContractType: string;
    MethodName: string;
    Average?: number;
}

export class OperationHistoryDTO {
    Id: number;
    UserName: string;
    UserGroupName: string;
    UserIpAddress: string;
    ContractType: string;
    MethodName: string;
    CallerMethodName: string;
    TotalSeconds?: number;
    ProxyType: string;
    CreatedOn?: string;
}

export class ParameterCategoryDTO {
    Id: number;
    ParentId?: number;
    Name: string;
    Description: string;
}

export class ParameterDTO {
    Id: number;
    ParameterCategoryId: number;
    DisplayName: string;
    Key: string;
    Value: string;
    DataType: string;
    Order: number;
    ModifiedBy?: number;
    ModifiedOn?: string;
}

export class CultureDTO {
    Id: Cultures;
    DisplayName: string;
    NativeName: string;
    Name: string;
    TwoLetterISOLanguageName: string;
}

export class GlobalizedItemDTO {
    TargetType: string;
    ItemId: string;
    Items: Array<GlobalizedItemValueDTO>;
}

export class GlobalizedItemValueDTO {
    PropertyName: string;
    CultureId: number;
    Text: string;
}

export class LocalizationMetaDTO {
    Properties: Array<any>;
    Values: Array<any>;
}

export class WebApplicationDTO {
    Id: number;
    Name: string;
    DisplayName: string;
    Enabled: boolean;
    RequireSSL: boolean;
    FullName: string;
    Cultures: string;
}

export class WebApplicationHierarchyDTO {
    ApplicationMenuItemId: number;
    ApplicationSubUnitId: number;
    Path: string;
}

export class WebApplicationMenuDTO {
    Id: number;
    ParentId?: number;
    DisplayText: string;
    ApplicationSubUnitId?: number;
    Icon: string;
    Tags: string;
    Visible: boolean;
    Order: number;
}

export class WebApplicationRegistrationDTO {
    Applications: Array<WebApplicationDTO>;
    ApplicationSubUnits: Array<WebApplicationSubUnitDTO>;
}

export class WebApplicationSubUnitDTO {
    Id: number;
    ApplicationId: number;
    SubUnitName: string;
    Uri: string;
    SecurityToken: number;
    ApplicationName: string;
    ApplicationFullName: string;
    ApplicationDisplayName: string;
    DisplayName: string;
}

export class UserGroupChildHierarchyDTO {
    Id: number;
    RootId?: number;
    ChildId?: number;
    Level?: number;
}

export class UserGroupParentHierarchyDTO {
    Id: number;
    RootId?: number;
    ChildId?: number;
    Level?: number;
}

export class InvalidCreadentialAttemptDTO {
}

export class UserDTO {
    Id: number;
    UserName: string;
    Password: string;
    FullName: string;
    Email: string;
    CellPhoneNumber: string;
    Enabled: boolean;
    Approved: boolean;
    PasswordNeverExpires: boolean;
    UserCanChangePassword: boolean;
    PasswordExpiresOn?: string;
    DefaultCulture: Cultures;
    UserMustChangePassword: boolean;
    DisabledStartDate?: string;
    DisabledEndDate?: string;
    HasProxyPrivilege: boolean;
    PasswordLastModifiedDate?: string;
    DeletedBy?: number;
    DeletedOn?: string;
    PasswordResetRequestCode: string;
    PasswordResetRequestExpirationDate?: string;
}

export class UserGroupDTO {
    Id: number;
    ParentId?: number;
    Enabled: boolean;
    Name: string;
    Explanation: string;
}

export class UserGroupLangDTO {
    Id: number;
    UserGroupId: number;
    CultureId: number;
    Explanation: string;
    Name: string;
}

export class UserGroupMembershipDTO {
    Id: number;
    UserId: number;
    UserName: string;
    UserFullName: string;
    UserEnabled: boolean;
    UserGroupId: number;
    UsersGroupName: string;
    UsersGroupEnabled: boolean;
}

export class UnitTypeDTO {
    Id: number;
    Name: string;
}

export class UnitDTO {
    Id: number;
    Name: string;
    ParentId?: number;
    UnitTypeId: number;
    SecurityToken: number;
    UnitTypeName: string;
}

export interface IUnitHierarchy {
    ChildId?: number;
    Id: number;
    Level?: number;
    RootId?: number;
}

export class UnitChildHierarchyDTO implements IUnitHierarchy {
    Id: number;
    RootId?: number;
    ChildId?: number;
    Level?: number;
}

export class UnitParentHierarchyDTO implements IUnitHierarchy {
    Id: number;
    RootId?: number;
    ChildId?: number;
    Level?: number;
}

export class SampleDataDTO {
    Id: number;
    Subject: string;
    From: string;
    Sent: string;
    Size: number;
    HasAttachment: boolean;
    Priority: number;
    OptimisticLockField: number;
}

export class NumeratorDTO {
    Id: number;
    DispayName: string;
    Format: string;
    Current: number;
    Maximum: number;
}

export class NumeratorIncraseResultDTO {
    Current: number;
    GeneratedValue: string;
}

export class FormApplicationDTO {
    Id: number;
    Code: string;
    DisplayName: string;
    FullName: string;
    SecurityToken: number;
    AllowMultiple: boolean;
}

export class FormApplicationMenuDTO {
    Id: number;
    ParentId?: number;
    DisplayText: string;
    FormApplicationId?: number;
    Icon: string;
    Tags: string;
    Visible: boolean;
    OpenAsDialog: boolean;
    Order: number;
}

export class EnumConstantDTO {
    EnumValue: number;
    Name: string;
    DisplayName: string;
    Culture: Cultures;
}

export class AuthorityDTO {
    Id: number;
    AuthorityObjectTypeId: number;
    Name: string;
    Explanation: string;
}

export class JobCategoryDTO {
    Id: number;
    ParentId?: number;
    Name: string;
}

export class JobDTO {
    Id: number;
    Name: string;
    Key: string;
    Explanation: string;
    JobCategoryId: number;
}

export class UnitAuthorityJobDTO {
    Id: number;
    UnitJobId: number;
    AuthorityObjectId: number;
    AuthorityObjectTypeId: number;
    AuthorityName: string;
    IsDeleted: boolean;
}

export class UnitJobDTO {
    Id: number;
    UnitId: number;
    JobId: number;
    JobName: string;
    Enabled: boolean;
    IsDeleted: boolean;
    JobCategoryName: string;
}

export class ReportMetaDataLangDTO {
    Id: number;
    ItemId: number;
    ReportName: string;
    CultureId: number;
}

export class ReportCategoryDTO {
    Id: number;
    ParentId?: number;
    Name: string;
}

export class ReportMetadataDTO {
    Id: number;
    ReportCategoryId: number;
    ReportName: string;
    ContractName: string;
    MethodName: string;
    ReportMetadataXml: string;
    ReportType: number;
    Version: string;
    Order?: number;
    CreatedOn: string;
    CreatedBy: number;
    ModifiedOn?: string;
    ModifiedBy?: number;
    MaintenanceRequired: boolean;
    ItemId: number;
}

export class PersonDTO {
    Id: number;
    PersonTypeId: number;
    IdentityNo: string;
    TaxId: string;
    Title: string;
    Name: string;
    Surname: string;
    ImageFileId?: number;
    UserId?: number;
    CountryId?: number;
    NativeLanguageId?: number;
    IsDeleted: boolean;
}

export class PersonIdentityDTO {
    Id: number;
    FatherName: string;
    MotherName: string;
    MaidenName: string;
    PlaceOfBirth: string;
    BirthDate?: string;
    MaritalStatusId?: number;
    GenderId?: number;
    BloodGroupId?: number;
    SerialCode: string;
    SerialNo: string;
    Religious: string;
    RegisteredTownId?: number;
    RegisteredVillage: string;
    VolumeNo: string;
    FamilyOrderNo: string;
    OrderNo: string;
    GivenPlace: string;
    GivenReason: string;
    GivenDate?: string;
    RegistrationNo: string;
    IsDeleted: boolean;
}

export class PersonAddressDTO {
    Id: number;
    PersonId: number;
    CountryId?: number;
    City: string;
    Town: string;
    Text: string;
    AddressTypeId: number;
    IsDefaultAddress: boolean;
    IsDeleted: boolean;
}

export class PersonContactDTO {
    Id: number;
    PersonId: number;
    Text: string;
    ContactTypeId: number;
    IsDeleted: boolean;
}

export class CityDTO {
    Id: number;
    Country: number;
    Name: string;
}

export class CountryDTO {
    Id: number;
    Name: string;
    NationalId: number;
    Code: string;
    NameEng: string;
}

export class TownDTO {
    Id: number;
    CityId: number;
    Name: string;
}

export class LookupListDTO {
    Id: number;
    Name: string;
    ParentId?: number;
    EnumName: string;
}

export class LookupListItemDTO {
    Id: number;
    LookupListId: number;
    Name: string;
    Culture: Cultures;
    EnumName: string;
    Explanation: string;
    IsLocalized: boolean;
}

export class FileArchiveFolderDTO {
    FolderName: string;
    Id: number;
    ShowInFileManager: boolean;
    SecurityToken: number;
}

export class BasicFileInfoDTO {
    Id: number;
    FileName: string;
    FolderName: string;
}

export class FolderAttributesDTO {
    Visible: boolean;
}

export class FolderPermissionDTO {
    Id?: number;
    FileArchiveId: number;
    Visible: boolean;
    StorageId: number;
    StoragePath: string;
    FolderName: string;
}

export class FileArchiveDTO {
    File: Array<number>;
    Id: number;
    StorageId: number;
    FolderId: number;
    FolderName: string;
    FileName: string;
    DisplayName: string;
    Extension: string;
    FullName: string;
    ReadOnly: boolean;
    PhysicalFileExist: boolean;
    FileHash: string;
    Length: number;
    MimeType: string;
    Visible: boolean;
    CreatedOn: string;
    CreatedBy: number;
    ModifiedOn?: string;
    ModifiedBy?: number;
}

export class FileArchiveFileDTO {
    Id: number;
    File: Array<number>;
    FolderName: string;
    FileName: string;
    ReadOnly: boolean;
    Visible: boolean;
}

export class FileArchiveHistoryDTO {
    File: Array<number>;
    Id: number;
    StorageId: number;
    FileArchiveId: number;
    FolderName: string;
    FileName: string;
    DisplayName: string;
    Extension: string;
    ReadOnly: boolean;
    PhysicalFileExist: boolean;
    FileHash: string;
    Length: number;
    MajorVersionNo: number;
    MinorVersionNo: number;
    MimeType: string;
    CreatedOn: string;
    CreatedBy: number;
    DeletedOn?: string;
    DeletedBy?: number;
    FileOwner?: number;
    FileCreationOn?: string;
}

export class FileArchiveStorageDTO {
    Id: number;
    Path: string;
    Username: string;
    Password: string;
    Domain: string;
    CurrentSize: number;
    MaxSize: number;
    IsHistoryStorage: boolean;
}

export class FolderStructureDTO {
    Name: string;
    Key: string;
    Parent: string;
    SecurityToken: number;
}

export interface IPermissionControlList {
    AuthorizedObjectTypeId: number;
    Id: number;
    IsAuthorized: boolean;
    PermissionId: number;
    PermissionSecurityToken?: number;
    SecurityToken: number;
    UserGroupId: number;
}

export class PermissionControlListDTO implements IPermissionControlList {
    Id: number;
    UserGroupId: number;
    PermissionId: number;
    IsAuthorized: boolean;
    SecurityToken: number;
    AuthorizedObjectTypeId: number;
    PermissionSecurityToken?: number;
    PermissionKey: string;
}

export class FileArchiveFolderControlListDTO extends PermissionControlListDTO {
    FolderId: number;
}

export class UnitPermissionControlListDTO extends PermissionControlListDTO {
    UnitId: number;
    UnitTypeId: number;
}

export class AuthorizedObjectTypeDTO {
    Id: number;
    Name: string;
    ApplicationUrl: string;
}

export class PermissionDTO {
    Id: number;
    AuthorizedObjectTypeId: number;
    SecurityToken?: number;
    Name: string;
    AuthorizedObjectTypeName: string;
    Key: string;
    Editable: boolean;
}

export class UserGroupPermissionDTO {
    UserGroupId: number;
    AuthorizedObjectType: number;
    PermissionControlList: Array<PermissionControlListDTO>;
}

export class ChangePasswordDTO {
    OldPassword: string;
    NewPassword: string;
}

export class ResetUserPasswordDTO {
    EmailAddress: string;
    PasswordChangeRequestCode: string;
    NewPassword: string;
}

export class ResetUserPasswordRequestDTO {
    EmailAddress: string;
    ResetCode: string;
    ValidUntil: string;
}

export class SearchCultureCCO {
    Ids: Array<number>;
    DisplayName: string;
    NativeName: string;
    Name: string;
    TwoLetterIsoLanguageName: string;
}

export class SearchUserGroupCCO {
    Ids: Array<number>;
    Name: string;
    Enabled?: boolean;
}

export class SearchUserCCO {
    UserName: string;
    FullName: string;
    Email: string;
    Enabled?: boolean;
    Approved?: boolean;
    UserIds: Array<number>;
}

export class SearchAuthorityCCO {
    Ids: Array<number>;
    AuthorityObjectTypes: Array<number>;
    Name: string;
}

export class SearchUnitAuthorityCCO {
}

export class SearchJobCategoryCCO {
    Ids: Array<number>;
}

export class SearchJobCCO {
    Ids: Array<number>;
    JobCategoreIds: Array<number>;
}

export class SearchUnitJobCCO {
    Ids: Array<number>;
    UnitIds: Array<number>;
}

export class SearchUnitAuthorityJobCCO {
    UnitJobIds: Array<number>;
}

export class SearchPersonAddressCCO {
    Ids: Array<number>;
    PersonIds: Array<number>;
}

export class SearchPersonCCO {
    Ids: Array<number>;
    Name: string;
    Surname: string;
    PersonType: number;
    PageSize: number;
    PageNumber: number;
}

export class SearchPersonContactCCO {
    Ids: Array<number>;
    PersonIds: Array<number>;
}

export class SearchPersonIdentityCCO {
    Ids: Array<number>;
}

export class SearchUnitCCO {
    UnitIds: Array<number>;
    UnitTypeId: number;
    Name: string;
}

export class SearchUnitHierarchicallyCCO {
    RootId: number;
    SearchMode: SearchUnitHierarchyMode;
    UnitTypeIds: Array<number>;
    Name: string;
}

export class SearchNumeratorsCCO {
    Ids: Array<number>;
}

export class SearchLookupListCCO {
    Ids: Array<number>;
}

export class SearchLookupListItemCCO {
    Ids: Array<number>;
    LookupListIds: Array<number>;
}

export class SearchCityCCO {
    CountryId: number;
    Ids: Array<number>;
    Name: string;
}

export class SearchTownCCO {
    CityId: number;
    Ids: Array<number>;
    Name: string;
}

