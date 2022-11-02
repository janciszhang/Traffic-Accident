// import * as d3 from 'd3';
// require("./stylesheet.css");


const dataOri = [
    {name: "AL", type: "Alabama", value: 18, date: "2016-06-01"},
    {name: "AL", type: "Alabama", value: 21, date: "2016-07-01"},
    {name: "AL", type: "Alabama", value: 21, date: "2016-08-01"},
    {name: "AL", type: "Alabama", value: 15, date: "2016-09-01"},
    {name: "AL", type: "Alabama", value: 23, date: "2016-10-01"},
    {name: "AL", type: "Alabama", value: 13, date: "2016-11-01"},
    {name: "AL", type: "Alabama", value: 24, date: "2016-12-01"},
    {name: "AL", type: "Alabama", value: 31, date: "2017-01-01"},
    {name: "AL", type: "Alabama", value: 13, date: "2017-02-01"},
    {name: "AL", type: "Alabama", value: 25, date: "2017-03-01"},
    {name: "AL", type: "Alabama", value: 26, date: "2017-04-01"},
    {name: "AL", type: "Alabama", value: 72, date: "2017-05-01"},
    {name: "AL", type: "Alabama", value: 67, date: "2017-06-01"},
    {name: "AL", type: "Alabama", value: 109, date: "2017-07-01"},
    {name: "AL", type: "Alabama", value: 401, date: "2017-08-01"},
    {name: "AL", type: "Alabama", value: 291, date: "2017-09-01"},
    {name: "AL", type: "Alabama", value: 225, date: "2017-10-01"},
    {name: "AL", type: "Alabama", value: 206, date: "2017-11-01"},
    {name: "AL", type: "Alabama", value: 347, date: "2017-12-01"},
    {name: "AL", type: "Alabama", value: 440, date: "2018-01-01"},
    {name: "AL", type: "Alabama", value: 413, date: "2018-02-01"},
    {name: "AL", type: "Alabama", value: 558, date: "2018-03-01"},
    {name: "AL", type: "Alabama", value: 551, date: "2018-04-01"},
    {name: "AL", type: "Alabama", value: 592, date: "2018-05-01"},
    {name: "AL", type: "Alabama", value: 506, date: "2018-06-01"},
    {name: "AL", type: "Alabama", value: 380, date: "2018-07-01"},
    {name: "AL", type: "Alabama", value: 590, date: "2018-08-01"},
    {name: "AL", type: "Alabama", value: 706, date: "2018-09-01"},
    {name: "AL", type: "Alabama", value: 989, date: "2018-10-01"},
    {name: "AL", type: "Alabama", value: 953, date: "2018-11-01"},
    {name: "AL", type: "Alabama", value: 866, date: "2018-12-01"},
    {name: "AL", type: "Alabama", value: 847, date: "2019-01-01"},
    {name: "AL", type: "Alabama", value: 856, date: "2019-02-01"},
    {name: "AL", type: "Alabama", value: 902, date: "2019-03-01"},
    {name: "AL", type: "Alabama", value: 916, date: "2019-04-01"},
    {name: "AL", type: "Alabama", value: 833, date: "2019-05-01"},
    {name: "AL", type: "Alabama", value: 838, date: "2019-06-01"},
    {name: "AL", type: "Alabama", value: 805, date: "2019-07-01"},
    {name: "AL", type: "Alabama", value: 698, date: "2019-08-01"},
    {name: "AL", type: "Alabama", value: 783, date: "2019-09-01"},
    {name: "AL", type: "Alabama", value: 1030, date: "2019-10-01"},
    {name: "AL", type: "Alabama", value: 830, date: "2019-11-01"},
    {name: "AL", type: "Alabama", value: 810, date: "2019-12-01"},
    {name: "AL", type: "Alabama", value: 882, date: "2020-01-01"},
    {name: "AL", type: "Alabama", value: 713, date: "2020-02-01"},
    {name: "AL", type: "Alabama", value: 749, date: "2020-03-01"},
    {name: "AL", type: "Alabama", value: 652, date: "2020-04-01"},
    {name: "AL", type: "Alabama", value: 923, date: "2020-05-01"},
    {name: "AL", type: "Alabama", value: 1054, date: "2020-06-01"},
    {name: "AL", type: "Alabama", value: 530, date: "2020-07-01"},
    {name: "AL", type: "Alabama", value: 560, date: "2020-08-01"},
    {name: "AL", type: "Alabama", value: 1092, date: "2020-09-01"},
    {name: "AL", type: "Alabama", value: 1837, date: "2020-10-01"},
    {name: "AL", type: "Alabama", value: 2370, date: "2020-11-01"},
    {name: "AL", type: "Alabama", value: 2288, date: "2020-12-01"},
    {name: "AR", type: "Arkansas", value: 6, date: "2016-06-01"},
    {name: "AR", type: "Arkansas", value: 3, date: "2016-07-01"},
    {name: "AR", type: "Arkansas", value: 2, date: "2016-08-01"},
    {name: "AR", type: "Arkansas", value: 3, date: "2016-09-01"},
    {name: "AR", type: "Arkansas", value: 6, date: "2016-10-01"},
    {name: "AR", type: "Arkansas", value: 3, date: "2016-11-01"},
    {name: "AR", type: "Arkansas", value: 3, date: "2016-12-01"},
    {name: "AR", type: "Arkansas", value: 9, date: "2017-01-01"},
    {name: "AR", type: "Arkansas", value: 17, date: "2017-02-01"},
    {name: "AR", type: "Arkansas", value: 15, date: "2017-03-01"},
    {name: "AR", type: "Arkansas", value: 16, date: "2017-04-01"},
    {name: "AR", type: "Arkansas", value: 4, date: "2017-05-01"},
    {name: "AR", type: "Arkansas", value: 1, date: "2017-07-01"},
    {name: "AR", type: "Arkansas", value: 7, date: "2017-08-01"},
    {name: "AR", type: "Arkansas", value: 6, date: "2017-09-01"},
    {name: "AR", type: "Arkansas", value: 8, date: "2017-10-01"},
    {name: "AR", type: "Arkansas", value: 6, date: "2017-11-01"},
    {name: "AR", type: "Arkansas", value: 6, date: "2017-12-01"},
    {name: "AR", type: "Arkansas", value: 18, date: "2018-01-01"},
    {name: "AR", type: "Arkansas", value: 46, date: "2018-02-01"},
    {name: "AR", type: "Arkansas", value: 28, date: "2018-03-01"},
    {name: "AR", type: "Arkansas", value: 41, date: "2018-04-01"},
    {name: "AR", type: "Arkansas", value: 39, date: "2018-05-01"},
    {name: "AR", type: "Arkansas", value: 21, date: "2018-06-01"},
    {name: "AR", type: "Arkansas", value: 9, date: "2018-07-01"},
    {name: "AR", type: "Arkansas", value: 24, date: "2018-08-01"},
    {name: "AR", type: "Arkansas", value: 59, date: "2018-09-01"},
    {name: "AR", type: "Arkansas", value: 53, date: "2018-10-01"},
    {name: "AR", type: "Arkansas", value: 83, date: "2018-11-01"},
    {name: "AR", type: "Arkansas", value: 70, date: "2018-12-01"},
    {name: "AR", type: "Arkansas", value: 78, date: "2019-01-01"},
    {name: "AR", type: "Arkansas", value: 104, date: "2019-02-01"},
    {name: "AR", type: "Arkansas", value: 59, date: "2019-03-01"},
    {name: "AR", type: "Arkansas", value: 103, date: "2019-04-01"},
    {name: "AR", type: "Arkansas", value: 105, date: "2019-05-01"},
    {name: "AR", type: "Arkansas", value: 101, date: "2019-06-01"},
    {name: "AR", type: "Arkansas", value: 77, date: "2019-07-01"},
    {name: "AR", type: "Arkansas", value: 44, date: "2019-08-01"},
    {name: "AR", type: "Arkansas", value: 61, date: "2019-09-01"},
    {name: "AR", type: "Arkansas", value: 93, date: "2019-10-01"},
    {name: "AR", type: "Arkansas", value: 48, date: "2019-11-01"},
    {name: "AR", type: "Arkansas", value: 52, date: "2019-12-01"},
    {name: "AR", type: "Arkansas", value: 47, date: "2020-01-01"},
    {name: "AR", type: "Arkansas", value: 18, date: "2020-02-01"},
    {name: "AR", type: "Arkansas", value: 45, date: "2020-03-01"},
    {name: "AR", type: "Arkansas", value: 31, date: "2020-04-01"},
    {name: "AR", type: "Arkansas", value: 26, date: "2020-05-01"},
    {name: "AR", type: "Arkansas", value: 65, date: "2020-06-01"},
    {name: "AR", type: "Arkansas", value: 5, date: "2020-07-01"},
    {name: "AR", type: "Arkansas", value: 16, date: "2020-08-01"},
    {name: "AR", type: "Arkansas", value: 353, date: "2020-09-01"},
    {name: "AR", type: "Arkansas", value: 692, date: "2020-10-01"},
    {name: "AR", type: "Arkansas", value: 914, date: "2020-11-01"},
    {name: "AR", type: "Arkansas", value: 977, date: "2020-12-01"},
    {name: "AZ", type: "Arizona", value: 123, date: "2016-06-01"},
    {name: "AZ", type: "Arizona", value: 416, date: "2016-07-01"},
    {name: "AZ", type: "Arizona", value: 451, date: "2016-08-01"},
    {name: "AZ", type: "Arizona", value: 377, date: "2016-09-01"},
    {name: "AZ", type: "Arizona", value: 491, date: "2016-10-01"},
    {name: "AZ", type: "Arizona", value: 483, date: "2016-11-01"},
    {name: "AZ", type: "Arizona", value: 429, date: "2016-12-01"},
    {name: "AZ", type: "Arizona", value: 305, date: "2017-01-01"},
    {name: "AZ", type: "Arizona", value: 294, date: "2017-02-01"},
    {name: "AZ", type: "Arizona", value: 399, date: "2017-03-01"},
    {name: "AZ", type: "Arizona", value: 266, date: "2017-04-01"},
    {name: "AZ", type: "Arizona", value: 438, date: "2017-05-01"},
    {name: "AZ", type: "Arizona", value: 316, date: "2017-06-01"},
    {name: "AZ", type: "Arizona", value: 407, date: "2017-07-01"},
    {name: "AZ", type: "Arizona", value: 1204, date: "2017-08-01"},
    {name: "AZ", type: "Arizona", value: 1281, date: "2017-09-01"},
    {name: "AZ", type: "Arizona", value: 995, date: "2017-10-01"},
    {name: "AZ", type: "Arizona", value: 1010, date: "2017-11-01"},
    {name: "AZ", type: "Arizona", value: 1061, date: "2017-12-01"},
    {name: "AZ", type: "Arizona", value: 1248, date: "2018-01-01"},
    {name: "AZ", type: "Arizona", value: 1067, date: "2018-02-01"},
    {name: "AZ", type: "Arizona", value: 1010, date: "2018-03-01"},
    {name: "AZ", type: "Arizona", value: 1020, date: "2018-04-01"},
    {name: "AZ", type: "Arizona", value: 1086, date: "2018-05-01"},
    {name: "AZ", type: "Arizona", value: 967, date: "2018-06-01"},
    {name: "AZ", type: "Arizona", value: 930, date: "2018-07-01"},
    {name: "AZ", type: "Arizona", value: 1372, date: "2018-08-01"},
    {name: "AZ", type: "Arizona", value: 977, date: "2018-09-01"},
    {name: "AZ", type: "Arizona", value: 1110, date: "2018-10-01"},
    {name: "AZ", type: "Arizona", value: 1272, date: "2018-11-01"},
    {name: "AZ", type: "Arizona", value: 1079, date: "2018-12-01"},
    {name: "AZ", type: "Arizona", value: 1206, date: "2019-01-01"},
    {name: "AZ", type: "Arizona", value: 998, date: "2019-02-01"},
    {name: "AZ", type: "Arizona", value: 995, date: "2019-03-01"},
    {name: "AZ", type: "Arizona", value: 1066, date: "2019-04-01"},
    {name: "AZ", type: "Arizona", value: 1101, date: "2019-05-01"},
    {name: "AZ", type: "Arizona", value: 1063, date: "2019-06-01"},
    {name: "AZ", type: "Arizona", value: 1199, date: "2019-07-01"},
    {name: "AZ", type: "Arizona", value: 1356, date: "2019-08-01"},
    {name: "AZ", type: "Arizona", value: 1356, date: "2019-09-01"},
    {name: "AZ", type: "Arizona", value: 1271, date: "2019-10-01"},
    {name: "AZ", type: "Arizona", value: 1059, date: "2019-11-01"},
    {name: "AZ", type: "Arizona", value: 963, date: "2019-12-01"},
    {name: "AZ", type: "Arizona", value: 952, date: "2020-01-01"},
    {name: "AZ", type: "Arizona", value: 953, date: "2020-02-01"},
    {name: "AZ", type: "Arizona", value: 1921, date: "2020-03-01"},
    {name: "AZ", type: "Arizona", value: 2856, date: "2020-04-01"},
    {name: "AZ", type: "Arizona", value: 2817, date: "2020-05-01"},
    {name: "AZ", type: "Arizona", value: 2990, date: "2020-06-01"},
    {name: "AZ", type: "Arizona", value: 526, date: "2020-07-01"},
    {name: "AZ", type: "Arizona", value: 393, date: "2020-08-01"},
    {name: "AZ", type: "Arizona", value: 1353, date: "2020-09-01"},
    {name: "AZ", type: "Arizona", value: 2429, date: "2020-10-01"},
    {name: "AZ", type: "Arizona", value: 3465, date: "2020-11-01"},
    {name: "AZ", type: "Arizona", value: 3535, date: "2020-12-01"},
    {name: "CA", type: "California", value: 2604, date: "2016-03-01"},
    {name: "CA", type: "California", value: 8660, date: "2016-04-01"},
    {name: "CA", type: "California", value: 9392, date: "2016-05-01"},
    {name: "CA", type: "California", value: 9004, date: "2016-06-01"},
    {name: "CA", type: "California", value: 7614, date: "2016-07-01"},
    {name: "CA", type: "California", value: 9716, date: "2016-08-01"},
    {name: "CA", type: "California", value: 9846, date: "2016-09-01"},
    {name: "CA", type: "California", value: 10064, date: "2016-10-01"},
    {name: "CA", type: "California", value: 10869, date: "2016-11-01"},
    {name: "CA", type: "California", value: 9438, date: "2016-12-01"},
    {name: "CA", type: "California", value: 9111, date: "2017-01-01"},
    {name: "CA", type: "California", value: 9086, date: "2017-02-01"},
    {name: "CA", type: "California", value: 9267, date: "2017-03-01"},
    {name: "CA", type: "California", value: 8890, date: "2017-04-01"},
    {name: "CA", type: "California", value: 7655, date: "2017-05-01"},
    {name: "CA", type: "California", value: 7950, date: "2017-06-01"},
    {name: "CA", type: "California", value: 7065, date: "2017-07-01"},
    {name: "CA", type: "California", value: 7677, date: "2017-08-01"},
    {name: "CA", type: "California", value: 7617, date: "2017-09-01"},
    {name: "CA", type: "California", value: 6898, date: "2017-10-01"},
    {name: "CA", type: "California", value: 7542, date: "2017-11-01"},
    {name: "CA", type: "California", value: 6893, date: "2017-12-01"},
    {name: "CA", type: "California", value: 8078, date: "2018-01-01"},
    {name: "CA", type: "California", value: 7422, date: "2018-02-01"},
    {name: "CA", type: "California", value: 9325, date: "2018-03-01"},
    {name: "CA", type: "California", value: 8394, date: "2018-04-01"},
    {name: "CA", type: "California", value: 8186, date: "2018-05-01"},
    {name: "CA", type: "California", value: 7667, date: "2018-06-01"},
    {name: "CA", type: "California", value: 9011, date: "2018-07-01"},
    {name: "CA", type: "California", value: 9465, date: "2018-08-01"},
    {name: "CA", type: "California", value: 8635, date: "2018-09-01"},
    {name: "CA", type: "California", value: 9090, date: "2018-10-01"},
    {name: "CA", type: "California", value: 7606, date: "2018-11-01"},
    {name: "CA", type: "California", value: 5983, date: "2018-12-01"},
    {name: "CA", type: "California", value: 7750, date: "2019-01-01"},
    {name: "CA", type: "California", value: 6336, date: "2019-02-01"},
    {name: "CA", type: "California", value: 7090, date: "2019-03-01"},
    {name: "CA", type: "California", value: 6963, date: "2019-04-01"},
    {name: "CA", type: "California", value: 7552, date: "2019-05-01"},
    {name: "CA", type: "California", value: 5874, date: "2019-06-01"},
    {name: "CA", type: "California", value: 5613, date: "2019-07-01"},
    {name: "CA", type: "California", value: 10344, date: "2019-08-01"},
    {name: "CA", type: "California", value: 29505, date: "2019-09-01"},
    {name: "CA", type: "California", value: 32960, date: "2019-10-01"},
    {name: "CA", type: "California", value: 16196, date: "2019-11-01"},
    {name: "CA", type: "California", value: 32343, date: "2019-12-01"},
    {name: "CA", type: "California", value: 27467, date: "2020-01-01"},
    {name: "CA", type: "California", value: 26031, date: "2020-02-01"},
    {name: "CA", type: "California", value: 26464, date: "2020-03-01"},
    {name: "CA", type: "California", value: 20634, date: "2020-04-01"},
    {name: "CA", type: "California", value: 20031, date: "2020-05-01"},
    {name: "CA", type: "California", value: 22991, date: "2020-06-01"},
    {name: "CA", type: "California", value: 2609, date: "2020-07-01"},
    {name: "CA", type: "California", value: 3015, date: "2020-08-01"},
    {name: "CA", type: "California", value: 10825, date: "2020-09-01"},
    {name: "CA", type: "California", value: 20716, date: "2020-10-01"},
    {name: "CA", type: "California", value: 46577, date: "2020-11-01"},
    {name: "CA", type: "California", value: 53138, date: "2020-12-01"},
    {name: "CO", type: "Colorado", value: 63, date: "2016-06-01"},
    {name: "CO", type: "Colorado", value: 194, date: "2016-07-01"},
    {name: "CO", type: "Colorado", value: 233, date: "2016-08-01"},
    {name: "CO", type: "Colorado", value: 217, date: "2016-09-01"},
    {name: "CO", type: "Colorado", value: 217, date: "2016-10-01"},
    {name: "CO", type: "Colorado", value: 201, date: "2016-11-01"},
    {name: "CO", type: "Colorado", value: 199, date: "2016-12-01"},
    {name: "CO", type: "Colorado", value: 178, date: "2017-01-01"},
    {name: "CO", type: "Colorado", value: 133, date: "2017-02-01"},
    {name: "CO", type: "Colorado", value: 138, date: "2017-03-01"},
    {name: "CO", type: "Colorado", value: 170, date: "2017-04-01"},
    {name: "CO", type: "Colorado", value: 218, date: "2017-05-01"},
    {name: "CO", type: "Colorado", value: 207, date: "2017-06-01"},
    {name: "CO", type: "Colorado", value: 210, date: "2017-07-01"},
    {name: "CO", type: "Colorado", value: 666, date: "2017-08-01"},
    {name: "CO", type: "Colorado", value: 699, date: "2017-09-01"},
    {name: "CO", type: "Colorado", value: 768, date: "2017-10-01"},
    {name: "CO", type: "Colorado", value: 663, date: "2017-11-01"},
    {name: "CO", type: "Colorado", value: 652, date: "2017-12-01"},
    {name: "CO", type: "Colorado", value: 710, date: "2018-01-01"},
    {name: "CO", type: "Colorado", value: 659, date: "2018-02-01"},
    {name: "CO", type: "Colorado", value: 635, date: "2018-03-01"},
    {name: "CO", type: "Colorado", value: 533, date: "2018-04-01"},
    {name: "CO", type: "Colorado", value: 744, date: "2018-05-01"},
    {name: "CO", type: "Colorado", value: 611, date: "2018-06-01"},
    {name: "CO", type: "Colorado", value: 558, date: "2018-07-01"},
    {name: "CO", type: "Colorado", value: 769, date: "2018-08-01"},
    {name: "CO", type: "Colorado", value: 789, date: "2018-09-01"},
    {name: "CO", type: "Colorado", value: 905, date: "2018-10-01"},
    {name: "CO", type: "Colorado", value: 1113, date: "2018-11-01"},
    {name: "CO", type: "Colorado", value: 955, date: "2018-12-01"},
    {name: "CO", type: "Colorado", value: 1151, date: "2019-01-01"},
    {name: "CO", type: "Colorado", value: 880, date: "2019-02-01"},
    {name: "CO", type: "Colorado", value: 949, date: "2019-03-01"},
    {name: "CO", type: "Colorado", value: 1039, date: "2019-04-01"},
    {name: "CO", type: "Colorado", value: 1113, date: "2019-05-01"},
    {name: "CO", type: "Colorado", value: 1052, date: "2019-06-01"},
    {name: "CO", type: "Colorado", value: 1001, date: "2019-07-01"},
    {name: "CO", type: "Colorado", value: 1024, date: "2019-08-01"},
    {name: "CO", type: "Colorado", value: 721, date: "2019-09-01"},
    {name: "CO", type: "Colorado", value: 1106, date: "2019-10-01"},
    {name: "CO", type: "Colorado", value: 1023, date: "2019-11-01"},
    {name: "CO", type: "Colorado", value: 861, date: "2019-12-01"},
    {name: "CO", type: "Colorado", value: 846, date: "2020-01-01"},
    {name: "CO", type: "Colorado", value: 954, date: "2020-02-01"},
    {name: "CO", type: "Colorado", value: 1202, date: "2020-03-01"},
    {name: "CO", type: "Colorado", value: 1581, date: "2020-04-01"},
    {name: "CO", type: "Colorado", value: 1327, date: "2020-05-01"},
    {name: "CO", type: "Colorado", value: 1771, date: "2020-06-01"},
    {name: "CO", type: "Colorado", value: 330, date: "2020-07-01"},
    {name: "CO", type: "Colorado", value: 335, date: "2020-08-01"},
    {name: "CO", type: "Colorado", value: 435, date: "2020-09-01"},
    {name: "CO", type: "Colorado", value: 619, date: "2020-10-01"},
    {name: "CO", type: "Colorado", value: 463, date: "2020-11-01"},
    {name: "CO", type: "Colorado", value: 490, date: "2020-12-01"},
    {name: "CT", type: "Connecticut", value: 78, date: "2016-03-01"},
    {name: "CT", type: "Connecticut", value: 251, date: "2016-04-01"},
    {name: "CT", type: "Connecticut", value: 243, date: "2016-05-01"},
    {name: "CT", type: "Connecticut", value: 298, date: "2016-06-01"},
    {name: "CT", type: "Connecticut", value: 318, date: "2016-07-01"},
    {name: "CT", type: "Connecticut", value: 349, date: "2016-08-01"},
    {name: "CT", type: "Connecticut", value: 325, date: "2016-09-01"},
    {name: "CT", type: "Connecticut", value: 358, date: "2016-10-01"},
    {name: "CT", type: "Connecticut", value: 471, date: "2016-11-01"},
    {name: "CT", type: "Connecticut", value: 429, date: "2016-12-01"},
    {name: "CT", type: "Connecticut", value: 394, date: "2017-01-01"},
    {name: "CT", type: "Connecticut", value: 375, date: "2017-02-01"},
    {name: "CT", type: "Connecticut", value: 411, date: "2017-03-01"},
    {name: "CT", type: "Connecticut", value: 305, date: "2017-04-01"},
    {name: "CT", type: "Connecticut", value: 321, date: "2017-05-01"},
    {name: "CT", type: "Connecticut", value: 386, date: "2017-06-01"},
    {name: "CT", type: "Connecticut", value: 372, date: "2017-07-01"},
    {name: "CT", type: "Connecticut", value: 417, date: "2017-08-01"},
    {name: "CT", type: "Connecticut", value: 375, date: "2017-09-01"},
    {name: "CT", type: "Connecticut", value: 416, date: "2017-10-01"},
    {name: "CT", type: "Connecticut", value: 433, date: "2017-11-01"},
    {name: "CT", type: "Connecticut", value: 374, date: "2017-12-01"},
    {name: "CT", type: "Connecticut", value: 409, date: "2018-01-01"},
    {name: "CT", type: "Connecticut", value: 353, date: "2018-02-01"},
    {name: "CT", type: "Connecticut", value: 339, date: "2018-03-01"},
    {name: "CT", type: "Connecticut", value: 365, date: "2018-04-01"},
    {name: "CT", type: "Connecticut", value: 361, date: "2018-05-01"},
    {name: "CT", type: "Connecticut", value: 356, date: "2018-06-01"},
    {name: "CT", type: "Connecticut", value: 283, date: "2018-07-01"},
    {name: "CT", type: "Connecticut", value: 262, date: "2018-08-01"},
    {name: "CT", type: "Connecticut", value: 353, date: "2018-09-01"},
    {name: "CT", type: "Connecticut", value: 416, date: "2018-10-01"},
    {name: "CT", type: "Connecticut", value: 414, date: "2018-11-01"},
    {name: "CT", type: "Connecticut", value: 367, date: "2018-12-01"},
    {name: "CT", type: "Connecticut", value: 303, date: "2019-01-01"},
    {name: "CT", type: "Connecticut", value: 303, date: "2019-02-01"},
    {name: "CT", type: "Connecticut", value: 319, date: "2019-03-01"},
    {name: "CT", type: "Connecticut", value: 291, date: "2019-04-01"},
    {name: "CT", type: "Connecticut", value: 321, date: "2019-05-01"},
    {name: "CT", type: "Connecticut", value: 319, date: "2019-06-01"},
    {name: "CT", type: "Connecticut", value: 292, date: "2019-07-01"},
    {name: "CT", type: "Connecticut", value: 277, date: "2019-08-01"},
    {name: "CT", type: "Connecticut", value: 270, date: "2019-09-01"},
    {name: "CT", type: "Connecticut", value: 351, date: "2019-10-01"},
    {name: "CT", type: "Connecticut", value: 250, date: "2019-11-01"},
    {name: "CT", type: "Connecticut", value: 292, date: "2019-12-01"},
    {name: "CT", type: "Connecticut", value: 383, date: "2020-01-01"},
    {name: "CT", type: "Connecticut", value: 570, date: "2020-02-01"},
    {name: "CT", type: "Connecticut", value: 426, date: "2020-03-01"},
    {name: "CT", type: "Connecticut", value: 456, date: "2020-04-01"},
    {name: "CT", type: "Connecticut", value: 331, date: "2020-05-01"},
    {name: "CT", type: "Connecticut", value: 368, date: "2020-06-01"},
    {name: "CT", type: "Connecticut", value: 91, date: "2020-07-01"},
    {name: "CT", type: "Connecticut", value: 113, date: "2020-08-01"},
    {name: "CT", type: "Connecticut", value: 986, date: "2020-09-01"},
    {name: "CT", type: "Connecticut", value: 1604, date: "2020-10-01"},
    {name: "CT", type: "Connecticut", value: 1664, date: "2020-11-01"},
    {name: "CT", type: "Connecticut", value: 1497, date: "2020-12-01"},
    {name: "DE", type: "Delaware", value: 8, date: "2016-03-01"},
    {name: "DE", type: "Delaware", value: 18, date: "2016-04-01"},
    {name: "DE", type: "Delaware", value: 16, date: "2016-05-01"},
    {name: "DE", type: "Delaware", value: 34, date: "2016-06-01"},
    {name: "DE", type: "Delaware", value: 23, date: "2016-07-01"},
    {name: "DE", type: "Delaware", value: 30, date: "2016-08-01"},
    {name: "DE", type: "Delaware", value: 25, date: "2016-09-01"},
    {name: "DE", type: "Delaware", value: 27, date: "2016-10-01"},
    {name: "DE", type: "Delaware", value: 43, date: "2016-11-01"},
    {name: "DE", type: "Delaware", value: 22, date: "2016-12-01"},
    {name: "DE", type: "Delaware", value: 25, date: "2017-01-01"},
    {name: "DE", type: "Delaware", value: 26, date: "2017-02-01"},
    {name: "DE", type: "Delaware", value: 20, date: "2017-03-01"},
    {name: "DE", type: "Delaware", value: 23, date: "2017-04-01"},
    {name: "DE", type: "Delaware", value: 46, date: "2017-05-01"},
    {name: "DE", type: "Delaware", value: 34, date: "2017-06-01"},
    {name: "DE", type: "Delaware", value: 36, date: "2017-07-01"},
    {name: "DE", type: "Delaware", value: 74, date: "2017-08-01"},
    {name: "DE", type: "Delaware", value: 104, date: "2017-09-01"},
    {name: "DE", type: "Delaware", value: 90, date: "2017-10-01"},
    {name: "DE", type: "Delaware", value: 77, date: "2017-11-01"},
    {name: "DE", type: "Delaware", value: 85, date: "2017-12-01"},
    {name: "DE", type: "Delaware", value: 67, date: "2018-01-01"},
    {name: "DE", type: "Delaware", value: 86, date: "2018-02-01"},
    {name: "DE", type: "Delaware", value: 100, date: "2018-03-01"},
    {name: "DE", type: "Delaware", value: 70, date: "2018-04-01"},
    {name: "DE", type: "Delaware", value: 112, date: "2018-05-01"},
    {name: "DE", type: "Delaware", value: 91, date: "2018-06-01"},
    {name: "DE", type: "Delaware", value: 75, date: "2018-07-01"},
    {name: "DE", type: "Delaware", value: 66, date: "2018-08-01"},
    {name: "DE", type: "Delaware", value: 29, date: "2018-09-01"},
    {name: "DE", type: "Delaware", value: 111, date: "2018-10-01"},
    {name: "DE", type: "Delaware", value: 93, date: "2018-11-01"},
    {name: "DE", type: "Delaware", value: 124, date: "2018-12-01"},
    {name: "DE", type: "Delaware", value: 69, date: "2019-01-01"},
    {name: "DE", type: "Delaware", value: 63, date: "2019-02-01"},
    {name: "DE", type: "Delaware", value: 45, date: "2019-03-01"},
    {name: "DE", type: "Delaware", value: 95, date: "2019-04-01"},
    {name: "DE", type: "Delaware", value: 81, date: "2019-05-01"},
    {name: "DE", type: "Delaware", value: 79, date: "2019-06-01"},
    {name: "DE", type: "Delaware", value: 88, date: "2019-07-01"},
    {name: "DE", type: "Delaware", value: 65, date: "2019-08-01"},
    {name: "DE", type: "Delaware", value: 47, date: "2019-09-01"},
    {name: "DE", type: "Delaware", value: 88, date: "2019-10-01"},
    {name: "DE", type: "Delaware", value: 100, date: "2019-11-01"},
    {name: "DE", type: "Delaware", value: 88, date: "2019-12-01"},
    {name: "DE", type: "Delaware", value: 78, date: "2020-01-01"},
    {name: "DE", type: "Delaware", value: 115, date: "2020-02-01"},
    {name: "DE", type: "Delaware", value: 153, date: "2020-03-01"},
    {name: "DE", type: "Delaware", value: 251, date: "2020-04-01"},
    {name: "DE", type: "Delaware", value: 192, date: "2020-05-01"},
    {name: "DE", type: "Delaware", value: 179, date: "2020-06-01"},
    {name: "DE", type: "Delaware", value: 59, date: "2020-07-01"},
    {name: "DE", type: "Delaware", value: 66, date: "2020-08-01"},
    {name: "DE", type: "Delaware", value: 125, date: "2020-09-01"},
    {name: "DE", type: "Delaware", value: 191, date: "2020-10-01"},
    {name: "DE", type: "Delaware", value: 198, date: "2020-11-01"},
    {name: "DE", type: "Delaware", value: 200, date: "2020-12-01"},
    {name: "FL", type: "Florida", value: 1225, date: "2016-06-01"},
    {name: "FL", type: "Florida", value: 3263, date: "2016-07-01"},
    {name: "FL", type: "Florida", value: 4118, date: "2016-08-01"},
    {name: "FL", type: "Florida", value: 3549, date: "2016-09-01"},
    {name: "FL", type: "Florida", value: 3539, date: "2016-10-01"},
    {name: "FL", type: "Florida", value: 4230, date: "2016-11-01"},
    {name: "FL", type: "Florida", value: 4021, date: "2016-12-01"},
    {name: "FL", type: "Florida", value: 3521, date: "2017-01-01"},
    {name: "FL", type: "Florida", value: 3228, date: "2017-02-01"},
    {name: "FL", type: "Florida", value: 4128, date: "2017-03-01"},
    {name: "FL", type: "Florida", value: 2915, date: "2017-04-01"},
    {name: "FL", type: "Florida", value: 2624, date: "2017-05-01"},
    {name: "FL", type: "Florida", value: 2748, date: "2017-06-01"},
    {name: "FL", type: "Florida", value: 2295, date: "2017-07-01"},
    {name: "FL", type: "Florida", value: 4123, date: "2017-08-01"},
    {name: "FL", type: "Florida", value: 2855, date: "2017-09-01"},
    {name: "FL", type: "Florida", value: 3420, date: "2017-10-01"},
    {name: "FL", type: "Florida", value: 3506, date: "2017-11-01"},
    {name: "FL", type: "Florida", value: 3412, date: "2017-12-01"},
    {name: "FL", type: "Florida", value: 3122, date: "2018-01-01"},
    {name: "FL", type: "Florida", value: 3043, date: "2018-02-01"},
    {name: "FL", type: "Florida", value: 3396, date: "2018-03-01"},
    {name: "FL", type: "Florida", value: 3295, date: "2018-04-01"},
    {name: "FL", type: "Florida", value: 3559, date: "2018-05-01"},
    {name: "FL", type: "Florida", value: 2985, date: "2018-06-01"},
    {name: "FL", type: "Florida", value: 2929, date: "2018-07-01"},
    {name: "FL", type: "Florida", value: 3766, date: "2018-08-01"},
    {name: "FL", type: "Florida", value: 2912, date: "2018-09-01"},
    {name: "FL", type: "Florida", value: 4131, date: "2018-10-01"},
    {name: "FL", type: "Florida", value: 3502, date: "2018-11-01"},
    {name: "FL", type: "Florida", value: 3379, date: "2018-12-01"},
    {name: "FL", type: "Florida", value: 3005, date: "2019-01-01"},
    {name: "FL", type: "Florida", value: 2605, date: "2019-02-01"},
    {name: "FL", type: "Florida", value: 2868, date: "2019-03-01"},
    {name: "FL", type: "Florida", value: 3191, date: "2019-04-01"},
    {name: "FL", type: "Florida", value: 3043, date: "2019-05-01"},
    {name: "FL", type: "Florida", value: 3033, date: "2019-06-01"},
    {name: "FL", type: "Florida", value: 3034, date: "2019-07-01"},
    {name: "FL", type: "Florida", value: 3131, date: "2019-08-01"},
    {name: "FL", type: "Florida", value: 2622, date: "2019-09-01"},
    {name: "FL", type: "Florida", value: 3325, date: "2019-10-01"},
    {name: "FL", type: "Florida", value: 2801, date: "2019-11-01"},
    {name: "FL", type: "Florida", value: 2749, date: "2019-12-01"},
    {name: "FL", type: "Florida", value: 2970, date: "2020-01-01"},
    {name: "FL", type: "Florida", value: 2979, date: "2020-02-01"},
    {name: "FL", type: "Florida", value: 4084, date: "2020-03-01"},
    {name: "FL", type: "Florida", value: 4438, date: "2020-04-01"},
    {name: "FL", type: "Florida", value: 4565, date: "2020-05-01"},
    {name: "FL", type: "Florida", value: 5078, date: "2020-06-01"},
    {name: "FL", type: "Florida", value: 1651, date: "2020-07-01"},
    {name: "FL", type: "Florida", value: 1715, date: "2020-08-01"},
    {name: "FL", type: "Florida", value: 13186, date: "2020-09-01"},
    {name: "FL", type: "Florida", value: 21093, date: "2020-10-01"},
    {name: "FL", type: "Florida", value: 28230, date: "2020-11-01"},
    {name: "FL", type: "Florida", value: 35165, date: "2020-12-01"},
    {name: "GA", type: "Georgia", value: 510, date: "2016-06-01"},
    {name: "GA", type: "Georgia", value: 1044, date: "2016-07-01"},
    {name: "GA", type: "Georgia", value: 1253, date: "2016-08-01"},
    {name: "GA", type: "Georgia", value: 1335, date: "2016-09-01"},
    {name: "GA", type: "Georgia", value: 1302, date: "2016-10-01"},
    {name: "GA", type: "Georgia", value: 1417, date: "2016-11-01"},
    {name: "GA", type: "Georgia", value: 1416, date: "2016-12-01"},
    {name: "GA", type: "Georgia", value: 1195, date: "2017-01-01"},
    {name: "GA", type: "Georgia", value: 1061, date: "2017-02-01"},
    {name: "GA", type: "Georgia", value: 1212, date: "2017-03-01"},
    {name: "GA", type: "Georgia", value: 928, date: "2017-04-01"},
    {name: "GA", type: "Georgia", value: 1009, date: "2017-05-01"},
    {name: "GA", type: "Georgia", value: 1041, date: "2017-06-01"},
    {name: "GA", type: "Georgia", value: 1021, date: "2017-07-01"},
    {name: "GA", type: "Georgia", value: 1247, date: "2017-08-01"},
    {name: "GA", type: "Georgia", value: 1169, date: "2017-09-01"},
    {name: "GA", type: "Georgia", value: 1359, date: "2017-10-01"},
    {name: "GA", type: "Georgia", value: 1169, date: "2017-11-01"},
    {name: "GA", type: "Georgia", value: 1224, date: "2017-12-01"},
    {name: "GA", type: "Georgia", value: 1337, date: "2018-01-01"},
    {name: "GA", type: "Georgia", value: 1230, date: "2018-02-01"},
    {name: "GA", type: "Georgia", value: 1367, date: "2018-03-01"},
    {name: "GA", type: "Georgia", value: 1180, date: "2018-04-01"},
    {name: "GA", type: "Georgia", value: 1155, date: "2018-05-01"},
    {name: "GA", type: "Georgia", value: 1163, date: "2018-06-01"},
    {name: "GA", type: "Georgia", value: 1178, date: "2018-07-01"},
    {name: "GA", type: "Georgia", value: 1509, date: "2018-08-01"},
    {name: "GA", type: "Georgia", value: 1096, date: "2018-09-01"},
    {name: "GA", type: "Georgia", value: 1512, date: "2018-10-01"},
    {name: "GA", type: "Georgia", value: 1471, date: "2018-11-01"},
    {name: "GA", type: "Georgia", value: 1426, date: "2018-12-01"},
    {name: "GA", type: "Georgia", value: 1504, date: "2019-01-01"},
    {name: "GA", type: "Georgia", value: 1410, date: "2019-02-01"},
    {name: "GA", type: "Georgia", value: 1255, date: "2019-03-01"},
    {name: "GA", type: "Georgia", value: 1333, date: "2019-04-01"},
    {name: "GA", type: "Georgia", value: 1480, date: "2019-05-01"},
    {name: "GA", type: "Georgia", value: 1262, date: "2019-06-01"},
    {name: "GA", type: "Georgia", value: 1068, date: "2019-07-01"},
    {name: "GA", type: "Georgia", value: 1169, date: "2019-08-01"},
    {name: "GA", type: "Georgia", value: 853, date: "2019-09-01"},
    {name: "GA", type: "Georgia", value: 1270, date: "2019-10-01"},
    {name: "GA", type: "Georgia", value: 857, date: "2019-11-01"},
    {name: "GA", type: "Georgia", value: 1098, date: "2019-12-01"},
    {name: "GA", type: "Georgia", value: 991, date: "2020-01-01"},
    {name: "GA", type: "Georgia", value: 1024, date: "2020-02-01"},
    {name: "GA", type: "Georgia", value: 1148, date: "2020-03-01"},
    {name: "GA", type: "Georgia", value: 1310, date: "2020-04-01"},
    {name: "GA", type: "Georgia", value: 1302, date: "2020-05-01"},
    {name: "GA", type: "Georgia", value: 1335, date: "2020-06-01"},
    {name: "GA", type: "Georgia", value: 555, date: "2020-07-01"},
    {name: "GA", type: "Georgia", value: 527, date: "2020-08-01"},
    {name: "GA", type: "Georgia", value: 1666, date: "2020-09-01"},
    {name: "GA", type: "Georgia", value: 2106, date: "2020-10-01"},
    {name: "GA", type: "Georgia", value: 2818, date: "2020-11-01"},
    {name: "GA", type: "Georgia", value: 2659, date: "2020-12-01"},
    {name: "IA", type: "Iowa", value: 36, date: "2016-03-01"},
    {name: "IA", type: "Iowa", value: 70, date: "2016-04-01"},
    {name: "IA", type: "Iowa", value: 98, date: "2016-05-01"},
    {name: "IA", type: "Iowa", value: 119, date: "2016-06-01"},
    {name: "IA", type: "Iowa", value: 96, date: "2016-07-01"},
    {name: "IA", type: "Iowa", value: 116, date: "2016-08-01"},
    {name: "IA", type: "Iowa", value: 152, date: "2016-09-01"},
    {name: "IA", type: "Iowa", value: 207, date: "2016-10-01"},
    {name: "IA", type: "Iowa", value: 240, date: "2016-11-01"},
    {name: "IA", type: "Iowa", value: 252, date: "2016-12-01"},
    {name: "IA", type: "Iowa", value: 213, date: "2017-01-01"},
    {name: "IA", type: "Iowa", value: 215, date: "2017-02-01"},
    {name: "IA", type: "Iowa", value: 152, date: "2017-03-01"},
    {name: "IA", type: "Iowa", value: 179, date: "2017-04-01"},
    {name: "IA", type: "Iowa", value: 121, date: "2017-05-01"},
    {name: "IA", type: "Iowa", value: 155, date: "2017-06-01"},
    {name: "IA", type: "Iowa", value: 184, date: "2017-07-01"},
    {name: "IA", type: "Iowa", value: 187, date: "2017-08-01"},
    {name: "IA", type: "Iowa", value: 109, date: "2017-09-01"},
    {name: "IA", type: "Iowa", value: 83, date: "2017-10-01"},
    {name: "IA", type: "Iowa", value: 188, date: "2017-11-01"},
    {name: "IA", type: "Iowa", value: 175, date: "2017-12-01"},
    {name: "IA", type: "Iowa", value: 110, date: "2018-01-01"},
    {name: "IA", type: "Iowa", value: 280, date: "2018-02-01"},
    {name: "IA", type: "Iowa", value: 99, date: "2018-03-01"},
    {name: "IA", type: "Iowa", value: 111, date: "2018-04-01"},
    {name: "IA", type: "Iowa", value: 115, date: "2018-05-01"},
    {name: "IA", type: "Iowa", value: 99, date: "2018-06-01"},
    {name: "IA", type: "Iowa", value: 68, date: "2018-07-01"},
    {name: "IA", type: "Iowa", value: 79, date: "2018-08-01"},
    {name: "IA", type: "Iowa", value: 59, date: "2018-09-01"},
    {name: "IA", type: "Iowa", value: 104, date: "2018-10-01"},
    {name: "IA", type: "Iowa", value: 117, date: "2018-11-01"},
    {name: "IA", type: "Iowa", value: 112, date: "2018-12-01"},
    {name: "IA", type: "Iowa", value: 205, date: "2019-01-01"},
    {name: "IA", type: "Iowa", value: 184, date: "2019-02-01"},
    {name: "IA", type: "Iowa", value: 78, date: "2019-03-01"},
    {name: "IA", type: "Iowa", value: 90, date: "2019-04-01"},
    {name: "IA", type: "Iowa", value: 94, date: "2019-05-01"},
    {name: "IA", type: "Iowa", value: 95, date: "2019-06-01"},
    {name: "IA", type: "Iowa", value: 129, date: "2019-07-01"},
    {name: "IA", type: "Iowa", value: 145, date: "2019-08-01"},
    {name: "IA", type: "Iowa", value: 140, date: "2019-09-01"},
    {name: "IA", type: "Iowa", value: 211, date: "2019-10-01"},
    {name: "IA", type: "Iowa", value: 173, date: "2019-11-01"},
    {name: "IA", type: "Iowa", value: 173, date: "2019-12-01"},
    {name: "IA", type: "Iowa", value: 195, date: "2020-01-01"},
    {name: "IA", type: "Iowa", value: 102, date: "2020-02-01"},
    {name: "IA", type: "Iowa", value: 91, date: "2020-03-01"},
    {name: "IA", type: "Iowa", value: 117, date: "2020-04-01"},
    {name: "IA", type: "Iowa", value: 111, date: "2020-05-01"},
    {name: "IA", type: "Iowa", value: 118, date: "2020-06-01"},
    {name: "IA", type: "Iowa", value: 64, date: "2020-07-01"},
    {name: "IA", type: "Iowa", value: 56, date: "2020-08-01"},
    {name: "IA", type: "Iowa", value: 231, date: "2020-09-01"},
    {name: "IA", type: "Iowa", value: 448, date: "2020-10-01"},
    {name: "IA", type: "Iowa", value: 520, date: "2020-11-01"},
    {name: "IA", type: "Iowa", value: 1022, date: "2020-12-01"},
    {name: "ID", type: "Idaho", value: 37, date: "2016-06-01"},
    {name: "ID", type: "Idaho", value: 82, date: "2016-07-01"},
    {name: "ID", type: "Idaho", value: 62, date: "2016-08-01"},
    {name: "ID", type: "Idaho", value: 47, date: "2016-09-01"},
    {name: "ID", type: "Idaho", value: 49, date: "2016-10-01"},
    {name: "ID", type: "Idaho", value: 59, date: "2016-11-01"},
    {name: "ID", type: "Idaho", value: 83, date: "2016-12-01"},
    {name: "ID", type: "Idaho", value: 78, date: "2017-01-01"},
    {name: "ID", type: "Idaho", value: 56, date: "2017-02-01"},
    {name: "ID", type: "Idaho", value: 37, date: "2017-03-01"},
    {name: "ID", type: "Idaho", value: 24, date: "2017-04-01"},
    {name: "ID", type: "Idaho", value: 33, date: "2017-05-01"},
    {name: "ID", type: "Idaho", value: 24, date: "2017-06-01"},
    {name: "ID", type: "Idaho", value: 39, date: "2017-07-01"},
    {name: "ID", type: "Idaho", value: 27, date: "2017-08-01"},
    {name: "ID", type: "Idaho", value: 9, date: "2017-09-01"},
    {name: "ID", type: "Idaho", value: 8, date: "2017-10-01"},
    {name: "ID", type: "Idaho", value: 4, date: "2017-11-01"},
    {name: "ID", type: "Idaho", value: 7, date: "2017-12-01"},
    {name: "ID", type: "Idaho", value: 5, date: "2018-01-01"},
    {name: "ID", type: "Idaho", value: 27, date: "2018-02-01"},
    {name: "ID", type: "Idaho", value: 44, date: "2018-03-01"},
    {name: "ID", type: "Idaho", value: 29, date: "2018-04-01"},
    {name: "ID", type: "Idaho", value: 38, date: "2018-05-01"},
    {name: "ID", type: "Idaho", value: 28, date: "2018-06-01"},
    {name: "ID", type: "Idaho", value: 49, date: "2018-07-01"},
    {name: "ID", type: "Idaho", value: 42, date: "2018-08-01"},
    {name: "ID", type: "Idaho", value: 35, date: "2018-09-01"},
    {name: "ID", type: "Idaho", value: 38, date: "2018-10-01"},
    {name: "ID", type: "Idaho", value: 27, date: "2018-11-01"},
    {name: "ID", type: "Idaho", value: 27, date: "2018-12-01"},
    {name: "ID", type: "Idaho", value: 48, date: "2019-01-01"},
    {name: "ID", type: "Idaho", value: 65, date: "2019-02-01"},
    {name: "ID", type: "Idaho", value: 28, date: "2019-03-01"},
    {name: "ID", type: "Idaho", value: 25, date: "2019-04-01"},
    {name: "ID", type: "Idaho", value: 43, date: "2019-05-01"},
    {name: "ID", type: "Idaho", value: 39, date: "2019-06-01"},
    {name: "ID", type: "Idaho", value: 54, date: "2019-07-01"},
    {name: "ID", type: "Idaho", value: 49, date: "2019-08-01"},
    {name: "ID", type: "Idaho", value: 37, date: "2019-09-01"},
    {name: "ID", type: "Idaho", value: 64, date: "2019-10-01"},
    {name: "ID", type: "Idaho", value: 31, date: "2019-11-01"},
    {name: "ID", type: "Idaho", value: 57, date: "2019-12-01"},
    {name: "ID", type: "Idaho", value: 73, date: "2020-01-01"},
    {name: "ID", type: "Idaho", value: 52, date: "2020-02-01"},
    {name: "ID", type: "Idaho", value: 41, date: "2020-03-01"},
    {name: "ID", type: "Idaho", value: 26, date: "2020-04-01"},
    {name: "ID", type: "Idaho", value: 50, date: "2020-05-01"},
    {name: "ID", type: "Idaho", value: 33, date: "2020-06-01"},
    {name: "ID", type: "Idaho", value: 2, date: "2020-08-01"},
    {name: "ID", type: "Idaho", value: 168, date: "2020-09-01"},
    {name: "ID", type: "Idaho", value: 510, date: "2020-10-01"},
    {name: "ID", type: "Idaho", value: 652, date: "2020-11-01"},
    {name: "ID", type: "Idaho", value: 864, date: "2020-12-01"},
    {name: "IL", type: "Illinois", value: 1, date: "2016-04-01"},
    {name: "IL", type: "Illinois", value: 703, date: "2016-06-01"},
    {name: "IL", type: "Illinois", value: 1617, date: "2016-07-01"},
    {name: "IL", type: "Illinois", value: 2076, date: "2016-08-01"},
    {name: "IL", type: "Illinois", value: 1809, date: "2016-09-01"},
    {name: "IL", type: "Illinois", value: 1869, date: "2016-10-01"},
    {name: "IL", type: "Illinois", value: 2201, date: "2016-11-01"},
    {name: "IL", type: "Illinois", value: 2179, date: "2016-12-01"},
    {name: "IL", type: "Illinois", value: 1819, date: "2017-01-01"},
    {name: "IL", type: "Illinois", value: 1778, date: "2017-02-01"},
    {name: "IL", type: "Illinois", value: 1897, date: "2017-03-01"},
    {name: "IL", type: "Illinois", value: 1710, date: "2017-04-01"},
    {name: "IL", type: "Illinois", value: 1502, date: "2017-05-01"},
    {name: "IL", type: "Illinois", value: 1620, date: "2017-06-01"},
    {name: "IL", type: "Illinois", value: 1270, date: "2017-07-01"},
    {name: "IL", type: "Illinois", value: 1357, date: "2017-08-01"},
    {name: "IL", type: "Illinois", value: 1156, date: "2017-09-01"},
    {name: "IL", type: "Illinois", value: 1473, date: "2017-10-01"},
    {name: "IL", type: "Illinois", value: 1373, date: "2017-11-01"},
    {name: "IL", type: "Illinois", value: 1283, date: "2017-12-01"},
    {name: "IL", type: "Illinois", value: 1605, date: "2018-01-01"},
    {name: "IL", type: "Illinois", value: 1323, date: "2018-02-01"},
    {name: "IL", type: "Illinois", value: 1268, date: "2018-03-01"},
    {name: "IL", type: "Illinois", value: 1075, date: "2018-04-01"},
    {name: "IL", type: "Illinois", value: 1168, date: "2018-05-01"},
    {name: "IL", type: "Illinois", value: 1178, date: "2018-06-01"},
    {name: "IL", type: "Illinois", value: 1300, date: "2018-07-01"},
    {name: "IL", type: "Illinois", value: 1316, date: "2018-08-01"},
    {name: "IL", type: "Illinois", value: 1417, date: "2018-09-01"},
    {name: "IL", type: "Illinois", value: 1763, date: "2018-10-01"},
    {name: "IL", type: "Illinois", value: 1555, date: "2018-11-01"},
    {name: "IL", type: "Illinois", value: 1020, date: "2018-12-01"},
    {name: "IL", type: "Illinois", value: 1395, date: "2019-01-01"},
    {name: "IL", type: "Illinois", value: 1184, date: "2019-02-01"},
    {name: "IL", type: "Illinois", value: 1061, date: "2019-03-01"},
    {name: "IL", type: "Illinois", value: 1140, date: "2019-04-01"},
    {name: "IL", type: "Illinois", value: 1278, date: "2019-05-01"},
    {name: "IL", type: "Illinois", value: 1031, date: "2019-06-01"},
    {name: "IL", type: "Illinois", value: 867, date: "2019-07-01"},
    {name: "IL", type: "Illinois", value: 917, date: "2019-08-01"},
    {name: "IL", type: "Illinois", value: 842, date: "2019-09-01"},
    {name: "IL", type: "Illinois", value: 1289, date: "2019-10-01"},
    {name: "IL", type: "Illinois", value: 1095, date: "2019-11-01"},
    {name: "IL", type: "Illinois", value: 1199, date: "2019-12-01"},
    {name: "IL", type: "Illinois", value: 1242, date: "2020-01-01"},
    {name: "IL", type: "Illinois", value: 1003, date: "2020-02-01"},
    {name: "IL", type: "Illinois", value: 1164, date: "2020-03-01"},
    {name: "IL", type: "Illinois", value: 1964, date: "2020-04-01"},
    {name: "IL", type: "Illinois", value: 2288, date: "2020-05-01"},
    {name: "IL", type: "Illinois", value: 2943, date: "2020-06-01"},
    {name: "IL", type: "Illinois", value: 513, date: "2020-07-01"},
    {name: "IL", type: "Illinois", value: 600, date: "2020-08-01"},
    {name: "IL", type: "Illinois", value: 944, date: "2020-09-01"},
    {name: "IL", type: "Illinois", value: 1712, date: "2020-10-01"},
    {name: "IL", type: "Illinois", value: 1599, date: "2020-11-01"},
    {name: "IL", type: "Illinois", value: 1675, date: "2020-12-01"},
    {name: "IN", type: "Indiana", value: 90, date: "2016-02-01"},
    {name: "IN", type: "Indiana", value: 62, date: "2016-03-01"},
    {name: "IN", type: "Indiana", value: 74, date: "2016-04-01"},
    {name: "IN", type: "Indiana", value: 58, date: "2016-05-01"},
    {name: "IN", type: "Indiana", value: 88, date: "2016-06-01"},
    {name: "IN", type: "Indiana", value: 160, date: "2016-07-01"},
    {name: "IN", type: "Indiana", value: 211, date: "2016-08-01"},
    {name: "IN", type: "Indiana", value: 173, date: "2016-09-01"},
    {name: "IN", type: "Indiana", value: 202, date: "2016-10-01"},
    {name: "IN", type: "Indiana", value: 203, date: "2016-11-01"},
    {name: "IN", type: "Indiana", value: 289, date: "2016-12-01"},
    {name: "IN", type: "Indiana", value: 215, date: "2017-01-01"},
    {name: "IN", type: "Indiana", value: 197, date: "2017-02-01"},
    {name: "IN", type: "Indiana", value: 190, date: "2017-03-01"},
    {name: "IN", type: "Indiana", value: 165, date: "2017-04-01"},
    {name: "IN", type: "Indiana", value: 225, date: "2017-05-01"},
    {name: "IN", type: "Indiana", value: 169, date: "2017-06-01"},
    {name: "IN", type: "Indiana", value: 227, date: "2017-07-01"},
    {name: "IN", type: "Indiana", value: 726, date: "2017-08-01"},
    {name: "IN", type: "Indiana", value: 791, date: "2017-09-01"},
    {name: "IN", type: "Indiana", value: 596, date: "2017-10-01"},
    {name: "IN", type: "Indiana", value: 365, date: "2017-11-01"},
    {name: "IN", type: "Indiana", value: 617, date: "2017-12-01"},
    {name: "IN", type: "Indiana", value: 938, date: "2018-01-01"},
    {name: "IN", type: "Indiana", value: 707, date: "2018-02-01"},
    {name: "IN", type: "Indiana", value: 624, date: "2018-03-01"},
    {name: "IN", type: "Indiana", value: 613, date: "2018-04-01"},
    {name: "IN", type: "Indiana", value: 608, date: "2018-05-01"},
    {name: "IN", type: "Indiana", value: 630, date: "2018-06-01"},
    {name: "IN", type: "Indiana", value: 678, date: "2018-07-01"},
    {name: "IN", type: "Indiana", value: 526, date: "2018-08-01"},
    {name: "IN", type: "Indiana", value: 771, date: "2018-09-01"},
    {name: "IN", type: "Indiana", value: 887, date: "2018-10-01"},
    {name: "IN", type: "Indiana", value: 338, date: "2018-11-01"},
    {name: "IN", type: "Indiana", value: 464, date: "2018-12-01"},
    {name: "IN", type: "Indiana", value: 493, date: "2019-01-01"},
    {name: "IN", type: "Indiana", value: 422, date: "2019-02-01"},
    {name: "IN", type: "Indiana", value: 300, date: "2019-03-01"},
    {name: "IN", type: "Indiana", value: 329, date: "2019-04-01"},
    {name: "IN", type: "Indiana", value: 418, date: "2019-05-01"},
    {name: "IN", type: "Indiana", value: 368, date: "2019-06-01"},
    {name: "IN", type: "Indiana", value: 452, date: "2019-07-01"},
    {name: "IN", type: "Indiana", value: 510, date: "2019-08-01"},
    {name: "IN", type: "Indiana", value: 418, date: "2019-09-01"},
    {name: "IN", type: "Indiana", value: 405, date: "2019-10-01"},
    {name: "IN", type: "Indiana", value: 285, date: "2019-11-01"},
    {name: "IN", type: "Indiana", value: 422, date: "2019-12-01"},
    {name: "IN", type: "Indiana", value: 371, date: "2020-01-01"},
    {name: "IN", type: "Indiana", value: 288, date: "2020-02-01"},
    {name: "IN", type: "Indiana", value: 317, date: "2020-03-01"},
    {name: "IN", type: "Indiana", value: 414, date: "2020-04-01"},
    {name: "IN", type: "Indiana", value: 650, date: "2020-05-01"},
    {name: "IN", type: "Indiana", value: 765, date: "2020-06-01"},
    {name: "IN", type: "Indiana", value: 157, date: "2020-07-01"},
    {name: "IN", type: "Indiana", value: 135, date: "2020-08-01"},
    {name: "IN", type: "Indiana", value: 476, date: "2020-09-01"},
    {name: "IN", type: "Indiana", value: 808, date: "2020-10-01"},
    {name: "IN", type: "Indiana", value: 855, date: "2020-11-01"},
    {name: "IN", type: "Indiana", value: 1058, date: "2020-12-01"},
    {name: "KS", type: "Kansas", value: 49, date: "2016-06-01"},
    {name: "KS", type: "Kansas", value: 97, date: "2016-07-01"},
    {name: "KS", type: "Kansas", value: 139, date: "2016-08-01"},
    {name: "KS", type: "Kansas", value: 93, date: "2016-09-01"},
    {name: "KS", type: "Kansas", value: 122, date: "2016-10-01"},
    {name: "KS", type: "Kansas", value: 144, date: "2016-11-01"},
    {name: "KS", type: "Kansas", value: 118, date: "2016-12-01"},
    {name: "KS", type: "Kansas", value: 128, date: "2017-01-01"},
    {name: "KS", type: "Kansas", value: 89, date: "2017-02-01"},
    {name: "KS", type: "Kansas", value: 141, date: "2017-03-01"},
    {name: "KS", type: "Kansas", value: 118, date: "2017-04-01"},
    {name: "KS", type: "Kansas", value: 110, date: "2017-05-01"},
    {name: "KS", type: "Kansas", value: 87, date: "2017-06-01"},
    {name: "KS", type: "Kansas", value: 127, date: "2017-07-01"},
    {name: "KS", type: "Kansas", value: 191, date: "2017-08-01"},
    {name: "KS", type: "Kansas", value: 116, date: "2017-09-01"},
    {name: "KS", type: "Kansas", value: 104, date: "2017-10-01"},
    {name: "KS", type: "Kansas", value: 108, date: "2017-11-01"},
    {name: "KS", type: "Kansas", value: 134, date: "2017-12-01"},
    {name: "KS", type: "Kansas", value: 180, date: "2018-01-01"},
    {name: "KS", type: "Kansas", value: 143, date: "2018-02-01"},
    {name: "KS", type: "Kansas", value: 168, date: "2018-03-01"},
    {name: "KS", type: "Kansas", value: 130, date: "2018-04-01"},
    {name: "KS", type: "Kansas", value: 124, date: "2018-05-01"},
    {name: "KS", type: "Kansas", value: 95, date: "2018-06-01"},
    {name: "KS", type: "Kansas", value: 97, date: "2018-07-01"},
    {name: "KS", type: "Kansas", value: 147, date: "2018-08-01"},
    {name: "KS", type: "Kansas", value: 141, date: "2018-09-01"},
    {name: "KS", type: "Kansas", value: 184, date: "2018-10-01"},
    {name: "KS", type: "Kansas", value: 186, date: "2018-11-01"},
    {name: "KS", type: "Kansas", value: 123, date: "2018-12-01"},
    {name: "KS", type: "Kansas", value: 126, date: "2019-01-01"},
    {name: "KS", type: "Kansas", value: 140, date: "2019-02-01"},
    {name: "KS", type: "Kansas", value: 93, date: "2019-03-01"},
    {name: "KS", type: "Kansas", value: 111, date: "2019-04-01"},
    {name: "KS", type: "Kansas", value: 97, date: "2019-05-01"},
    {name: "KS", type: "Kansas", value: 104, date: "2019-06-01"},
    {name: "KS", type: "Kansas", value: 106, date: "2019-07-01"},
    {name: "KS", type: "Kansas", value: 98, date: "2019-08-01"},
    {name: "KS", type: "Kansas", value: 87, date: "2019-09-01"},
    {name: "KS", type: "Kansas", value: 97, date: "2019-10-01"},
    {name: "KS", type: "Kansas", value: 87, date: "2019-11-01"},
    {name: "KS", type: "Kansas", value: 86, date: "2019-12-01"},
    {name: "KS", type: "Kansas", value: 108, date: "2020-01-01"},
    {name: "KS", type: "Kansas", value: 60, date: "2020-02-01"},
    {name: "KS", type: "Kansas", value: 80, date: "2020-03-01"},
    {name: "KS", type: "Kansas", value: 153, date: "2020-04-01"},
    {name: "KS", type: "Kansas", value: 183, date: "2020-05-01"},
    {name: "KS", type: "Kansas", value: 189, date: "2020-06-01"},
    {name: "KS", type: "Kansas", value: 51, date: "2020-07-01"},
    {name: "KS", type: "Kansas", value: 37, date: "2020-08-01"},
    {name: "KS", type: "Kansas", value: 191, date: "2020-09-01"},
    {name: "KS", type: "Kansas", value: 274, date: "2020-10-01"},
    {name: "KS", type: "Kansas", value: 454, date: "2020-11-01"},
    {name: "KS", type: "Kansas", value: 499, date: "2020-12-01"},
    {name: "KY", type: "Kentucky", value: 41, date: "2016-02-01"},
    {name: "KY", type: "Kentucky", value: 121, date: "2016-03-01"},
    {name: "KY", type: "Kentucky", value: 92, date: "2016-04-01"},
    {name: "KY", type: "Kentucky", value: 62, date: "2016-05-01"},
    {name: "KY", type: "Kentucky", value: 68, date: "2016-06-01"},
    {name: "KY", type: "Kentucky", value: 138, date: "2016-07-01"},
    {name: "KY", type: "Kentucky", value: 126, date: "2016-08-01"},
    {name: "KY", type: "Kentucky", value: 80, date: "2016-09-01"},
    {name: "KY", type: "Kentucky", value: 121, date: "2016-10-01"},
    {name: "KY", type: "Kentucky", value: 123, date: "2016-11-01"},
    {name: "KY", type: "Kentucky", value: 95, date: "2016-12-01"},
    {name: "KY", type: "Kentucky", value: 53, date: "2017-01-01"},
    {name: "KY", type: "Kentucky", value: 57, date: "2017-02-01"},
    {name: "KY", type: "Kentucky", value: 99, date: "2017-03-01"},
    {name: "KY", type: "Kentucky", value: 56, date: "2017-04-01"},
    {name: "KY", type: "Kentucky", value: 49, date: "2017-05-01"},
    {name: "KY", type: "Kentucky", value: 61, date: "2017-06-01"},
    {name: "KY", type: "Kentucky", value: 101, date: "2017-07-01"},
    {name: "KY", type: "Kentucky", value: 321, date: "2017-08-01"},
    {name: "KY", type: "Kentucky", value: 391, date: "2017-09-01"},
    {name: "KY", type: "Kentucky", value: 382, date: "2017-10-01"},
    {name: "KY", type: "Kentucky", value: 205, date: "2017-11-01"},
    {name: "KY", type: "Kentucky", value: 323, date: "2017-12-01"},
    {name: "KY", type: "Kentucky", value: 413, date: "2018-01-01"},
    {name: "KY", type: "Kentucky", value: 420, date: "2018-02-01"},
    {name: "KY", type: "Kentucky", value: 371, date: "2018-03-01"},
    {name: "KY", type: "Kentucky", value: 374, date: "2018-04-01"},
    {name: "KY", type: "Kentucky", value: 298, date: "2018-05-01"},
    {name: "KY", type: "Kentucky", value: 371, date: "2018-06-01"},
    {name: "KY", type: "Kentucky", value: 363, date: "2018-07-01"},
    {name: "KY", type: "Kentucky", value: 370, date: "2018-08-01"},
    {name: "KY", type: "Kentucky", value: 427, date: "2018-09-01"},
    {name: "KY", type: "Kentucky", value: 457, date: "2018-10-01"},
    {name: "KY", type: "Kentucky", value: 389, date: "2018-11-01"},
    {name: "KY", type: "Kentucky", value: 318, date: "2018-12-01"},
    {name: "KY", type: "Kentucky", value: 299, date: "2019-01-01"},
    {name: "KY", type: "Kentucky", value: 264, date: "2019-02-01"},
    {name: "KY", type: "Kentucky", value: 251, date: "2019-03-01"},
    {name: "KY", type: "Kentucky", value: 259, date: "2019-04-01"},
    {name: "KY", type: "Kentucky", value: 311, date: "2019-05-01"},
    {name: "KY", type: "Kentucky", value: 328, date: "2019-06-01"},
    {name: "KY", type: "Kentucky", value: 325, date: "2019-07-01"},
    {name: "KY", type: "Kentucky", value: 304, date: "2019-08-01"},
    {name: "KY", type: "Kentucky", value: 345, date: "2019-09-01"},
    {name: "KY", type: "Kentucky", value: 411, date: "2019-10-01"},
    {name: "KY", type: "Kentucky", value: 365, date: "2019-11-01"},
    {name: "KY", type: "Kentucky", value: 275, date: "2019-12-01"},
    {name: "KY", type: "Kentucky", value: 320, date: "2020-01-01"},
    {name: "KY", type: "Kentucky", value: 280, date: "2020-02-01"},
    {name: "KY", type: "Kentucky", value: 315, date: "2020-03-01"},
    {name: "KY", type: "Kentucky", value: 412, date: "2020-04-01"},
    {name: "KY", type: "Kentucky", value: 509, date: "2020-05-01"},
    {name: "KY", type: "Kentucky", value: 636, date: "2020-06-01"},
    {name: "KY", type: "Kentucky", value: 122, date: "2020-07-01"},
    {name: "KY", type: "Kentucky", value: 150, date: "2020-08-01"},
    {name: "KY", type: "Kentucky", value: 188, date: "2020-09-01"},
    {name: "KY", type: "Kentucky", value: 294, date: "2020-10-01"},
    {name: "KY", type: "Kentucky", value: 318, date: "2020-11-01"},
    {name: "KY", type: "Kentucky", value: 279, date: "2020-12-01"},
    {name: "LA", type: "Louisiana", value: 44, date: "2016-06-01"},
    {name: "LA", type: "Louisiana", value: 134, date: "2016-07-01"},
    {name: "LA", type: "Louisiana", value: 204, date: "2016-08-01"},
    {name: "LA", type: "Louisiana", value: 118, date: "2016-09-01"},
    {name: "LA", type: "Louisiana", value: 96, date: "2016-10-01"},
    {name: "LA", type: "Louisiana", value: 136, date: "2016-11-01"},
    {name: "LA", type: "Louisiana", value: 117, date: "2016-12-01"},
    {name: "LA", type: "Louisiana", value: 129, date: "2017-01-01"},
    {name: "LA", type: "Louisiana", value: 120, date: "2017-02-01"},
    {name: "LA", type: "Louisiana", value: 161, date: "2017-03-01"},
    {name: "LA", type: "Louisiana", value: 127, date: "2017-04-01"},
    {name: "LA", type: "Louisiana", value: 28, date: "2017-05-01"},
    {name: "LA", type: "Louisiana", value: 154, date: "2017-07-01"},
    {name: "LA", type: "Louisiana", value: 1422, date: "2017-08-01"},
    {name: "LA", type: "Louisiana", value: 1437, date: "2017-09-01"},
    {name: "LA", type: "Louisiana", value: 1258, date: "2017-10-01"},
    {name: "LA", type: "Louisiana", value: 897, date: "2017-11-01"},
    {name: "LA", type: "Louisiana", value: 767, date: "2017-12-01"},
    {name: "LA", type: "Louisiana", value: 826, date: "2018-01-01"},
    {name: "LA", type: "Louisiana", value: 820, date: "2018-02-01"},
    {name: "LA", type: "Louisiana", value: 1075, date: "2018-03-01"},
    {name: "LA", type: "Louisiana", value: 1093, date: "2018-04-01"},
    {name: "LA", type: "Louisiana", value: 1246, date: "2018-05-01"},
    {name: "LA", type: "Louisiana", value: 856, date: "2018-06-01"},
    {name: "LA", type: "Louisiana", value: 698, date: "2018-07-01"},
    {name: "LA", type: "Louisiana", value: 886, date: "2018-08-01"},
    {name: "LA", type: "Louisiana", value: 876, date: "2018-09-01"},
    {name: "LA", type: "Louisiana", value: 898, date: "2018-10-01"},
    {name: "LA", type: "Louisiana", value: 858, date: "2018-11-01"},
    {name: "LA", type: "Louisiana", value: 759, date: "2018-12-01"},
    {name: "LA", type: "Louisiana", value: 780, date: "2019-01-01"},
    {name: "LA", type: "Louisiana", value: 757, date: "2019-02-01"},
    {name: "LA", type: "Louisiana", value: 873, date: "2019-03-01"},
    {name: "LA", type: "Louisiana", value: 876, date: "2019-04-01"},
    {name: "LA", type: "Louisiana", value: 845, date: "2019-05-01"},
    {name: "LA", type: "Louisiana", value: 798, date: "2019-06-01"},
    {name: "LA", type: "Louisiana", value: 822, date: "2019-07-01"},
    {name: "LA", type: "Louisiana", value: 961, date: "2019-08-01"},
    {name: "LA", type: "Louisiana", value: 1032, date: "2019-09-01"},
    {name: "LA", type: "Louisiana", value: 794, date: "2019-10-01"},
    {name: "LA", type: "Louisiana", value: 704, date: "2019-11-01"},
    {name: "LA", type: "Louisiana", value: 650, date: "2019-12-01"},
    {name: "LA", type: "Louisiana", value: 707, date: "2020-01-01"},
    {name: "LA", type: "Louisiana", value: 696, date: "2020-02-01"},
    {name: "LA", type: "Louisiana", value: 1038, date: "2020-03-01"},
    {name: "LA", type: "Louisiana", value: 1220, date: "2020-04-01"},
    {name: "LA", type: "Louisiana", value: 1129, date: "2020-05-01"},
    {name: "LA", type: "Louisiana", value: 1389, date: "2020-06-01"},
    {name: "LA", type: "Louisiana", value: 582, date: "2020-07-01"},
    {name: "LA", type: "Louisiana", value: 526, date: "2020-08-01"},
    {name: "LA", type: "Louisiana", value: 1724, date: "2020-09-01"},
    {name: "LA", type: "Louisiana", value: 3080, date: "2020-10-01"},
    {name: "LA", type: "Louisiana", value: 4501, date: "2020-11-01"},
    {name: "LA", type: "Louisiana", value: 5379, date: "2020-12-01"},
    {name: "MA", type: "Massachusetts", value: 35, date: "2016-03-01"},
    {name: "MA", type: "Massachusetts", value: 66, date: "2016-04-01"},
    {name: "MA", type: "Massachusetts", value: 84, date: "2016-05-01"},
    {name: "MA", type: "Massachusetts", value: 183, date: "2016-06-01"},
    {name: "MA", type: "Massachusetts", value: 416, date: "2016-07-01"},
    {name: "MA", type: "Massachusetts", value: 459, date: "2016-08-01"},
    {name: "MA", type: "Massachusetts", value: 381, date: "2016-09-01"},
    {name: "MA", type: "Massachusetts", value: 410, date: "2016-10-01"},
    {name: "MA", type: "Massachusetts", value: 509, date: "2016-11-01"},
    {name: "MA", type: "Massachusetts", value: 463, date: "2016-12-01"},
    {name: "MA", type: "Massachusetts", value: 499, date: "2017-01-01"},
    {name: "MA", type: "Massachusetts", value: 522, date: "2017-02-01"},
    {name: "MA", type: "Massachusetts", value: 420, date: "2017-03-01"},
    {name: "MA", type: "Massachusetts", value: 283, date: "2017-04-01"},
    {name: "MA", type: "Massachusetts", value: 248, date: "2017-05-01"},
    {name: "MA", type: "Massachusetts", value: 310, date: "2017-06-01"},
    {name: "MA", type: "Massachusetts", value: 324, date: "2017-07-01"},
    {name: "MA", type: "Massachusetts", value: 473, date: "2017-08-01"},
    {name: "MA", type: "Massachusetts", value: 457, date: "2017-09-01"},
    {name: "MA", type: "Massachusetts", value: 523, date: "2017-10-01"},
    {name: "MA", type: "Massachusetts", value: 515, date: "2017-11-01"},
    {name: "MA", type: "Massachusetts", value: 431, date: "2017-12-01"},
    {name: "MA", type: "Massachusetts", value: 538, date: "2018-01-01"},
    {name: "MA", type: "Massachusetts", value: 464, date: "2018-02-01"},
    {name: "MA", type: "Massachusetts", value: 368, date: "2018-03-01"},
    {name: "MA", type: "Massachusetts", value: 321, date: "2018-04-01"},
    {name: "MA", type: "Massachusetts", value: 483, date: "2018-05-01"},
    {name: "MA", type: "Massachusetts", value: 483, date: "2018-06-01"},
    {name: "MA", type: "Massachusetts", value: 276, date: "2018-07-01"},
    {name: "MA", type: "Massachusetts", value: 426, date: "2018-08-01"},
    {name: "MA", type: "Massachusetts", value: 378, date: "2018-09-01"},
    {name: "MA", type: "Massachusetts", value: 560, date: "2018-10-01"},
    {name: "MA", type: "Massachusetts", value: 515, date: "2018-11-01"},
    {name: "MA", type: "Massachusetts", value: 380, date: "2018-12-01"},
    {name: "MA", type: "Massachusetts", value: 499, date: "2019-01-01"},
    {name: "MA", type: "Massachusetts", value: 456, date: "2019-02-01"},
    {name: "MA", type: "Massachusetts", value: 411, date: "2019-03-01"},
    {name: "MA", type: "Massachusetts", value: 384, date: "2019-04-01"},
    {name: "MA", type: "Massachusetts", value: 421, date: "2019-05-01"},
    {name: "MA", type: "Massachusetts", value: 328, date: "2019-06-01"},
    {name: "MA", type: "Massachusetts", value: 386, date: "2019-07-01"},
    {name: "MA", type: "Massachusetts", value: 335, date: "2019-08-01"},
    {name: "MA", type: "Massachusetts", value: 403, date: "2019-09-01"},
    {name: "MA", type: "Massachusetts", value: 475, date: "2019-10-01"},
    {name: "MA", type: "Massachusetts", value: 425, date: "2019-11-01"},
    {name: "MA", type: "Massachusetts", value: 465, date: "2019-12-01"},
    {name: "MA", type: "Massachusetts", value: 454, date: "2020-01-01"},
    {name: "MA", type: "Massachusetts", value: 445, date: "2020-02-01"},
    {name: "MA", type: "Massachusetts", value: 643, date: "2020-03-01"},
    {name: "MA", type: "Massachusetts", value: 999, date: "2020-04-01"},
    {name: "MA", type: "Massachusetts", value: 842, date: "2020-05-01"},
    {name: "MA", type: "Massachusetts", value: 843, date: "2020-06-01"},
    {name: "MA", type: "Massachusetts", value: 340, date: "2020-07-01"},
    {name: "MA", type: "Massachusetts", value: 357, date: "2020-08-01"},
    {name: "MA", type: "Massachusetts", value: 417, date: "2020-09-01"},
    {name: "MA", type: "Massachusetts", value: 506, date: "2020-10-01"},
    {name: "MA", type: "Massachusetts", value: 560, date: "2020-11-01"},
    {name: "MA", type: "Massachusetts", value: 524, date: "2020-12-01"},
    {name: "MD", type: "Maryland", value: 8, date: "2016-03-01"},
    {name: "MD", type: "Maryland", value: 18, date: "2016-04-01"},
    {name: "MD", type: "Maryland", value: 19, date: "2016-05-01"},
    {name: "MD", type: "Maryland", value: 335, date: "2016-06-01"},
    {name: "MD", type: "Maryland", value: 620, date: "2016-07-01"},
    {name: "MD", type: "Maryland", value: 698, date: "2016-08-01"},
    {name: "MD", type: "Maryland", value: 610, date: "2016-09-01"},
    {name: "MD", type: "Maryland", value: 740, date: "2016-10-01"},
    {name: "MD", type: "Maryland", value: 870, date: "2016-11-01"},
    {name: "MD", type: "Maryland", value: 939, date: "2016-12-01"},
    {name: "MD", type: "Maryland", value: 752, date: "2017-01-01"},
    {name: "MD", type: "Maryland", value: 710, date: "2017-02-01"},
    {name: "MD", type: "Maryland", value: 827, date: "2017-03-01"},
    {name: "MD", type: "Maryland", value: 657, date: "2017-04-01"},
    {name: "MD", type: "Maryland", value: 572, date: "2017-05-01"},
    {name: "MD", type: "Maryland", value: 725, date: "2017-06-01"},
    {name: "MD", type: "Maryland", value: 702, date: "2017-07-01"},
    {name: "MD", type: "Maryland", value: 790, date: "2017-08-01"},
    {name: "MD", type: "Maryland", value: 796, date: "2017-09-01"},
    {name: "MD", type: "Maryland", value: 571, date: "2017-10-01"},
    {name: "MD", type: "Maryland", value: 548, date: "2017-11-01"},
    {name: "MD", type: "Maryland", value: 819, date: "2017-12-01"},
    {name: "MD", type: "Maryland", value: 786, date: "2018-01-01"},
    {name: "MD", type: "Maryland", value: 733, date: "2018-02-01"},
    {name: "MD", type: "Maryland", value: 754, date: "2018-03-01"},
    {name: "MD", type: "Maryland", value: 573, date: "2018-04-01"},
    {name: "MD", type: "Maryland", value: 570, date: "2018-05-01"},
    {name: "MD", type: "Maryland", value: 482, date: "2018-06-01"},
    {name: "MD", type: "Maryland", value: 504, date: "2018-07-01"},
    {name: "MD", type: "Maryland", value: 357, date: "2018-08-01"},
    {name: "MD", type: "Maryland", value: 510, date: "2018-09-01"},
    {name: "MD", type: "Maryland", value: 764, date: "2018-10-01"},
    {name: "MD", type: "Maryland", value: 747, date: "2018-11-01"},
    {name: "MD", type: "Maryland", value: 635, date: "2018-12-01"},
    {name: "MD", type: "Maryland", value: 859, date: "2019-01-01"},
    {name: "MD", type: "Maryland", value: 807, date: "2019-02-01"},
    {name: "MD", type: "Maryland", value: 713, date: "2019-03-01"},
    {name: "MD", type: "Maryland", value: 582, date: "2019-04-01"},
    {name: "MD", type: "Maryland", value: 679, date: "2019-05-01"},
    {name: "MD", type: "Maryland", value: 645, date: "2019-06-01"},
    {name: "MD", type: "Maryland", value: 729, date: "2019-07-01"},
    {name: "MD", type: "Maryland", value: 628, date: "2019-08-01"},
    {name: "MD", type: "Maryland", value: 506, date: "2019-09-01"},
    {name: "MD", type: "Maryland", value: 711, date: "2019-10-01"},
    {name: "MD", type: "Maryland", value: 481, date: "2019-11-01"},
    {name: "MD", type: "Maryland", value: 711, date: "2019-12-01"},
    {name: "MD", type: "Maryland", value: 503, date: "2020-01-01"},
    {name: "MD", type: "Maryland", value: 451, date: "2020-02-01"},
    {name: "MD", type: "Maryland", value: 1501, date: "2020-03-01"},
    {name: "MD", type: "Maryland", value: 2706, date: "2020-04-01"},
    {name: "MD", type: "Maryland", value: 1987, date: "2020-05-01"},
    {name: "MD", type: "Maryland", value: 1858, date: "2020-06-01"},
    {name: "MD", type: "Maryland", value: 209, date: "2020-07-01"},
    {name: "MD", type: "Maryland", value: 243, date: "2020-08-01"},
    {name: "MD", type: "Maryland", value: 1900, date: "2020-09-01"},
    {name: "MD", type: "Maryland", value: 3396, date: "2020-10-01"},
    {name: "MD", type: "Maryland", value: 4074, date: "2020-11-01"},
    {name: "MD", type: "Maryland", value: 5135, date: "2020-12-01"},
    {name: "ME", type: "Maine", value: 1, date: "2016-03-01"},
    {name: "ME", type: "Maine", value: 2, date: "2016-04-01"},
    {name: "ME", type: "Maine", value: 1, date: "2016-06-01"},
    {name: "ME", type: "Maine", value: 20, date: "2016-07-01"},
    {name: "ME", type: "Maine", value: 19, date: "2016-08-01"},
    {name: "ME", type: "Maine", value: 17, date: "2016-09-01"},
    {name: "ME", type: "Maine", value: 15, date: "2016-10-01"},
    {name: "ME", type: "Maine", value: 23, date: "2016-11-01"},
    {name: "ME", type: "Maine", value: 37, date: "2016-12-01"},
    {name: "ME", type: "Maine", value: 37, date: "2017-01-01"},
    {name: "ME", type: "Maine", value: 61, date: "2017-02-01"},
    {name: "ME", type: "Maine", value: 44, date: "2017-03-01"},
    {name: "ME", type: "Maine", value: 36, date: "2017-04-01"},
    {name: "ME", type: "Maine", value: 47, date: "2017-05-01"},
    {name: "ME", type: "Maine", value: 48, date: "2017-06-01"},
    {name: "ME", type: "Maine", value: 62, date: "2017-07-01"},
    {name: "ME", type: "Maine", value: 70, date: "2017-08-01"},
    {name: "ME", type: "Maine", value: 49, date: "2017-09-01"},
    {name: "ME", type: "Maine", value: 37, date: "2017-10-01"},
    {name: "ME", type: "Maine", value: 26, date: "2017-11-01"},
    {name: "ME", type: "Maine", value: 68, date: "2017-12-01"},
    {name: "ME", type: "Maine", value: 52, date: "2018-01-01"},
    {name: "ME", type: "Maine", value: 31, date: "2018-02-01"},
    {name: "ME", type: "Maine", value: 22, date: "2018-03-01"},
    {name: "ME", type: "Maine", value: 38, date: "2018-04-01"},
    {name: "ME", type: "Maine", value: 29, date: "2018-05-01"},
    {name: "ME", type: "Maine", value: 55, date: "2018-06-01"},
    {name: "ME", type: "Maine", value: 93, date: "2018-07-01"},
    {name: "ME", type: "Maine", value: 99, date: "2018-08-01"},
    {name: "ME", type: "Maine", value: 79, date: "2018-09-01"},
    {name: "ME", type: "Maine", value: 63, date: "2018-10-01"},
    {name: "ME", type: "Maine", value: 75, date: "2018-11-01"},
    {name: "ME", type: "Maine", value: 51, date: "2018-12-01"},
    {name: "ME", type: "Maine", value: 39, date: "2019-01-01"},
    {name: "ME", type: "Maine", value: 51, date: "2019-02-01"},
    {name: "ME", type: "Maine", value: 55, date: "2019-03-01"},
    {name: "ME", type: "Maine", value: 39, date: "2019-04-01"},
    {name: "ME", type: "Maine", value: 46, date: "2019-05-01"},
    {name: "ME", type: "Maine", value: 60, date: "2019-06-01"},
    {name: "ME", type: "Maine", value: 79, date: "2019-07-01"},
    {name: "ME", type: "Maine", value: 64, date: "2019-08-01"},
    {name: "ME", type: "Maine", value: 49, date: "2019-09-01"},
    {name: "ME", type: "Maine", value: 57, date: "2019-10-01"},
    {name: "ME", type: "Maine", value: 31, date: "2019-11-01"},
    {name: "ME", type: "Maine", value: 52, date: "2019-12-01"},
    {name: "ME", type: "Maine", value: 38, date: "2020-01-01"},
    {name: "ME", type: "Maine", value: 52, date: "2020-02-01"},
    {name: "ME", type: "Maine", value: 19, date: "2020-03-01"},
    {name: "ME", type: "Maine", value: 16, date: "2020-04-01"},
    {name: "ME", type: "Maine", value: 23, date: "2020-05-01"},
    {name: "ME", type: "Maine", value: 26, date: "2020-06-01"},
    {name: "ME", type: "Maine", value: 2, date: "2020-07-01"},
    {name: "ME", type: "Maine", value: 2, date: "2020-08-01"},
    {name: "ME", type: "Maine", value: 2, date: "2020-09-01"},
    {name: "ME", type: "Maine", value: 12, date: "2020-10-01"},
    {name: "ME", type: "Maine", value: 13, date: "2020-11-01"},
    {name: "ME", type: "Maine", value: 32, date: "2020-12-01"},
    {name: "MI", type: "Michigan", value: 10, date: "2016-02-01"},
    {name: "MI", type: "Michigan", value: 12, date: "2016-03-01"},
    {name: "MI", type: "Michigan", value: 3, date: "2016-04-01"},
    {name: "MI", type: "Michigan", value: 4, date: "2016-05-01"},
    {name: "MI", type: "Michigan", value: 441, date: "2016-06-01"},
    {name: "MI", type: "Michigan", value: 1206, date: "2016-07-01"},
    {name: "MI", type: "Michigan", value: 1482, date: "2016-08-01"},
    {name: "MI", type: "Michigan", value: 1512, date: "2016-09-01"},
    {name: "MI", type: "Michigan", value: 1570, date: "2016-10-01"},
    {name: "MI", type: "Michigan", value: 1634, date: "2016-11-01"},
    {name: "MI", type: "Michigan", value: 2024, date: "2016-12-01"},
    {name: "MI", type: "Michigan", value: 1639, date: "2017-01-01"},
    {name: "MI", type: "Michigan", value: 1232, date: "2017-02-01"},
    {name: "MI", type: "Michigan", value: 1651, date: "2017-03-01"},
    {name: "MI", type: "Michigan", value: 1207, date: "2017-04-01"},
    {name: "MI", type: "Michigan", value: 1161, date: "2017-05-01"},
    {name: "MI", type: "Michigan", value: 1398, date: "2017-06-01"},
    {name: "MI", type: "Michigan", value: 1186, date: "2017-07-01"},
    {name: "MI", type: "Michigan", value: 1446, date: "2017-08-01"},
    {name: "MI", type: "Michigan", value: 1400, date: "2017-09-01"},
    {name: "MI", type: "Michigan", value: 1490, date: "2017-10-01"},
    {name: "MI", type: "Michigan", value: 968, date: "2017-11-01"},
    {name: "MI", type: "Michigan", value: 1815, date: "2017-12-01"},
    {name: "MI", type: "Michigan", value: 1745, date: "2018-01-01"},
    {name: "MI", type: "Michigan", value: 1474, date: "2018-02-01"},
    {name: "MI", type: "Michigan", value: 1293, date: "2018-03-01"},
    {name: "MI", type: "Michigan", value: 1298, date: "2018-04-01"},
    {name: "MI", type: "Michigan", value: 1443, date: "2018-05-01"},
    {name: "MI", type: "Michigan", value: 1122, date: "2018-06-01"},
    {name: "MI", type: "Michigan", value: 967, date: "2018-07-01"},
    {name: "MI", type: "Michigan", value: 1106, date: "2018-08-01"},
    {name: "MI", type: "Michigan", value: 1144, date: "2018-09-01"},
    {name: "MI", type: "Michigan", value: 1225, date: "2018-10-01"},
    {name: "MI", type: "Michigan", value: 1150, date: "2018-11-01"},
    {name: "MI", type: "Michigan", value: 905, date: "2018-12-01"},
    {name: "MI", type: "Michigan", value: 1569, date: "2019-01-01"},
    {name: "MI", type: "Michigan", value: 1095, date: "2019-02-01"},
    {name: "MI", type: "Michigan", value: 890, date: "2019-03-01"},
    {name: "MI", type: "Michigan", value: 974, date: "2019-04-01"},
    {name: "MI", type: "Michigan", value: 1125, date: "2019-05-01"},
    {name: "MI", type: "Michigan", value: 992, date: "2019-06-01"},
    {name: "MI", type: "Michigan", value: 1092, date: "2019-07-01"},
    {name: "MI", type: "Michigan", value: 899, date: "2019-08-01"},
    {name: "MI", type: "Michigan", value: 925, date: "2019-09-01"},
    {name: "MI", type: "Michigan", value: 1178, date: "2019-10-01"},
    {name: "MI", type: "Michigan", value: 1054, date: "2019-11-01"},
    {name: "MI", type: "Michigan", value: 852, date: "2019-12-01"},
    {name: "MI", type: "Michigan", value: 1006, date: "2020-01-01"},
    {name: "MI", type: "Michigan", value: 809, date: "2020-02-01"},
    {name: "MI", type: "Michigan", value: 729, date: "2020-03-01"},
    {name: "MI", type: "Michigan", value: 725, date: "2020-04-01"},
    {name: "MI", type: "Michigan", value: 821, date: "2020-05-01"},
    {name: "MI", type: "Michigan", value: 1027, date: "2020-06-01"},
    {name: "MI", type: "Michigan", value: 310, date: "2020-07-01"},
    {name: "MI", type: "Michigan", value: 312, date: "2020-08-01"},
    {name: "MI", type: "Michigan", value: 982, date: "2020-09-01"},
    {name: "MI", type: "Michigan", value: 1640, date: "2020-10-01"},
    {name: "MI", type: "Michigan", value: 2370, date: "2020-11-01"},
    {name: "MI", type: "Michigan", value: 2334, date: "2020-12-01"},
    {name: "MN", type: "Minnesota", value: 3, date: "2016-03-01"},
    {name: "MN", type: "Minnesota", value: 4, date: "2016-04-01"},
    {name: "MN", type: "Minnesota", value: 1, date: "2016-05-01"},
    {name: "MN", type: "Minnesota", value: 107, date: "2016-06-01"},
    {name: "MN", type: "Minnesota", value: 316, date: "2016-07-01"},
    {name: "MN", type: "Minnesota", value: 463, date: "2016-08-01"},
    {name: "MN", type: "Minnesota", value: 345, date: "2016-09-01"},
    {name: "MN", type: "Minnesota", value: 413, date: "2016-10-01"},
    {name: "MN", type: "Minnesota", value: 415, date: "2016-11-01"},
    {name: "MN", type: "Minnesota", value: 500, date: "2016-12-01"},
    {name: "MN", type: "Minnesota", value: 491, date: "2017-01-01"},
    {name: "MN", type: "Minnesota", value: 224, date: "2017-02-01"},
    {name: "MN", type: "Minnesota", value: 248, date: "2017-03-01"},
    {name: "MN", type: "Minnesota", value: 295, date: "2017-04-01"},
    {name: "MN", type: "Minnesota", value: 307, date: "2017-05-01"},
    {name: "MN", type: "Minnesota", value: 335, date: "2017-06-01"},
    {name: "MN", type: "Minnesota", value: 433, date: "2017-07-01"},
    {name: "MN", type: "Minnesota", value: 948, date: "2017-08-01"},
    {name: "MN", type: "Minnesota", value: 872, date: "2017-09-01"},
    {name: "MN", type: "Minnesota", value: 844, date: "2017-10-01"},
    {name: "MN", type: "Minnesota", value: 790, date: "2017-11-01"},
    {name: "MN", type: "Minnesota", value: 1218, date: "2017-12-01"},
    {name: "MN", type: "Minnesota", value: 1302, date: "2018-01-01"},
    {name: "MN", type: "Minnesota", value: 1032, date: "2018-02-01"},
    {name: "MN", type: "Minnesota", value: 851, date: "2018-03-01"},
    {name: "MN", type: "Minnesota", value: 940, date: "2018-04-01"},
    {name: "MN", type: "Minnesota", value: 722, date: "2018-05-01"},
    {name: "MN", type: "Minnesota", value: 788, date: "2018-06-01"},
    {name: "MN", type: "Minnesota", value: 763, date: "2018-07-01"},
    {name: "MN", type: "Minnesota", value: 898, date: "2018-08-01"},
    {name: "MN", type: "Minnesota", value: 845, date: "2018-09-01"},
    {name: "MN", type: "Minnesota", value: 905, date: "2018-10-01"},
    {name: "MN", type: "Minnesota", value: 1057, date: "2018-11-01"},
    {name: "MN", type: "Minnesota", value: 1104, date: "2018-12-01"},
    {name: "MN", type: "Minnesota", value: 1364, date: "2019-01-01"},
    {name: "MN", type: "Minnesota", value: 1551, date: "2019-02-01"},
    {name: "MN", type: "Minnesota", value: 1022, date: "2019-03-01"},
    {name: "MN", type: "Minnesota", value: 890, date: "2019-04-01"},
    {name: "MN", type: "Minnesota", value: 790, date: "2019-05-01"},
    {name: "MN", type: "Minnesota", value: 749, date: "2019-06-01"},
    {name: "MN", type: "Minnesota", value: 721, date: "2019-07-01"},
    {name: "MN", type: "Minnesota", value: 765, date: "2019-08-01"},
    {name: "MN", type: "Minnesota", value: 833, date: "2019-09-01"},
    {name: "MN", type: "Minnesota", value: 3679, date: "2019-10-01"},
    {name: "MN", type: "Minnesota", value: 2786, date: "2019-11-01"},
    {name: "MN", type: "Minnesota", value: 5702, date: "2019-12-01"},
    {name: "MN", type: "Minnesota", value: 5708, date: "2020-01-01"},
    {name: "MN", type: "Minnesota", value: 3492, date: "2020-02-01"},
    {name: "MN", type: "Minnesota", value: 1893, date: "2020-03-01"},
    {name: "MN", type: "Minnesota", value: 1828, date: "2020-04-01"},
    {name: "MN", type: "Minnesota", value: 1885, date: "2020-05-01"},
    {name: "MN", type: "Minnesota", value: 2317, date: "2020-06-01"},
    {name: "MN", type: "Minnesota", value: 366, date: "2020-07-01"},
    {name: "MN", type: "Minnesota", value: 339, date: "2020-08-01"},
    {name: "MN", type: "Minnesota", value: 1627, date: "2020-09-01"},
    {name: "MN", type: "Minnesota", value: 4326, date: "2020-10-01"},
    {name: "MN", type: "Minnesota", value: 4551, date: "2020-11-01"},
    {name: "MN", type: "Minnesota", value: 9749, date: "2020-12-01"},
    {name: "MO", type: "Missouri", value: 7, date: "2016-03-01"},
    {name: "MO", type: "Missouri", value: 17, date: "2016-04-01"},
    {name: "MO", type: "Missouri", value: 21, date: "2016-05-01"},
    {name: "MO", type: "Missouri", value: 171, date: "2016-06-01"},
    {name: "MO", type: "Missouri", value: 411, date: "2016-07-01"},
    {name: "MO", type: "Missouri", value: 542, date: "2016-08-01"},
    {name: "MO", type: "Missouri", value: 482, date: "2016-09-01"},
    {name: "MO", type: "Missouri", value: 464, date: "2016-10-01"},
    {name: "MO", type: "Missouri", value: 540, date: "2016-11-01"},
    {name: "MO", type: "Missouri", value: 610, date: "2016-12-01"},
    {name: "MO", type: "Missouri", value: 541, date: "2017-01-01"},
    {name: "MO", type: "Missouri", value: 434, date: "2017-02-01"},
    {name: "MO", type: "Missouri", value: 536, date: "2017-03-01"},
    {name: "MO", type: "Missouri", value: 437, date: "2017-04-01"},
    {name: "MO", type: "Missouri", value: 395, date: "2017-05-01"},
    {name: "MO", type: "Missouri", value: 408, date: "2017-06-01"},
    {name: "MO", type: "Missouri", value: 372, date: "2017-07-01"},
    {name: "MO", type: "Missouri", value: 584, date: "2017-08-01"},
    {name: "MO", type: "Missouri", value: 473, date: "2017-09-01"},
    {name: "MO", type: "Missouri", value: 493, date: "2017-10-01"},
    {name: "MO", type: "Missouri", value: 497, date: "2017-11-01"},
    {name: "MO", type: "Missouri", value: 555, date: "2017-12-01"},
    {name: "MO", type: "Missouri", value: 531, date: "2018-01-01"},
    {name: "MO", type: "Missouri", value: 561, date: "2018-02-01"},
    {name: "MO", type: "Missouri", value: 569, date: "2018-03-01"},
    {name: "MO", type: "Missouri", value: 481, date: "2018-04-01"},
    {name: "MO", type: "Missouri", value: 500, date: "2018-05-01"},
    {name: "MO", type: "Missouri", value: 394, date: "2018-06-01"},
    {name: "MO", type: "Missouri", value: 374, date: "2018-07-01"},
    {name: "MO", type: "Missouri", value: 456, date: "2018-08-01"},
    {name: "MO", type: "Missouri", value: 419, date: "2018-09-01"},
    {name: "MO", type: "Missouri", value: 556, date: "2018-10-01"},
    {name: "MO", type: "Missouri", value: 644, date: "2018-11-01"},
    {name: "MO", type: "Missouri", value: 433, date: "2018-12-01"},
    {name: "MO", type: "Missouri", value: 514, date: "2019-01-01"},
    {name: "MO", type: "Missouri", value: 640, date: "2019-02-01"},
    {name: "MO", type: "Missouri", value: 460, date: "2019-03-01"},
    {name: "MO", type: "Missouri", value: 607, date: "2019-04-01"},
    {name: "MO", type: "Missouri", value: 531, date: "2019-05-01"},
    {name: "MO", type: "Missouri", value: 449, date: "2019-06-01"},
    {name: "MO", type: "Missouri", value: 391, date: "2019-07-01"},
    {name: "MO", type: "Missouri", value: 363, date: "2019-08-01"},
    {name: "MO", type: "Missouri", value: 320, date: "2019-09-01"},
    {name: "MO", type: "Missouri", value: 432, date: "2019-10-01"},
    {name: "MO", type: "Missouri", value: 330, date: "2019-11-01"},
    {name: "MO", type: "Missouri", value: 388, date: "2019-12-01"},
    {name: "MO", type: "Missouri", value: 323, date: "2020-01-01"},
    {name: "MO", type: "Missouri", value: 299, date: "2020-02-01"},
    {name: "MO", type: "Missouri", value: 457, date: "2020-03-01"},
    {name: "MO", type: "Missouri", value: 580, date: "2020-04-01"},
    {name: "MO", type: "Missouri", value: 746, date: "2020-05-01"},
    {name: "MO", type: "Missouri", value: 821, date: "2020-06-01"},
    {name: "MO", type: "Missouri", value: 259, date: "2020-07-01"},
    {name: "MO", type: "Missouri", value: 194, date: "2020-08-01"},
    {name: "MO", type: "Missouri", value: 556, date: "2020-09-01"},
    {name: "MO", type: "Missouri", value: 1205, date: "2020-10-01"},
    {name: "MO", type: "Missouri", value: 1475, date: "2020-11-01"},
    {name: "MO", type: "Missouri", value: 1426, date: "2020-12-01"},
    {name: "MS", type: "Mississippi", value: 26, date: "2016-06-01"},
    {name: "MS", type: "Mississippi", value: 55, date: "2016-07-01"},
    {name: "MS", type: "Mississippi", value: 88, date: "2016-08-01"},
    {name: "MS", type: "Mississippi", value: 60, date: "2016-09-01"},
    {name: "MS", type: "Mississippi", value: 55, date: "2016-10-01"},
    {name: "MS", type: "Mississippi", value: 59, date: "2016-11-01"},
    {name: "MS", type: "Mississippi", value: 59, date: "2016-12-01"},
    {name: "MS", type: "Mississippi", value: 78, date: "2017-01-01"},
    {name: "MS", type: "Mississippi", value: 65, date: "2017-02-01"},
    {name: "MS", type: "Mississippi", value: 91, date: "2017-03-01"},
    {name: "MS", type: "Mississippi", value: 78, date: "2017-04-01"},
    {name: "MS", type: "Mississippi", value: 17, date: "2017-05-01"},
    {name: "MS", type: "Mississippi", value: 4, date: "2017-07-01"},
    {name: "MS", type: "Mississippi", value: 82, date: "2017-08-01"},
    {name: "MS", type: "Mississippi", value: 75, date: "2017-09-01"},
    {name: "MS", type: "Mississippi", value: 42, date: "2017-10-01"},
    {name: "MS", type: "Mississippi", value: 63, date: "2017-11-01"},
    {name: "MS", type: "Mississippi", value: 78, date: "2017-12-01"},
    {name: "MS", type: "Mississippi", value: 107, date: "2018-01-01"},
    {name: "MS", type: "Mississippi", value: 149, date: "2018-02-01"},
    {name: "MS", type: "Mississippi", value: 108, date: "2018-03-01"},
    {name: "MS", type: "Mississippi", value: 117, date: "2018-04-01"},
    {name: "MS", type: "Mississippi", value: 139, date: "2018-05-01"},
    {name: "MS", type: "Mississippi", value: 88, date: "2018-06-01"},
    {name: "MS", type: "Mississippi", value: 87, date: "2018-07-01"},
    {name: "MS", type: "Mississippi", value: 96, date: "2018-08-01"},
    {name: "MS", type: "Mississippi", value: 153, date: "2018-09-01"},
    {name: "MS", type: "Mississippi", value: 130, date: "2018-10-01"},
    {name: "MS", type: "Mississippi", value: 156, date: "2018-11-01"},
    {name: "MS", type: "Mississippi", value: 145, date: "2018-12-01"},
    {name: "MS", type: "Mississippi", value: 135, date: "2019-01-01"},
    {name: "MS", type: "Mississippi", value: 134, date: "2019-02-01"},
    {name: "MS", type: "Mississippi", value: 98, date: "2019-03-01"},
    {name: "MS", type: "Mississippi", value: 105, date: "2019-04-01"},
    {name: "MS", type: "Mississippi", value: 95, date: "2019-05-01"},
    {name: "MS", type: "Mississippi", value: 84, date: "2019-06-01"},
    {name: "MS", type: "Mississippi", value: 89, date: "2019-07-01"},
    {name: "MS", type: "Mississippi", value: 93, date: "2019-08-01"},
    {name: "MS", type: "Mississippi", value: 72, date: "2019-09-01"},
    {name: "MS", type: "Mississippi", value: 120, date: "2019-10-01"},
    {name: "MS", type: "Mississippi", value: 106, date: "2019-11-01"},
    {name: "MS", type: "Mississippi", value: 107, date: "2019-12-01"},
    {name: "MS", type: "Mississippi", value: 119, date: "2020-01-01"},
    {name: "MS", type: "Mississippi", value: 89, date: "2020-02-01"},
    {name: "MS", type: "Mississippi", value: 58, date: "2020-03-01"},
    {name: "MS", type: "Mississippi", value: 41, date: "2020-04-01"},
    {name: "MS", type: "Mississippi", value: 57, date: "2020-05-01"},
    {name: "MS", type: "Mississippi", value: 52, date: "2020-06-01"},
    {name: "MS", type: "Mississippi", value: 50, date: "2020-07-01"},
    {name: "MS", type: "Mississippi", value: 56, date: "2020-08-01"},
    {name: "MS", type: "Mississippi", value: 139, date: "2020-09-01"},
    {name: "MS", type: "Mississippi", value: 265, date: "2020-10-01"},
    {name: "MS", type: "Mississippi", value: 329, date: "2020-11-01"},
    {name: "MS", type: "Mississippi", value: 376, date: "2020-12-01"},
    {name: "MT", type: "Montana", value: 2, date: "2016-06-01"},
    {name: "MT", type: "Montana", value: 17, date: "2016-07-01"},
    {name: "MT", type: "Montana", value: 7, date: "2016-08-01"},
    {name: "MT", type: "Montana", value: 4, date: "2016-09-01"},
    {name: "MT", type: "Montana", value: 6, date: "2016-10-01"},
    {name: "MT", type: "Montana", value: 10, date: "2016-11-01"},
    {name: "MT", type: "Montana", value: 16, date: "2016-12-01"},
    {name: "MT", type: "Montana", value: 28, date: "2017-01-01"},
    {name: "MT", type: "Montana", value: 18, date: "2017-02-01"},
    {name: "MT", type: "Montana", value: 8, date: "2017-03-01"},
    {name: "MT", type: "Montana", value: 3, date: "2017-04-01"},
    {name: "MT", type: "Montana", value: 7, date: "2017-05-01"},
    {name: "MT", type: "Montana", value: 3, date: "2017-06-01"},
    {name: "MT", type: "Montana", value: 15, date: "2017-07-01"},
    {name: "MT", type: "Montana", value: 4, date: "2017-08-01"},
    {name: "MT", type: "Montana", value: 6, date: "2017-09-01"},
    {name: "MT", type: "Montana", value: 9, date: "2017-10-01"},
    {name: "MT", type: "Montana", value: 15, date: "2017-11-01"},
    {name: "MT", type: "Montana", value: 17, date: "2017-12-01"},
    {name: "MT", type: "Montana", value: 25, date: "2018-01-01"},
    {name: "MT", type: "Montana", value: 39, date: "2018-02-01"},
    {name: "MT", type: "Montana", value: 4, date: "2018-03-01"},
    {name: "MT", type: "Montana", value: 13, date: "2018-04-01"},
    {name: "MT", type: "Montana", value: 5, date: "2018-05-01"},
    {name: "MT", type: "Montana", value: 4, date: "2018-06-01"},
    {name: "MT", type: "Montana", value: 1, date: "2018-07-01"},
    {name: "MT", type: "Montana", value: 3, date: "2018-08-01"},
    {name: "MT", type: "Montana", value: 4, date: "2018-09-01"},
    {name: "MT", type: "Montana", value: 12, date: "2018-10-01"},
    {name: "MT", type: "Montana", value: 6, date: "2018-11-01"},
    {name: "MT", type: "Montana", value: 14, date: "2018-12-01"},
    {name: "MT", type: "Montana", value: 27, date: "2019-01-01"},
    {name: "MT", type: "Montana", value: 43, date: "2019-02-01"},
    {name: "MT", type: "Montana", value: 17, date: "2019-03-01"},
    {name: "MT", type: "Montana", value: 11, date: "2019-04-01"},
    {name: "MT", type: "Montana", value: 5, date: "2019-05-01"},
    {name: "MT", type: "Montana", value: 6, date: "2019-06-01"},
    {name: "MT", type: "Montana", value: 9, date: "2019-07-01"},
    {name: "MT", type: "Montana", value: 5, date: "2019-08-01"},
    {name: "MT", type: "Montana", value: 7, date: "2019-09-01"},
    {name: "MT", type: "Montana", value: 15, date: "2019-10-01"},
    {name: "MT", type: "Montana", value: 9, date: "2019-11-01"},
    {name: "MT", type: "Montana", value: 2, date: "2019-12-01"},
    {name: "MT", type: "Montana", value: 5, date: "2020-01-01"},
    {name: "MT", type: "Montana", value: 2, date: "2020-02-01"},
    {name: "MT", type: "Montana", value: 3, date: "2020-06-01"},
    {name: "MT", type: "Montana", value: 126, date: "2020-09-01"},
    {name: "MT", type: "Montana", value: 766, date: "2020-10-01"},
    {name: "MT", type: "Montana", value: 918, date: "2020-11-01"},
    {name: "MT", type: "Montana", value: 1032, date: "2020-12-01"},
    {name: "NC", type: "North Carolina", value: 358, date: "2016-06-01"},
    {name: "NC", type: "North Carolina", value: 1041, date: "2016-07-01"},
    {name: "NC", type: "North Carolina", value: 1059, date: "2016-08-01"},
    {name: "NC", type: "North Carolina", value: 693, date: "2016-09-01"},
    {name: "NC", type: "North Carolina", value: 1098, date: "2016-10-01"},
    {name: "NC", type: "North Carolina", value: 928, date: "2016-11-01"},
    {name: "NC", type: "North Carolina", value: 970, date: "2016-12-01"},
    {name: "NC", type: "North Carolina", value: 949, date: "2017-01-01"},
    {name: "NC", type: "North Carolina", value: 1008, date: "2017-02-01"},
    {name: "NC", type: "North Carolina", value: 1406, date: "2017-03-01"},
    {name: "NC", type: "North Carolina", value: 904, date: "2017-04-01"},
    {name: "NC", type: "North Carolina", value: 808, date: "2017-05-01"},
    {name: "NC", type: "North Carolina", value: 858, date: "2017-06-01"},
    {name: "NC", type: "North Carolina", value: 1002, date: "2017-07-01"},
    {name: "NC", type: "North Carolina", value: 3412, date: "2017-08-01"},
    {name: "NC", type: "North Carolina", value: 3208, date: "2017-09-01"},
    {name: "NC", type: "North Carolina", value: 2667, date: "2017-10-01"},
    {name: "NC", type: "North Carolina", value: 3053, date: "2017-11-01"},
    {name: "NC", type: "North Carolina", value: 2626, date: "2017-12-01"},
    {name: "NC", type: "North Carolina", value: 2926, date: "2018-01-01"},
    {name: "NC", type: "North Carolina", value: 2843, date: "2018-02-01"},
    {name: "NC", type: "North Carolina", value: 2328, date: "2018-03-01"},
    {name: "NC", type: "North Carolina", value: 2766, date: "2018-04-01"},
    {name: "NC", type: "North Carolina", value: 3150, date: "2018-05-01"},
    {name: "NC", type: "North Carolina", value: 2289, date: "2018-06-01"},
    {name: "NC", type: "North Carolina", value: 2058, date: "2018-07-01"},
    {name: "NC", type: "North Carolina", value: 2439, date: "2018-08-01"},
    {name: "NC", type: "North Carolina", value: 2120, date: "2018-09-01"},
    {name: "NC", type: "North Carolina", value: 2819, date: "2018-10-01"},
    {name: "NC", type: "North Carolina", value: 2520, date: "2018-11-01"},
    {name: "NC", type: "North Carolina", value: 2305, date: "2018-12-01"},
    {name: "NC", type: "North Carolina", value: 2298, date: "2019-01-01"},
    {name: "NC", type: "North Carolina", value: 2109, date: "2019-02-01"},
    {name: "NC", type: "North Carolina", value: 2247, date: "2019-03-01"},
    {name: "NC", type: "North Carolina", value: 2615, date: "2019-04-01"},
    {name: "NC", type: "North Carolina", value: 2054, date: "2019-05-01"},
    {name: "NC", type: "North Carolina", value: 1538, date: "2019-06-01"},
    {name: "NC", type: "North Carolina", value: 1863, date: "2019-07-01"},
    {name: "NC", type: "North Carolina", value: 2258, date: "2019-08-01"},
    {name: "NC", type: "North Carolina", value: 1476, date: "2019-09-01"},
    {name: "NC", type: "North Carolina", value: 2472, date: "2019-10-01"},
    {name: "NC", type: "North Carolina", value: 1944, date: "2019-11-01"},
    {name: "NC", type: "North Carolina", value: 1608, date: "2019-12-01"},
    {name: "NC", type: "North Carolina", value: 1442, date: "2020-01-01"},
    {name: "NC", type: "North Carolina", value: 1572, date: "2020-02-01"},
    {name: "NC", type: "North Carolina", value: 3193, date: "2020-03-01"},
    {name: "NC", type: "North Carolina", value: 3979, date: "2020-04-01"},
    {name: "NC", type: "North Carolina", value: 3391, date: "2020-05-01"},
    {name: "NC", type: "North Carolina", value: 4283, date: "2020-06-01"},
    {name: "NC", type: "North Carolina", value: 812, date: "2020-07-01"},
    {name: "NC", type: "North Carolina", value: 958, date: "2020-08-01"},
    {name: "NC", type: "North Carolina", value: 2532, date: "2020-09-01"},
    {name: "NC", type: "North Carolina", value: 4153, date: "2020-10-01"},
    {name: "NC", type: "North Carolina", value: 6227, date: "2020-11-01"},
    {name: "NC", type: "North Carolina", value: 7162, date: "2020-12-01"},
    {name: "ND", type: "North Dakota", value: 2, date: "2016-09-01"},
    {name: "ND", type: "North Dakota", value: 1, date: "2016-12-01"},
    {name: "ND", type: "North Dakota", value: 1, date: "2017-12-01"},
    {name: "ND", type: "North Dakota", value: 1, date: "2018-02-01"},
    {name: "ND", type: "North Dakota", value: 13, date: "2018-05-01"},
    {name: "ND", type: "North Dakota", value: 2, date: "2018-07-01"},
    {name: "ND", type: "North Dakota", value: 1, date: "2018-08-01"},
    {name: "ND", type: "North Dakota", value: 1, date: "2018-11-01"},
    {name: "ND", type: "North Dakota", value: 7, date: "2019-02-01"},
    {name: "ND", type: "North Dakota", value: 3, date: "2019-03-01"},
    {name: "ND", type: "North Dakota", value: 2, date: "2019-05-01"},
    {name: "ND", type: "North Dakota", value: 2, date: "2019-07-01"},
    {name: "ND", type: "North Dakota", value: 1, date: "2019-10-01"},
    {name: "ND", type: "North Dakota", value: 1, date: "2020-05-01"},
    {name: "ND", type: "North Dakota", value: 4, date: "2020-09-01"},
    {name: "ND", type: "North Dakota", value: 55, date: "2020-10-01"},
    {name: "ND", type: "North Dakota", value: 169, date: "2020-11-01"},
    {name: "ND", type: "North Dakota", value: 197, date: "2020-12-01"},
    {name: "NE", type: "Nebraska", value: 86, date: "2016-03-01"},
    {name: "NE", type: "Nebraska", value: 311, date: "2016-04-01"},
    {name: "NE", type: "Nebraska", value: 288, date: "2016-05-01"},
    {name: "NE", type: "Nebraska", value: 372, date: "2016-06-01"},
    {name: "NE", type: "Nebraska", value: 281, date: "2016-07-01"},
    {name: "NE", type: "Nebraska", value: 377, date: "2016-08-01"},
    {name: "NE", type: "Nebraska", value: 371, date: "2016-09-01"},
    {name: "NE", type: "Nebraska", value: 362, date: "2016-10-01"},
    {name: "NE", type: "Nebraska", value: 330, date: "2016-11-01"},
    {name: "NE", type: "Nebraska", value: 303, date: "2016-12-01"},
    {name: "NE", type: "Nebraska", value: 292, date: "2017-01-01"},
    {name: "NE", type: "Nebraska", value: 269, date: "2017-02-01"},
    {name: "NE", type: "Nebraska", value: 280, date: "2017-03-01"},
    {name: "NE", type: "Nebraska", value: 283, date: "2017-04-01"},
    {name: "NE", type: "Nebraska", value: 237, date: "2017-05-01"},
    {name: "NE", type: "Nebraska", value: 291, date: "2017-06-01"},
    {name: "NE", type: "Nebraska", value: 206, date: "2017-07-01"},
    {name: "NE", type: "Nebraska", value: 283, date: "2017-08-01"},
    {name: "NE", type: "Nebraska", value: 250, date: "2017-09-01"},
    {name: "NE", type: "Nebraska", value: 299, date: "2017-10-01"},
    {name: "NE", type: "Nebraska", value: 288, date: "2017-11-01"},
    {name: "NE", type: "Nebraska", value: 295, date: "2017-12-01"},
    {name: "NE", type: "Nebraska", value: 345, date: "2018-01-01"},
    {name: "NE", type: "Nebraska", value: 287, date: "2018-02-01"},
    {name: "NE", type: "Nebraska", value: 228, date: "2018-03-01"},
    {name: "NE", type: "Nebraska", value: 255, date: "2018-04-01"},
    {name: "NE", type: "Nebraska", value: 227, date: "2018-05-01"},
    {name: "NE", type: "Nebraska", value: 163, date: "2018-06-01"},
    {name: "NE", type: "Nebraska", value: 176, date: "2018-07-01"},
    {name: "NE", type: "Nebraska", value: 251, date: "2018-08-01"},
    {name: "NE", type: "Nebraska", value: 275, date: "2018-09-01"},
    {name: "NE", type: "Nebraska", value: 325, date: "2018-10-01"},
    {name: "NE", type: "Nebraska", value: 256, date: "2018-11-01"},
    {name: "NE", type: "Nebraska", value: 246, date: "2018-12-01"},
    {name: "NE", type: "Nebraska", value: 253, date: "2019-01-01"},
    {name: "NE", type: "Nebraska", value: 288, date: "2019-02-01"},
    {name: "NE", type: "Nebraska", value: 222, date: "2019-03-01"},
    {name: "NE", type: "Nebraska", value: 191, date: "2019-04-01"},
    {name: "NE", type: "Nebraska", value: 227, date: "2019-05-01"},
    {name: "NE", type: "Nebraska", value: 206, date: "2019-06-01"},
    {name: "NE", type: "Nebraska", value: 208, date: "2019-07-01"},
    {name: "NE", type: "Nebraska", value: 144, date: "2019-08-01"},
    {name: "NE", type: "Nebraska", value: 126, date: "2019-09-01"},
    {name: "NE", type: "Nebraska", value: 257, date: "2019-10-01"},
    {name: "NE", type: "Nebraska", value: 209, date: "2019-11-01"},
    {name: "NE", type: "Nebraska", value: 237, date: "2019-12-01"},
    {name: "NE", type: "Nebraska", value: 216, date: "2020-01-01"},
    {name: "NE", type: "Nebraska", value: 171, date: "2020-02-01"},
    {name: "NE", type: "Nebraska", value: 132, date: "2020-03-01"},
    {name: "NE", type: "Nebraska", value: 160, date: "2020-04-01"},
    {name: "NE", type: "Nebraska", value: 181, date: "2020-05-01"},
    {name: "NE", type: "Nebraska", value: 194, date: "2020-06-01"},
    {name: "NE", type: "Nebraska", value: 65, date: "2020-07-01"},
    {name: "NE", type: "Nebraska", value: 67, date: "2020-08-01"},
    {name: "NE", type: "Nebraska", value: 99, date: "2020-09-01"},
    {name: "NE", type: "Nebraska", value: 141, date: "2020-10-01"},
    {name: "NE", type: "Nebraska", value: 83, date: "2020-11-01"},
    {name: "NE", type: "Nebraska", value: 213, date: "2020-12-01"},
    {name: "NH", type: "New Hampshire", value: 1, date: "2016-03-01"},
    {name: "NH", type: "New Hampshire", value: 21, date: "2016-04-01"},
    {name: "NH", type: "New Hampshire", value: 8, date: "2016-05-01"},
    {name: "NH", type: "New Hampshire", value: 18, date: "2016-06-01"},
    {name: "NH", type: "New Hampshire", value: 30, date: "2016-07-01"},
    {name: "NH", type: "New Hampshire", value: 34, date: "2016-08-01"},
    {name: "NH", type: "New Hampshire", value: 16, date: "2016-09-01"},
    {name: "NH", type: "New Hampshire", value: 26, date: "2016-10-01"},
    {name: "NH", type: "New Hampshire", value: 27, date: "2016-11-01"},
    {name: "NH", type: "New Hampshire", value: 100, date: "2016-12-01"},
    {name: "NH", type: "New Hampshire", value: 94, date: "2017-01-01"},
    {name: "NH", type: "New Hampshire", value: 159, date: "2017-02-01"},
    {name: "NH", type: "New Hampshire", value: 93, date: "2017-03-01"},
    {name: "NH", type: "New Hampshire", value: 82, date: "2017-04-01"},
    {name: "NH", type: "New Hampshire", value: 85, date: "2017-05-01"},
    {name: "NH", type: "New Hampshire", value: 99, date: "2017-06-01"},
    {name: "NH", type: "New Hampshire", value: 97, date: "2017-07-01"},
    {name: "NH", type: "New Hampshire", value: 213, date: "2017-08-01"},
    {name: "NH", type: "New Hampshire", value: 160, date: "2017-09-01"},
    {name: "NH", type: "New Hampshire", value: 158, date: "2017-10-01"},
    {name: "NH", type: "New Hampshire", value: 163, date: "2017-11-01"},
    {name: "NH", type: "New Hampshire", value: 204, date: "2017-12-01"},
    {name: "NH", type: "New Hampshire", value: 178, date: "2018-01-01"},
    {name: "NH", type: "New Hampshire", value: 195, date: "2018-02-01"},
    {name: "NH", type: "New Hampshire", value: 141, date: "2018-03-01"},
    {name: "NH", type: "New Hampshire", value: 98, date: "2018-04-01"},
    {name: "NH", type: "New Hampshire", value: 122, date: "2018-05-01"},
    {name: "NH", type: "New Hampshire", value: 162, date: "2018-06-01"},
    {name: "NH", type: "New Hampshire", value: 120, date: "2018-07-01"},
    {name: "NH", type: "New Hampshire", value: 131, date: "2018-08-01"},
    {name: "NH", type: "New Hampshire", value: 136, date: "2018-09-01"},
    {name: "NH", type: "New Hampshire", value: 146, date: "2018-10-01"},
    {name: "NH", type: "New Hampshire", value: 211, date: "2018-11-01"},
    {name: "NH", type: "New Hampshire", value: 135, date: "2018-12-01"},
    {name: "NH", type: "New Hampshire", value: 223, date: "2019-01-01"},
    {name: "NH", type: "New Hampshire", value: 181, date: "2019-02-01"},
    {name: "NH", type: "New Hampshire", value: 139, date: "2019-03-01"},
    {name: "NH", type: "New Hampshire", value: 133, date: "2019-04-01"},
    {name: "NH", type: "New Hampshire", value: 93, date: "2019-05-01"},
    {name: "NH", type: "New Hampshire", value: 120, date: "2019-06-01"},
    {name: "NH", type: "New Hampshire", value: 133, date: "2019-07-01"},
    {name: "NH", type: "New Hampshire", value: 100, date: "2019-08-01"},
    {name: "NH", type: "New Hampshire", value: 79, date: "2019-09-01"},
    {name: "NH", type: "New Hampshire", value: 123, date: "2019-10-01"},
    {name: "NH", type: "New Hampshire", value: 91, date: "2019-11-01"},
    {name: "NH", type: "New Hampshire", value: 201, date: "2019-12-01"},
    {name: "NH", type: "New Hampshire", value: 133, date: "2020-01-01"},
    {name: "NH", type: "New Hampshire", value: 142, date: "2020-02-01"},
    {name: "NH", type: "New Hampshire", value: 110, date: "2020-03-01"},
    {name: "NH", type: "New Hampshire", value: 82, date: "2020-04-01"},
    {name: "NH", type: "New Hampshire", value: 72, date: "2020-05-01"},
    {name: "NH", type: "New Hampshire", value: 124, date: "2020-06-01"},
    {name: "NH", type: "New Hampshire", value: 45, date: "2020-07-01"},
    {name: "NH", type: "New Hampshire", value: 52, date: "2020-08-01"},
    {name: "NH", type: "New Hampshire", value: 37, date: "2020-09-01"},
    {name: "NH", type: "New Hampshire", value: 71, date: "2020-10-01"},
    {name: "NH", type: "New Hampshire", value: 46, date: "2020-11-01"},
    {name: "NH", type: "New Hampshire", value: 57, date: "2020-12-01"},
    {name: "NJ", type: "New Jersey", value: 166, date: "2016-03-01"},
    {name: "NJ", type: "New Jersey", value: 521, date: "2016-04-01"},
    {name: "NJ", type: "New Jersey", value: 513, date: "2016-05-01"},
    {name: "NJ", type: "New Jersey", value: 554, date: "2016-06-01"},
    {name: "NJ", type: "New Jersey", value: 587, date: "2016-07-01"},
    {name: "NJ", type: "New Jersey", value: 665, date: "2016-08-01"},
    {name: "NJ", type: "New Jersey", value: 674, date: "2016-09-01"},
    {name: "NJ", type: "New Jersey", value: 745, date: "2016-10-01"},
    {name: "NJ", type: "New Jersey", value: 877, date: "2016-11-01"},
    {name: "NJ", type: "New Jersey", value: 776, date: "2016-12-01"},
    {name: "NJ", type: "New Jersey", value: 753, date: "2017-01-01"},
    {name: "NJ", type: "New Jersey", value: 795, date: "2017-02-01"},
    {name: "NJ", type: "New Jersey", value: 936, date: "2017-03-01"},
    {name: "NJ", type: "New Jersey", value: 681, date: "2017-04-01"},
    {name: "NJ", type: "New Jersey", value: 738, date: "2017-05-01"},
    {name: "NJ", type: "New Jersey", value: 782, date: "2017-06-01"},
    {name: "NJ", type: "New Jersey", value: 656, date: "2017-07-01"},
    {name: "NJ", type: "New Jersey", value: 836, date: "2017-08-01"},
    {name: "NJ", type: "New Jersey", value: 745, date: "2017-09-01"},
    {name: "NJ", type: "New Jersey", value: 936, date: "2017-10-01"},
    {name: "NJ", type: "New Jersey", value: 845, date: "2017-11-01"},
    {name: "NJ", type: "New Jersey", value: 727, date: "2017-12-01"},
    {name: "NJ", type: "New Jersey", value: 866, date: "2018-01-01"},
    {name: "NJ", type: "New Jersey", value: 773, date: "2018-02-01"},
    {name: "NJ", type: "New Jersey", value: 950, date: "2018-03-01"},
    {name: "NJ", type: "New Jersey", value: 823, date: "2018-04-01"},
    {name: "NJ", type: "New Jersey", value: 754, date: "2018-05-01"},
    {name: "NJ", type: "New Jersey", value: 858, date: "2018-06-01"},
    {name: "NJ", type: "New Jersey", value: 704, date: "2018-07-01"},
    {name: "NJ", type: "New Jersey", value: 497, date: "2018-08-01"},
    {name: "NJ", type: "New Jersey", value: 843, date: "2018-09-01"},
    {name: "NJ", type: "New Jersey", value: 887, date: "2018-10-01"},
    {name: "NJ", type: "New Jersey", value: 981, date: "2018-11-01"},
    {name: "NJ", type: "New Jersey", value: 784, date: "2018-12-01"},
    {name: "NJ", type: "New Jersey", value: 711, date: "2019-01-01"},
    {name: "NJ", type: "New Jersey", value: 806, date: "2019-02-01"},
    {name: "NJ", type: "New Jersey", value: 773, date: "2019-03-01"},
    {name: "NJ", type: "New Jersey", value: 682, date: "2019-04-01"},
    {name: "NJ", type: "New Jersey", value: 854, date: "2019-05-01"},
    {name: "NJ", type: "New Jersey", value: 812, date: "2019-06-01"},
    {name: "NJ", type: "New Jersey", value: 771, date: "2019-07-01"},
    {name: "NJ", type: "New Jersey", value: 707, date: "2019-08-01"},
    {name: "NJ", type: "New Jersey", value: 621, date: "2019-09-01"},
    {name: "NJ", type: "New Jersey", value: 691, date: "2019-10-01"},
    {name: "NJ", type: "New Jersey", value: 420, date: "2019-11-01"},
    {name: "NJ", type: "New Jersey", value: 587, date: "2019-12-01"},
    {name: "NJ", type: "New Jersey", value: 831, date: "2020-01-01"},
    {name: "NJ", type: "New Jersey", value: 2305, date: "2020-02-01"},
    {name: "NJ", type: "New Jersey", value: 973, date: "2020-03-01"},
    {name: "NJ", type: "New Jersey", value: 1232, date: "2020-04-01"},
    {name: "NJ", type: "New Jersey", value: 1125, date: "2020-05-01"},
    {name: "NJ", type: "New Jersey", value: 1402, date: "2020-06-01"},
    {name: "NJ", type: "New Jersey", value: 177, date: "2020-07-01"},
    {name: "NJ", type: "New Jersey", value: 236, date: "2020-08-01"},
    {name: "NJ", type: "New Jersey", value: 1360, date: "2020-09-01"},
    {name: "NJ", type: "New Jersey", value: 2231, date: "2020-10-01"},
    {name: "NJ", type: "New Jersey", value: 2370, date: "2020-11-01"},
    {name: "NJ", type: "New Jersey", value: 2309, date: "2020-12-01"},
    {name: "NM", type: "New Mexico", value: 6, date: "2016-06-01"},
    {name: "NM", type: "New Mexico", value: 24, date: "2016-07-01"},
    {name: "NM", type: "New Mexico", value: 20, date: "2016-08-01"},
    {name: "NM", type: "New Mexico", value: 20, date: "2016-09-01"},
    {name: "NM", type: "New Mexico", value: 22, date: "2016-10-01"},
    {name: "NM", type: "New Mexico", value: 34, date: "2016-11-01"},
    {name: "NM", type: "New Mexico", value: 27, date: "2016-12-01"},
    {name: "NM", type: "New Mexico", value: 16, date: "2017-01-01"},
    {name: "NM", type: "New Mexico", value: 16, date: "2017-02-01"},
    {name: "NM", type: "New Mexico", value: 20, date: "2017-03-01"},
    {name: "NM", type: "New Mexico", value: 29, date: "2017-04-01"},
    {name: "NM", type: "New Mexico", value: 40, date: "2017-05-01"},
    {name: "NM", type: "New Mexico", value: 50, date: "2017-06-01"},
    {name: "NM", type: "New Mexico", value: 42, date: "2017-07-01"},
    {name: "NM", type: "New Mexico", value: 111, date: "2017-08-01"},
    {name: "NM", type: "New Mexico", value: 97, date: "2017-09-01"},
    {name: "NM", type: "New Mexico", value: 107, date: "2017-10-01"},
    {name: "NM", type: "New Mexico", value: 85, date: "2017-11-01"},
    {name: "NM", type: "New Mexico", value: 111, date: "2017-12-01"},
    {name: "NM", type: "New Mexico", value: 90, date: "2018-01-01"},
    {name: "NM", type: "New Mexico", value: 115, date: "2018-02-01"},
    {name: "NM", type: "New Mexico", value: 105, date: "2018-03-01"},
    {name: "NM", type: "New Mexico", value: 75, date: "2018-04-01"},
    {name: "NM", type: "New Mexico", value: 115, date: "2018-05-01"},
    {name: "NM", type: "New Mexico", value: 95, date: "2018-06-01"},
    {name: "NM", type: "New Mexico", value: 60, date: "2018-07-01"},
    {name: "NM", type: "New Mexico", value: 105, date: "2018-08-01"},
    {name: "NM", type: "New Mexico", value: 101, date: "2018-09-01"},
    {name: "NM", type: "New Mexico", value: 103, date: "2018-10-01"},
    {name: "NM", type: "New Mexico", value: 113, date: "2018-11-01"},
    {name: "NM", type: "New Mexico", value: 91, date: "2018-12-01"},
    {name: "NM", type: "New Mexico", value: 103, date: "2019-01-01"},
    {name: "NM", type: "New Mexico", value: 95, date: "2019-02-01"},
    {name: "NM", type: "New Mexico", value: 85, date: "2019-03-01"},
    {name: "NM", type: "New Mexico", value: 86, date: "2019-04-01"},
    {name: "NM", type: "New Mexico", value: 65, date: "2019-05-01"},
    {name: "NM", type: "New Mexico", value: 99, date: "2019-06-01"},
    {name: "NM", type: "New Mexico", value: 62, date: "2019-07-01"},
    {name: "NM", type: "New Mexico", value: 61, date: "2019-08-01"},
    {name: "NM", type: "New Mexico", value: 52, date: "2019-09-01"},
    {name: "NM", type: "New Mexico", value: 68, date: "2019-10-01"},
    {name: "NM", type: "New Mexico", value: 78, date: "2019-11-01"},
    {name: "NM", type: "New Mexico", value: 72, date: "2019-12-01"},
    {name: "NM", type: "New Mexico", value: 52, date: "2020-01-01"},
    {name: "NM", type: "New Mexico", value: 61, date: "2020-02-01"},
    {name: "NM", type: "New Mexico", value: 38, date: "2020-03-01"},
    {name: "NM", type: "New Mexico", value: 30, date: "2020-04-01"},
    {name: "NM", type: "New Mexico", value: 40, date: "2020-05-01"},
    {name: "NM", type: "New Mexico", value: 106, date: "2020-06-01"},
    {name: "NM", type: "New Mexico", value: 39, date: "2020-07-01"},
    {name: "NM", type: "New Mexico", value: 44, date: "2020-08-01"},
    {name: "NM", type: "New Mexico", value: 53, date: "2020-09-01"},
    {name: "NM", type: "New Mexico", value: 217, date: "2020-10-01"},
    {name: "NM", type: "New Mexico", value: 131, date: "2020-11-01"},
    {name: "NM", type: "New Mexico", value: 191, date: "2020-12-01"},
    {name: "NV", type: "Nevada", value: 3, date: "2016-04-01"},
    {name: "NV", type: "Nevada", value: 65, date: "2016-06-01"},
    {name: "NV", type: "Nevada", value: 237, date: "2016-07-01"},
    {name: "NV", type: "Nevada", value: 285, date: "2016-08-01"},
    {name: "NV", type: "Nevada", value: 165, date: "2016-09-01"},
    {name: "NV", type: "Nevada", value: 192, date: "2016-10-01"},
    {name: "NV", type: "Nevada", value: 250, date: "2016-11-01"},
    {name: "NV", type: "Nevada", value: 160, date: "2016-12-01"},
    {name: "NV", type: "Nevada", value: 193, date: "2017-01-01"},
    {name: "NV", type: "Nevada", value: 143, date: "2017-02-01"},
    {name: "NV", type: "Nevada", value: 113, date: "2017-03-01"},
    {name: "NV", type: "Nevada", value: 86, date: "2017-04-01"},
    {name: "NV", type: "Nevada", value: 171, date: "2017-05-01"},
    {name: "NV", type: "Nevada", value: 193, date: "2017-06-01"},
    {name: "NV", type: "Nevada", value: 147, date: "2017-07-01"},
    {name: "NV", type: "Nevada", value: 155, date: "2017-08-01"},
    {name: "NV", type: "Nevada", value: 144, date: "2017-09-01"},
    {name: "NV", type: "Nevada", value: 152, date: "2017-10-01"},
    {name: "NV", type: "Nevada", value: 192, date: "2017-11-01"},
    {name: "NV", type: "Nevada", value: 139, date: "2017-12-01"},
    {name: "NV", type: "Nevada", value: 84, date: "2018-01-01"},
    {name: "NV", type: "Nevada", value: 139, date: "2018-02-01"},
    {name: "NV", type: "Nevada", value: 98, date: "2018-03-01"},
    {name: "NV", type: "Nevada", value: 109, date: "2018-04-01"},
    {name: "NV", type: "Nevada", value: 118, date: "2018-05-01"},
    {name: "NV", type: "Nevada", value: 112, date: "2018-06-01"},
    {name: "NV", type: "Nevada", value: 121, date: "2018-07-01"},
    {name: "NV", type: "Nevada", value: 138, date: "2018-08-01"},
    {name: "NV", type: "Nevada", value: 116, date: "2018-09-01"},
    {name: "NV", type: "Nevada", value: 121, date: "2018-10-01"},
    {name: "NV", type: "Nevada", value: 151, date: "2018-11-01"},
    {name: "NV", type: "Nevada", value: 149, date: "2018-12-01"},
    {name: "NV", type: "Nevada", value: 163, date: "2019-01-01"},
    {name: "NV", type: "Nevada", value: 189, date: "2019-02-01"},
    {name: "NV", type: "Nevada", value: 122, date: "2019-03-01"},
    {name: "NV", type: "Nevada", value: 98, date: "2019-04-01"},
    {name: "NV", type: "Nevada", value: 136, date: "2019-05-01"},
    {name: "NV", type: "Nevada", value: 133, date: "2019-06-01"},
    {name: "NV", type: "Nevada", value: 148, date: "2019-07-01"},
    {name: "NV", type: "Nevada", value: 151, date: "2019-08-01"},
    {name: "NV", type: "Nevada", value: 131, date: "2019-09-01"},
    {name: "NV", type: "Nevada", value: 135, date: "2019-10-01"},
    {name: "NV", type: "Nevada", value: 106, date: "2019-11-01"},
    {name: "NV", type: "Nevada", value: 141, date: "2019-12-01"},
    {name: "NV", type: "Nevada", value: 86, date: "2020-01-01"},
    {name: "NV", type: "Nevada", value: 83, date: "2020-02-01"},
    {name: "NV", type: "Nevada", value: 127, date: "2020-03-01"},
    {name: "NV", type: "Nevada", value: 55, date: "2020-04-01"},
    {name: "NV", type: "Nevada", value: 119, date: "2020-05-01"},
    {name: "NV", type: "Nevada", value: 125, date: "2020-06-01"},
    {name: "NV", type: "Nevada", value: 78, date: "2020-07-01"},
    {name: "NV", type: "Nevada", value: 90, date: "2020-08-01"},
    {name: "NV", type: "Nevada", value: 166, date: "2020-09-01"},
    {name: "NV", type: "Nevada", value: 204, date: "2020-10-01"},
    {name: "NV", type: "Nevada", value: 166, date: "2020-11-01"},
    {name: "NV", type: "Nevada", value: 219, date: "2020-12-01"},
    {name: "NY", type: "New York", value: 271, date: "2016-03-01"},
    {name: "NY", type: "New York", value: 737, date: "2016-04-01"},
    {name: "NY", type: "New York", value: 801, date: "2016-05-01"},
    {name: "NY", type: "New York", value: 1154, date: "2016-06-01"},
    {name: "NY", type: "New York", value: 1588, date: "2016-07-01"},
    {name: "NY", type: "New York", value: 1872, date: "2016-08-01"},
    {name: "NY", type: "New York", value: 1682, date: "2016-09-01"},
    {name: "NY", type: "New York", value: 1701, date: "2016-10-01"},
    {name: "NY", type: "New York", value: 2022, date: "2016-11-01"},
    {name: "NY", type: "New York", value: 1914, date: "2016-12-01"},
    {name: "NY", type: "New York", value: 1818, date: "2017-01-01"},
    {name: "NY", type: "New York", value: 1807, date: "2017-02-01"},
    {name: "NY", type: "New York", value: 1994, date: "2017-03-01"},
    {name: "NY", type: "New York", value: 1440, date: "2017-04-01"},
    {name: "NY", type: "New York", value: 1411, date: "2017-05-01"},
    {name: "NY", type: "New York", value: 1739, date: "2017-06-01"},
    {name: "NY", type: "New York", value: 1502, date: "2017-07-01"},
    {name: "NY", type: "New York", value: 2401, date: "2017-08-01"},
    {name: "NY", type: "New York", value: 2193, date: "2017-09-01"},
    {name: "NY", type: "New York", value: 2107, date: "2017-10-01"},
    {name: "NY", type: "New York", value: 2028, date: "2017-11-01"},
    {name: "NY", type: "New York", value: 2234, date: "2017-12-01"},
    {name: "NY", type: "New York", value: 2107, date: "2018-01-01"},
    {name: "NY", type: "New York", value: 1572, date: "2018-02-01"},
    {name: "NY", type: "New York", value: 1822, date: "2018-03-01"},
    {name: "NY", type: "New York", value: 1745, date: "2018-04-01"},
    {name: "NY", type: "New York", value: 1688, date: "2018-05-01"},
    {name: "NY", type: "New York", value: 1939, date: "2018-06-01"},
    {name: "NY", type: "New York", value: 1692, date: "2018-07-01"},
    {name: "NY", type: "New York", value: 1425, date: "2018-08-01"},
    {name: "NY", type: "New York", value: 1929, date: "2018-09-01"},
    {name: "NY", type: "New York", value: 2338, date: "2018-10-01"},
    {name: "NY", type: "New York", value: 2466, date: "2018-11-01"},
    {name: "NY", type: "New York", value: 1820, date: "2018-12-01"},
    {name: "NY", type: "New York", value: 2077, date: "2019-01-01"},
    {name: "NY", type: "New York", value: 2339, date: "2019-02-01"},
    {name: "NY", type: "New York", value: 2019, date: "2019-03-01"},
    {name: "NY", type: "New York", value: 2316, date: "2019-04-01"},
    {name: "NY", type: "New York", value: 2534, date: "2019-05-01"},
    {name: "NY", type: "New York", value: 2298, date: "2019-06-01"},
    {name: "NY", type: "New York", value: 2188, date: "2019-07-01"},
    {name: "NY", type: "New York", value: 1941, date: "2019-08-01"},
    {name: "NY", type: "New York", value: 1810, date: "2019-09-01"},
    {name: "NY", type: "New York", value: 2045, date: "2019-10-01"},
    {name: "NY", type: "New York", value: 1741, date: "2019-11-01"},
    {name: "NY", type: "New York", value: 1743, date: "2019-12-01"},
    {name: "NY", type: "New York", value: 1741, date: "2020-01-01"},
    {name: "NY", type: "New York", value: 1956, date: "2020-02-01"},
    {name: "NY", type: "New York", value: 2270, date: "2020-03-01"},
    {name: "NY", type: "New York", value: 4074, date: "2020-04-01"},
    {name: "NY", type: "New York", value: 3975, date: "2020-05-01"},
    {name: "NY", type: "New York", value: 4240, date: "2020-06-01"},
    {name: "NY", type: "New York", value: 626, date: "2020-07-01"},
    {name: "NY", type: "New York", value: 828, date: "2020-08-01"},
    {name: "NY", type: "New York", value: 3391, date: "2020-09-01"},
    {name: "NY", type: "New York", value: 5353, date: "2020-10-01"},
    {name: "NY", type: "New York", value: 6527, date: "2020-11-01"},
    {name: "NY", type: "New York", value: 7185, date: "2020-12-01"},
    {name: "OH", type: "Ohio", value: 552, date: "2016-02-01"},
    {name: "OH", type: "Ohio", value: 689, date: "2016-03-01"},
    {name: "OH", type: "Ohio", value: 763, date: "2016-04-01"},
    {name: "OH", type: "Ohio", value: 570, date: "2016-05-01"},
    {name: "OH", type: "Ohio", value: 599, date: "2016-06-01"},
    {name: "OH", type: "Ohio", value: 604, date: "2016-07-01"},
    {name: "OH", type: "Ohio", value: 780, date: "2016-08-01"},
    {name: "OH", type: "Ohio", value: 723, date: "2016-09-01"},
    {name: "OH", type: "Ohio", value: 614, date: "2016-10-01"},
    {name: "OH", type: "Ohio", value: 818, date: "2016-11-01"},
    {name: "OH", type: "Ohio", value: 909, date: "2016-12-01"},
    {name: "OH", type: "Ohio", value: 955, date: "2017-01-01"},
    {name: "OH", type: "Ohio", value: 813, date: "2017-02-01"},
    {name: "OH", type: "Ohio", value: 795, date: "2017-03-01"},
    {name: "OH", type: "Ohio", value: 565, date: "2017-04-01"},
    {name: "OH", type: "Ohio", value: 602, date: "2017-05-01"},
    {name: "OH", type: "Ohio", value: 646, date: "2017-06-01"},
    {name: "OH", type: "Ohio", value: 496, date: "2017-07-01"},
    {name: "OH", type: "Ohio", value: 852, date: "2017-08-01"},
    {name: "OH", type: "Ohio", value: 938, date: "2017-09-01"},
    {name: "OH", type: "Ohio", value: 1005, date: "2017-10-01"},
    {name: "OH", type: "Ohio", value: 707, date: "2017-11-01"},
    {name: "OH", type: "Ohio", value: 875, date: "2017-12-01"},
    {name: "OH", type: "Ohio", value: 959, date: "2018-01-01"},
    {name: "OH", type: "Ohio", value: 827, date: "2018-02-01"},
    {name: "OH", type: "Ohio", value: 764, date: "2018-03-01"},
    {name: "OH", type: "Ohio", value: 686, date: "2018-04-01"},
    {name: "OH", type: "Ohio", value: 780, date: "2018-05-01"},
    {name: "OH", type: "Ohio", value: 926, date: "2018-06-01"},
    {name: "OH", type: "Ohio", value: 784, date: "2018-07-01"},
    {name: "OH", type: "Ohio", value: 588, date: "2018-08-01"},
    {name: "OH", type: "Ohio", value: 1080, date: "2018-09-01"},
    {name: "OH", type: "Ohio", value: 1636, date: "2018-10-01"},
    {name: "OH", type: "Ohio", value: 1382, date: "2018-11-01"},
    {name: "OH", type: "Ohio", value: 1110, date: "2018-12-01"},
    {name: "OH", type: "Ohio", value: 955, date: "2019-01-01"},
    {name: "OH", type: "Ohio", value: 542, date: "2019-02-01"},
    {name: "OH", type: "Ohio", value: 508, date: "2019-03-01"},
    {name: "OH", type: "Ohio", value: 583, date: "2019-04-01"},
    {name: "OH", type: "Ohio", value: 547, date: "2019-05-01"},
    {name: "OH", type: "Ohio", value: 387, date: "2019-06-01"},
    {name: "OH", type: "Ohio", value: 477, date: "2019-07-01"},
    {name: "OH", type: "Ohio", value: 560, date: "2019-08-01"},
    {name: "OH", type: "Ohio", value: 517, date: "2019-09-01"},
    {name: "OH", type: "Ohio", value: 705, date: "2019-10-01"},
    {name: "OH", type: "Ohio", value: 694, date: "2019-11-01"},
    {name: "OH", type: "Ohio", value: 636, date: "2019-12-01"},
    {name: "OH", type: "Ohio", value: 547, date: "2020-01-01"},
    {name: "OH", type: "Ohio", value: 519, date: "2020-02-01"},
    {name: "OH", type: "Ohio", value: 1084, date: "2020-03-01"},
    {name: "OH", type: "Ohio", value: 1911, date: "2020-04-01"},
    {name: "OH", type: "Ohio", value: 1827, date: "2020-05-01"},
    {name: "OH", type: "Ohio", value: 2180, date: "2020-06-01"},
    {name: "OH", type: "Ohio", value: 350, date: "2020-07-01"},
    {name: "OH", type: "Ohio", value: 347, date: "2020-08-01"},
    {name: "OH", type: "Ohio", value: 552, date: "2020-09-01"},
    {name: "OH", type: "Ohio", value: 847, date: "2020-10-01"},
    {name: "OH", type: "Ohio", value: 936, date: "2020-11-01"},
    {name: "OH", type: "Ohio", value: 1233, date: "2020-12-01"},
    {name: "OK", type: "Oklahoma", value: 14, date: "2016-06-01"},
    {name: "OK", type: "Oklahoma", value: 41, date: "2016-07-01"},
    {name: "OK", type: "Oklahoma", value: 103, date: "2016-08-01"},
    {name: "OK", type: "Oklahoma", value: 105, date: "2016-09-01"},
    {name: "OK", type: "Oklahoma", value: 90, date: "2016-10-01"},
    {name: "OK", type: "Oklahoma", value: 94, date: "2016-11-01"},
    {name: "OK", type: "Oklahoma", value: 123, date: "2016-12-01"},
    {name: "OK", type: "Oklahoma", value: 71, date: "2017-01-01"},
    {name: "OK", type: "Oklahoma", value: 87, date: "2017-02-01"},
    {name: "OK", type: "Oklahoma", value: 68, date: "2017-03-01"},
    {name: "OK", type: "Oklahoma", value: 98, date: "2017-04-01"},
    {name: "OK", type: "Oklahoma", value: 84, date: "2017-05-01"},
    {name: "OK", type: "Oklahoma", value: 79, date: "2017-06-01"},
    {name: "OK", type: "Oklahoma", value: 154, date: "2017-07-01"},
    {name: "OK", type: "Oklahoma", value: 881, date: "2017-08-01"},
    {name: "OK", type: "Oklahoma", value: 995, date: "2017-09-01"},
    {name: "OK", type: "Oklahoma", value: 908, date: "2017-10-01"},
    {name: "OK", type: "Oklahoma", value: 864, date: "2017-11-01"},
    {name: "OK", type: "Oklahoma", value: 1034, date: "2017-12-01"},
    {name: "OK", type: "Oklahoma", value: 919, date: "2018-01-01"},
    {name: "OK", type: "Oklahoma", value: 850, date: "2018-02-01"},
    {name: "OK", type: "Oklahoma", value: 839, date: "2018-03-01"},
    {name: "OK", type: "Oklahoma", value: 856, date: "2018-04-01"},
    {name: "OK", type: "Oklahoma", value: 1022, date: "2018-05-01"},
    {name: "OK", type: "Oklahoma", value: 735, date: "2018-06-01"},
    {name: "OK", type: "Oklahoma", value: 855, date: "2018-07-01"},
    {name: "OK", type: "Oklahoma", value: 947, date: "2018-08-01"},
    {name: "OK", type: "Oklahoma", value: 726, date: "2018-09-01"},
    {name: "OK", type: "Oklahoma", value: 890, date: "2018-10-01"},
    {name: "OK", type: "Oklahoma", value: 946, date: "2018-11-01"},
    {name: "OK", type: "Oklahoma", value: 795, date: "2018-12-01"},
    {name: "OK", type: "Oklahoma", value: 996, date: "2019-01-01"},
    {name: "OK", type: "Oklahoma", value: 811, date: "2019-02-01"},
    {name: "OK", type: "Oklahoma", value: 881, date: "2019-03-01"},
    {name: "OK", type: "Oklahoma", value: 1132, date: "2019-04-01"},
    {name: "OK", type: "Oklahoma", value: 1028, date: "2019-05-01"},
    {name: "OK", type: "Oklahoma", value: 855, date: "2019-06-01"},
    {name: "OK", type: "Oklahoma", value: 871, date: "2019-07-01"},
    {name: "OK", type: "Oklahoma", value: 969, date: "2019-08-01"},
    {name: "OK", type: "Oklahoma", value: 693, date: "2019-09-01"},
    {name: "OK", type: "Oklahoma", value: 709, date: "2019-10-01"},
    {name: "OK", type: "Oklahoma", value: 680, date: "2019-11-01"},
    {name: "OK", type: "Oklahoma", value: 576, date: "2019-12-01"},
    {name: "OK", type: "Oklahoma", value: 522, date: "2020-01-01"},
    {name: "OK", type: "Oklahoma", value: 503, date: "2020-02-01"},
    {name: "OK", type: "Oklahoma", value: 819, date: "2020-03-01"},
    {name: "OK", type: "Oklahoma", value: 1157, date: "2020-04-01"},
    {name: "OK", type: "Oklahoma", value: 1585, date: "2020-05-01"},
    {name: "OK", type: "Oklahoma", value: 1595, date: "2020-06-01"},
    {name: "OK", type: "Oklahoma", value: 419, date: "2020-07-01"},
    {name: "OK", type: "Oklahoma", value: 443, date: "2020-08-01"},
    {name: "OK", type: "Oklahoma", value: 471, date: "2020-09-01"},
    {name: "OK", type: "Oklahoma", value: 338, date: "2020-10-01"},
    {name: "OK", type: "Oklahoma", value: 408, date: "2020-11-01"},
    {name: "OK", type: "Oklahoma", value: 371, date: "2020-12-01"},
    {name: "OR", type: "Oregon", value: 43, date: "2016-06-01"},
    {name: "OR", type: "Oregon", value: 109, date: "2016-07-01"},
    {name: "OR", type: "Oregon", value: 123, date: "2016-08-01"},
    {name: "OR", type: "Oregon", value: 147, date: "2016-09-01"},
    {name: "OR", type: "Oregon", value: 191, date: "2016-10-01"},
    {name: "OR", type: "Oregon", value: 194, date: "2016-11-01"},
    {name: "OR", type: "Oregon", value: 198, date: "2016-12-01"},
    {name: "OR", type: "Oregon", value: 120, date: "2017-01-01"},
    {name: "OR", type: "Oregon", value: 128, date: "2017-02-01"},
    {name: "OR", type: "Oregon", value: 145, date: "2017-03-01"},
    {name: "OR", type: "Oregon", value: 123, date: "2017-04-01"},
    {name: "OR", type: "Oregon", value: 146, date: "2017-05-01"},
    {name: "OR", type: "Oregon", value: 108, date: "2017-06-01"},
    {name: "OR", type: "Oregon", value: 204, date: "2017-07-01"},
    {name: "OR", type: "Oregon", value: 471, date: "2017-08-01"},
    {name: "OR", type: "Oregon", value: 452, date: "2017-09-01"},
    {name: "OR", type: "Oregon", value: 755, date: "2017-10-01"},
    {name: "OR", type: "Oregon", value: 647, date: "2017-11-01"},
    {name: "OR", type: "Oregon", value: 524, date: "2017-12-01"},
    {name: "OR", type: "Oregon", value: 435, date: "2018-01-01"},
    {name: "OR", type: "Oregon", value: 461, date: "2018-02-01"},
    {name: "OR", type: "Oregon", value: 481, date: "2018-03-01"},
    {name: "OR", type: "Oregon", value: 353, date: "2018-04-01"},
    {name: "OR", type: "Oregon", value: 367, date: "2018-05-01"},
    {name: "OR", type: "Oregon", value: 420, date: "2018-06-01"},
    {name: "OR", type: "Oregon", value: 342, date: "2018-07-01"},
    {name: "OR", type: "Oregon", value: 3004, date: "2018-08-01"},
    {name: "OR", type: "Oregon", value: 3147, date: "2018-09-01"},
    {name: "OR", type: "Oregon", value: 2612, date: "2018-10-01"},
    {name: "OR", type: "Oregon", value: 3598, date: "2018-11-01"},
    {name: "OR", type: "Oregon", value: 4005, date: "2018-12-01"},
    {name: "OR", type: "Oregon", value: 3465, date: "2019-01-01"},
    {name: "OR", type: "Oregon", value: 5742, date: "2019-02-01"},
    {name: "OR", type: "Oregon", value: 3117, date: "2019-03-01"},
    {name: "OR", type: "Oregon", value: 2379, date: "2019-04-01"},
    {name: "OR", type: "Oregon", value: 1873, date: "2019-05-01"},
    {name: "OR", type: "Oregon", value: 2083, date: "2019-06-01"},
    {name: "OR", type: "Oregon", value: 3192, date: "2019-07-01"},
    {name: "OR", type: "Oregon", value: 3621, date: "2019-08-01"},
    {name: "OR", type: "Oregon", value: 3273, date: "2019-09-01"},
    {name: "OR", type: "Oregon", value: 3295, date: "2019-10-01"},
    {name: "OR", type: "Oregon", value: 2889, date: "2019-11-01"},
    {name: "OR", type: "Oregon", value: 3371, date: "2019-12-01"},
    {name: "OR", type: "Oregon", value: 4053, date: "2020-01-01"},
    {name: "OR", type: "Oregon", value: 2896, date: "2020-02-01"},
    {name: "OR", type: "Oregon", value: 2702, date: "2020-03-01"},
    {name: "OR", type: "Oregon", value: 2368, date: "2020-04-01"},
    {name: "OR", type: "Oregon", value: 3164, date: "2020-05-01"},
    {name: "OR", type: "Oregon", value: 3320, date: "2020-06-01"},
    {name: "OR", type: "Oregon", value: 128, date: "2020-07-01"},
    {name: "OR", type: "Oregon", value: 158, date: "2020-08-01"},
    {name: "OR", type: "Oregon", value: 2146, date: "2020-09-01"},
    {name: "OR", type: "Oregon", value: 2891, date: "2020-10-01"},
    {name: "OR", type: "Oregon", value: 5562, date: "2020-11-01"},
    {name: "OR", type: "Oregon", value: 6611, date: "2020-12-01"},
    {name: "PA", type: "Pennsylvania", value: 42, date: "2016-02-01"},
    {name: "PA", type: "Pennsylvania", value: 103, date: "2016-03-01"},
    {name: "PA", type: "Pennsylvania", value: 282, date: "2016-04-01"},
    {name: "PA", type: "Pennsylvania", value: 195, date: "2016-05-01"},
    {name: "PA", type: "Pennsylvania", value: 698, date: "2016-06-01"},
    {name: "PA", type: "Pennsylvania", value: 1441, date: "2016-07-01"},
    {name: "PA", type: "Pennsylvania", value: 1808, date: "2016-08-01"},
    {name: "PA", type: "Pennsylvania", value: 1782, date: "2016-09-01"},
    {name: "PA", type: "Pennsylvania", value: 1892, date: "2016-10-01"},
    {name: "PA", type: "Pennsylvania", value: 2316, date: "2016-11-01"},
    {name: "PA", type: "Pennsylvania", value: 1924, date: "2016-12-01"},
    {name: "PA", type: "Pennsylvania", value: 1718, date: "2017-01-01"},
    {name: "PA", type: "Pennsylvania", value: 1802, date: "2017-02-01"},
    {name: "PA", type: "Pennsylvania", value: 1877, date: "2017-03-01"},
    {name: "PA", type: "Pennsylvania", value: 1453, date: "2017-04-01"},
    {name: "PA", type: "Pennsylvania", value: 1259, date: "2017-05-01"},
    {name: "PA", type: "Pennsylvania", value: 1409, date: "2017-06-01"},
    {name: "PA", type: "Pennsylvania", value: 759, date: "2017-07-01"},
    {name: "PA", type: "Pennsylvania", value: 1107, date: "2017-08-01"},
    {name: "PA", type: "Pennsylvania", value: 1288, date: "2017-09-01"},
    {name: "PA", type: "Pennsylvania", value: 1073, date: "2017-10-01"},
    {name: "PA", type: "Pennsylvania", value: 729, date: "2017-11-01"},
    {name: "PA", type: "Pennsylvania", value: 937, date: "2017-12-01"},
    {name: "PA", type: "Pennsylvania", value: 1063, date: "2018-01-01"},
    {name: "PA", type: "Pennsylvania", value: 873, date: "2018-02-01"},
    {name: "PA", type: "Pennsylvania", value: 1083, date: "2018-03-01"},
    {name: "PA", type: "Pennsylvania", value: 1026, date: "2018-04-01"},
    {name: "PA", type: "Pennsylvania", value: 1102, date: "2018-05-01"},
    {name: "PA", type: "Pennsylvania", value: 920, date: "2018-06-01"},
    {name: "PA", type: "Pennsylvania", value: 950, date: "2018-07-01"},
    {name: "PA", type: "Pennsylvania", value: 885, date: "2018-08-01"},
    {name: "PA", type: "Pennsylvania", value: 1082, date: "2018-09-01"},
    {name: "PA", type: "Pennsylvania", value: 1248, date: "2018-10-01"},
    {name: "PA", type: "Pennsylvania", value: 1115, date: "2018-11-01"},
    {name: "PA", type: "Pennsylvania", value: 843, date: "2018-12-01"},
    {name: "PA", type: "Pennsylvania", value: 1063, date: "2019-01-01"},
    {name: "PA", type: "Pennsylvania", value: 1012, date: "2019-02-01"},
    {name: "PA", type: "Pennsylvania", value: 1023, date: "2019-03-01"},
    {name: "PA", type: "Pennsylvania", value: 847, date: "2019-04-01"},
    {name: "PA", type: "Pennsylvania", value: 851, date: "2019-05-01"},
    {name: "PA", type: "Pennsylvania", value: 861, date: "2019-06-01"},
    {name: "PA", type: "Pennsylvania", value: 838, date: "2019-07-01"},
    {name: "PA", type: "Pennsylvania", value: 674, date: "2019-08-01"},
    {name: "PA", type: "Pennsylvania", value: 731, date: "2019-09-01"},
    {name: "PA", type: "Pennsylvania", value: 1053, date: "2019-10-01"},
    {name: "PA", type: "Pennsylvania", value: 871, date: "2019-11-01"},
    {name: "PA", type: "Pennsylvania", value: 1039, date: "2019-12-01"},
    {name: "PA", type: "Pennsylvania", value: 1043, date: "2020-01-01"},
    {name: "PA", type: "Pennsylvania", value: 833, date: "2020-02-01"},
    {name: "PA", type: "Pennsylvania", value: 2006, date: "2020-03-01"},
    {name: "PA", type: "Pennsylvania", value: 3322, date: "2020-04-01"},
    {name: "PA", type: "Pennsylvania", value: 3026, date: "2020-05-01"},
    {name: "PA", type: "Pennsylvania", value: 2720, date: "2020-06-01"},
    {name: "PA", type: "Pennsylvania", value: 555, date: "2020-07-01"},
    {name: "PA", type: "Pennsylvania", value: 521, date: "2020-08-01"},
    {name: "PA", type: "Pennsylvania", value: 2730, date: "2020-09-01"},
    {name: "PA", type: "Pennsylvania", value: 5079, date: "2020-10-01"},
    {name: "PA", type: "Pennsylvania", value: 8162, date: "2020-11-01"},
    {name: "PA", type: "Pennsylvania", value: 8801, date: "2020-12-01"},
    {name: "RI", type: "Rhode Island", value: 27, date: "2016-03-01"},
    {name: "RI", type: "Rhode Island", value: 88, date: "2016-04-01"},
    {name: "RI", type: "Rhode Island", value: 81, date: "2016-05-01"},
    {name: "RI", type: "Rhode Island", value: 85, date: "2016-06-01"},
    {name: "RI", type: "Rhode Island", value: 74, date: "2016-07-01"},
    {name: "RI", type: "Rhode Island", value: 107, date: "2016-08-01"},
    {name: "RI", type: "Rhode Island", value: 115, date: "2016-09-01"},
    {name: "RI", type: "Rhode Island", value: 122, date: "2016-10-01"},
    {name: "RI", type: "Rhode Island", value: 178, date: "2016-11-01"},
    {name: "RI", type: "Rhode Island", value: 157, date: "2016-12-01"},
    {name: "RI", type: "Rhode Island", value: 117, date: "2017-01-01"},
    {name: "RI", type: "Rhode Island", value: 140, date: "2017-02-01"},
    {name: "RI", type: "Rhode Island", value: 108, date: "2017-03-01"},
    {name: "RI", type: "Rhode Island", value: 117, date: "2017-04-01"},
    {name: "RI", type: "Rhode Island", value: 128, date: "2017-05-01"},
    {name: "RI", type: "Rhode Island", value: 158, date: "2017-06-01"},
    {name: "RI", type: "Rhode Island", value: 96, date: "2017-07-01"},
    {name: "RI", type: "Rhode Island", value: 201, date: "2017-08-01"},
    {name: "RI", type: "Rhode Island", value: 199, date: "2017-09-01"},
    {name: "RI", type: "Rhode Island", value: 168, date: "2017-10-01"},
    {name: "RI", type: "Rhode Island", value: 207, date: "2017-11-01"},
    {name: "RI", type: "Rhode Island", value: 174, date: "2017-12-01"},
    {name: "RI", type: "Rhode Island", value: 194, date: "2018-01-01"},
    {name: "RI", type: "Rhode Island", value: 134, date: "2018-02-01"},
    {name: "RI", type: "Rhode Island", value: 132, date: "2018-03-01"},
    {name: "RI", type: "Rhode Island", value: 143, date: "2018-04-01"},
    {name: "RI", type: "Rhode Island", value: 159, date: "2018-05-01"},
    {name: "RI", type: "Rhode Island", value: 138, date: "2018-06-01"},
    {name: "RI", type: "Rhode Island", value: 170, date: "2018-07-01"},
    {name: "RI", type: "Rhode Island", value: 181, date: "2018-08-01"},
    {name: "RI", type: "Rhode Island", value: 216, date: "2018-09-01"},
    {name: "RI", type: "Rhode Island", value: 210, date: "2018-10-01"},
    {name: "RI", type: "Rhode Island", value: 214, date: "2018-11-01"},
    {name: "RI", type: "Rhode Island", value: 140, date: "2018-12-01"},
    {name: "RI", type: "Rhode Island", value: 170, date: "2019-01-01"},
    {name: "RI", type: "Rhode Island", value: 184, date: "2019-02-01"},
    {name: "RI", type: "Rhode Island", value: 141, date: "2019-03-01"},
    {name: "RI", type: "Rhode Island", value: 162, date: "2019-04-01"},
    {name: "RI", type: "Rhode Island", value: 153, date: "2019-05-01"},
    {name: "RI", type: "Rhode Island", value: 155, date: "2019-06-01"},
    {name: "RI", type: "Rhode Island", value: 170, date: "2019-07-01"},
    {name: "RI", type: "Rhode Island", value: 139, date: "2019-08-01"},
    {name: "RI", type: "Rhode Island", value: 154, date: "2019-09-01"},
    {name: "RI", type: "Rhode Island", value: 162, date: "2019-10-01"},
    {name: "RI", type: "Rhode Island", value: 147, date: "2019-11-01"},
    {name: "RI", type: "Rhode Island", value: 128, date: "2019-12-01"},
    {name: "RI", type: "Rhode Island", value: 103, date: "2020-01-01"},
    {name: "RI", type: "Rhode Island", value: 108, date: "2020-02-01"},
    {name: "RI", type: "Rhode Island", value: 134, date: "2020-03-01"},
    {name: "RI", type: "Rhode Island", value: 222, date: "2020-04-01"},
    {name: "RI", type: "Rhode Island", value: 154, date: "2020-05-01"},
    {name: "RI", type: "Rhode Island", value: 161, date: "2020-06-01"},
    {name: "RI", type: "Rhode Island", value: 70, date: "2020-07-01"},
    {name: "RI", type: "Rhode Island", value: 73, date: "2020-08-01"},
    {name: "RI", type: "Rhode Island", value: 122, date: "2020-09-01"},
    {name: "RI", type: "Rhode Island", value: 138, date: "2020-10-01"},
    {name: "RI", type: "Rhode Island", value: 128, date: "2020-11-01"},
    {name: "RI", type: "Rhode Island", value: 158, date: "2020-12-01"},
    {name: "SC", type: "South Carolina", value: 117, date: "2016-06-01"},
    {name: "SC", type: "South Carolina", value: 248, date: "2016-07-01"},
    {name: "SC", type: "South Carolina", value: 357, date: "2016-08-01"},
    {name: "SC", type: "South Carolina", value: 355, date: "2016-09-01"},
    {name: "SC", type: "South Carolina", value: 309, date: "2016-10-01"},
    {name: "SC", type: "South Carolina", value: 355, date: "2016-11-01"},
    {name: "SC", type: "South Carolina", value: 317, date: "2016-12-01"},
    {name: "SC", type: "South Carolina", value: 319, date: "2017-01-01"},
    {name: "SC", type: "South Carolina", value: 338, date: "2017-02-01"},
    {name: "SC", type: "South Carolina", value: 341, date: "2017-03-01"},
    {name: "SC", type: "South Carolina", value: 292, date: "2017-04-01"},
    {name: "SC", type: "South Carolina", value: 281, date: "2017-05-01"},
    {name: "SC", type: "South Carolina", value: 314, date: "2017-06-01"},
    {name: "SC", type: "South Carolina", value: 424, date: "2017-07-01"},
    {name: "SC", type: "South Carolina", value: 2697, date: "2017-08-01"},
    {name: "SC", type: "South Carolina", value: 2415, date: "2017-09-01"},
    {name: "SC", type: "South Carolina", value: 2660, date: "2017-10-01"},
    {name: "SC", type: "South Carolina", value: 2625, date: "2017-11-01"},
    {name: "SC", type: "South Carolina", value: 2290, date: "2017-12-01"},
    {name: "SC", type: "South Carolina", value: 2662, date: "2018-01-01"},
    {name: "SC", type: "South Carolina", value: 2687, date: "2018-02-01"},
    {name: "SC", type: "South Carolina", value: 2738, date: "2018-03-01"},
    {name: "SC", type: "South Carolina", value: 2744, date: "2018-04-01"},
    {name: "SC", type: "South Carolina", value: 3038, date: "2018-05-01"},
    {name: "SC", type: "South Carolina", value: 2027, date: "2018-06-01"},
    {name: "SC", type: "South Carolina", value: 2101, date: "2018-07-01"},
    {name: "SC", type: "South Carolina", value: 2094, date: "2018-08-01"},
    {name: "SC", type: "South Carolina", value: 1846, date: "2018-09-01"},
    {name: "SC", type: "South Carolina", value: 2604, date: "2018-10-01"},
    {name: "SC", type: "South Carolina", value: 2253, date: "2018-11-01"},
    {name: "SC", type: "South Carolina", value: 2139, date: "2018-12-01"},
    {name: "SC", type: "South Carolina", value: 2329, date: "2019-01-01"},
    {name: "SC", type: "South Carolina", value: 1932, date: "2019-02-01"},
    {name: "SC", type: "South Carolina", value: 2087, date: "2019-03-01"},
    {name: "SC", type: "South Carolina", value: 2424, date: "2019-04-01"},
    {name: "SC", type: "South Carolina", value: 2547, date: "2019-05-01"},
    {name: "SC", type: "South Carolina", value: 2281, date: "2019-06-01"},
    {name: "SC", type: "South Carolina", value: 2429, date: "2019-07-01"},
    {name: "SC", type: "South Carolina", value: 2444, date: "2019-08-01"},
    {name: "SC", type: "South Carolina", value: 2587, date: "2019-09-01"},
    {name: "SC", type: "South Carolina", value: 3239, date: "2019-10-01"},
    {name: "SC", type: "South Carolina", value: 2919, date: "2019-11-01"},
    {name: "SC", type: "South Carolina", value: 2926, date: "2019-12-01"},
    {name: "SC", type: "South Carolina", value: 2565, date: "2020-01-01"},
    {name: "SC", type: "South Carolina", value: 2291, date: "2020-02-01"},
    {name: "SC", type: "South Carolina", value: 2380, date: "2020-03-01"},
    {name: "SC", type: "South Carolina", value: 2920, date: "2020-04-01"},
    {name: "SC", type: "South Carolina", value: 2390, date: "2020-05-01"},
    {name: "SC", type: "South Carolina", value: 2722, date: "2020-06-01"},
    {name: "SC", type: "South Carolina", value: 1519, date: "2020-07-01"},
    {name: "SC", type: "South Carolina", value: 1635, date: "2020-08-01"},
    {name: "SC", type: "South Carolina", value: 3698, date: "2020-09-01"},
    {name: "SC", type: "South Carolina", value: 5717, date: "2020-10-01"},
    {name: "SC", type: "South Carolina", value: 8068, date: "2020-11-01"},
    {name: "SC", type: "South Carolina", value: 8426, date: "2020-12-01"},
    {name: "SD", type: "South Dakota", value: 1, date: "2016-04-01"},
    {name: "SD", type: "South Dakota", value: 1, date: "2016-07-01"},
    {name: "SD", type: "South Dakota", value: 3, date: "2016-08-01"},
    {name: "SD", type: "South Dakota", value: 1, date: "2016-11-01"},
    {name: "SD", type: "South Dakota", value: 2, date: "2016-12-01"},
    {name: "SD", type: "South Dakota", value: 2, date: "2017-01-01"},
    {name: "SD", type: "South Dakota", value: 2, date: "2017-02-01"},
    {name: "SD", type: "South Dakota", value: 1, date: "2017-08-01"},
    {name: "SD", type: "South Dakota", value: 1, date: "2017-09-01"},
    {name: "SD", type: "South Dakota", value: 2, date: "2017-11-01"},
    {name: "SD", type: "South Dakota", value: 3, date: "2017-12-01"},
    {name: "SD", type: "South Dakota", value: 4, date: "2018-01-01"},
    {name: "SD", type: "South Dakota", value: 1, date: "2018-08-01"},
    {name: "SD", type: "South Dakota", value: 1, date: "2018-09-01"},
    {name: "SD", type: "South Dakota", value: 1, date: "2018-10-01"},
    {name: "SD", type: "South Dakota", value: 2, date: "2018-11-01"},
    {name: "SD", type: "South Dakota", value: 2, date: "2018-12-01"},
    {name: "SD", type: "South Dakota", value: 2, date: "2019-01-01"},
    {name: "SD", type: "South Dakota", value: 2, date: "2019-02-01"},
    {name: "SD", type: "South Dakota", value: 7, date: "2019-03-01"},
    {name: "SD", type: "South Dakota", value: 3, date: "2019-04-01"},
    {name: "SD", type: "South Dakota", value: 5, date: "2019-05-01"},
    {name: "SD", type: "South Dakota", value: 2, date: "2019-06-01"},
    {name: "SD", type: "South Dakota", value: 2, date: "2019-07-01"},
    {name: "SD", type: "South Dakota", value: 4, date: "2019-09-01"},
    {name: "SD", type: "South Dakota", value: 1, date: "2020-03-01"},
    {name: "SD", type: "South Dakota", value: 90, date: "2020-09-01"},
    {name: "SD", type: "South Dakota", value: 65, date: "2020-10-01"},
    {name: "SD", type: "South Dakota", value: 3, date: "2020-11-01"},
    {name: "SD", type: "South Dakota", value: 1, date: "2020-12-01"},
    {name: "TN", type: "Tennessee", value: 178, date: "2016-06-01"},
    {name: "TN", type: "Tennessee", value: 241, date: "2016-07-01"},
    {name: "TN", type: "Tennessee", value: 312, date: "2016-08-01"},
    {name: "TN", type: "Tennessee", value: 187, date: "2016-09-01"},
    {name: "TN", type: "Tennessee", value: 188, date: "2016-10-01"},
    {name: "TN", type: "Tennessee", value: 267, date: "2016-11-01"},
    {name: "TN", type: "Tennessee", value: 315, date: "2016-12-01"},
    {name: "TN", type: "Tennessee", value: 221, date: "2017-01-01"},
    {name: "TN", type: "Tennessee", value: 199, date: "2017-02-01"},
    {name: "TN", type: "Tennessee", value: 275, date: "2017-03-01"},
    {name: "TN", type: "Tennessee", value: 266, date: "2017-04-01"},
    {name: "TN", type: "Tennessee", value: 230, date: "2017-05-01"},
    {name: "TN", type: "Tennessee", value: 208, date: "2017-06-01"},
    {name: "TN", type: "Tennessee", value: 349, date: "2017-07-01"},
    {name: "TN", type: "Tennessee", value: 1491, date: "2017-08-01"},
    {name: "TN", type: "Tennessee", value: 1249, date: "2017-09-01"},
    {name: "TN", type: "Tennessee", value: 693, date: "2017-10-01"},
    {name: "TN", type: "Tennessee", value: 706, date: "2017-11-01"},
    {name: "TN", type: "Tennessee", value: 944, date: "2017-12-01"},
    {name: "TN", type: "Tennessee", value: 1021, date: "2018-01-01"},
    {name: "TN", type: "Tennessee", value: 1087, date: "2018-02-01"},
    {name: "TN", type: "Tennessee", value: 1053, date: "2018-03-01"},
    {name: "TN", type: "Tennessee", value: 1201, date: "2018-04-01"},
    {name: "TN", type: "Tennessee", value: 1131, date: "2018-05-01"},
    {name: "TN", type: "Tennessee", value: 958, date: "2018-06-01"},
    {name: "TN", type: "Tennessee", value: 937, date: "2018-07-01"},
    {name: "TN", type: "Tennessee", value: 1136, date: "2018-08-01"},
    {name: "TN", type: "Tennessee", value: 1171, date: "2018-09-01"},
    {name: "TN", type: "Tennessee", value: 1393, date: "2018-10-01"},
    {name: "TN", type: "Tennessee", value: 1306, date: "2018-11-01"},
    {name: "TN", type: "Tennessee", value: 982, date: "2018-12-01"},
    {name: "TN", type: "Tennessee", value: 964, date: "2019-01-01"},
    {name: "TN", type: "Tennessee", value: 1025, date: "2019-02-01"},
    {name: "TN", type: "Tennessee", value: 861, date: "2019-03-01"},
    {name: "TN", type: "Tennessee", value: 1269, date: "2019-04-01"},
    {name: "TN", type: "Tennessee", value: 979, date: "2019-05-01"},
    {name: "TN", type: "Tennessee", value: 871, date: "2019-06-01"},
    {name: "TN", type: "Tennessee", value: 834, date: "2019-07-01"},
    {name: "TN", type: "Tennessee", value: 918, date: "2019-08-01"},
    {name: "TN", type: "Tennessee", value: 849, date: "2019-09-01"},
    {name: "TN", type: "Tennessee", value: 997, date: "2019-10-01"},
    {name: "TN", type: "Tennessee", value: 1019, date: "2019-11-01"},
    {name: "TN", type: "Tennessee", value: 872, date: "2019-12-01"},
    {name: "TN", type: "Tennessee", value: 868, date: "2020-01-01"},
    {name: "TN", type: "Tennessee", value: 817, date: "2020-02-01"},
    {name: "TN", type: "Tennessee", value: 1125, date: "2020-03-01"},
    {name: "TN", type: "Tennessee", value: 1347, date: "2020-04-01"},
    {name: "TN", type: "Tennessee", value: 1795, date: "2020-05-01"},
    {name: "TN", type: "Tennessee", value: 2076, date: "2020-06-01"},
    {name: "TN", type: "Tennessee", value: 788, date: "2020-07-01"},
    {name: "TN", type: "Tennessee", value: 807, date: "2020-08-01"},
    {name: "TN", type: "Tennessee", value: 2061, date: "2020-09-01"},
    {name: "TN", type: "Tennessee", value: 3222, date: "2020-10-01"},
    {name: "TN", type: "Tennessee", value: 3367, date: "2020-11-01"},
    {name: "TN", type: "Tennessee", value: 3869, date: "2020-12-01"},
    {name: "TX", type: "Texas", value: 1480, date: "2016-06-01"},
    {name: "TX", type: "Texas", value: 3890, date: "2016-07-01"},
    {name: "TX", type: "Texas", value: 4535, date: "2016-08-01"},
    {name: "TX", type: "Texas", value: 4607, date: "2016-09-01"},
    {name: "TX", type: "Texas", value: 4724, date: "2016-10-01"},
    {name: "TX", type: "Texas", value: 5794, date: "2016-11-01"},
    {name: "TX", type: "Texas", value: 4773, date: "2016-12-01"},
    {name: "TX", type: "Texas", value: 5250, date: "2017-01-01"},
    {name: "TX", type: "Texas", value: 4387, date: "2017-02-01"},
    {name: "TX", type: "Texas", value: 5053, date: "2017-03-01"},
    {name: "TX", type: "Texas", value: 4210, date: "2017-04-01"},
    {name: "TX", type: "Texas", value: 3365, date: "2017-05-01"},
    {name: "TX", type: "Texas", value: 3773, date: "2017-06-01"},
    {name: "TX", type: "Texas", value: 3400, date: "2017-07-01"},
    {name: "TX", type: "Texas", value: 4465, date: "2017-08-01"},
    {name: "TX", type: "Texas", value: 3941, date: "2017-09-01"},
    {name: "TX", type: "Texas", value: 4164, date: "2017-10-01"},
    {name: "TX", type: "Texas", value: 3757, date: "2017-11-01"},
    {name: "TX", type: "Texas", value: 3978, date: "2017-12-01"},
    {name: "TX", type: "Texas", value: 3840, date: "2018-01-01"},
    {name: "TX", type: "Texas", value: 4409, date: "2018-02-01"},
    {name: "TX", type: "Texas", value: 4095, date: "2018-03-01"},
    {name: "TX", type: "Texas", value: 3980, date: "2018-04-01"},
    {name: "TX", type: "Texas", value: 4023, date: "2018-05-01"},
    {name: "TX", type: "Texas", value: 3674, date: "2018-06-01"},
    {name: "TX", type: "Texas", value: 3114, date: "2018-07-01"},
    {name: "TX", type: "Texas", value: 3547, date: "2018-08-01"},
    {name: "TX", type: "Texas", value: 3822, date: "2018-09-01"},
    {name: "TX", type: "Texas", value: 4630, date: "2018-10-01"},
    {name: "TX", type: "Texas", value: 4160, date: "2018-11-01"},
    {name: "TX", type: "Texas", value: 3952, date: "2018-12-01"},
    {name: "TX", type: "Texas", value: 3773, date: "2019-01-01"},
    {name: "TX", type: "Texas", value: 3323, date: "2019-02-01"},
    {name: "TX", type: "Texas", value: 3087, date: "2019-03-01"},
    {name: "TX", type: "Texas", value: 3819, date: "2019-04-01"},
    {name: "TX", type: "Texas", value: 3621, date: "2019-05-01"},
    {name: "TX", type: "Texas", value: 3219, date: "2019-06-01"},
    {name: "TX", type: "Texas", value: 3537, date: "2019-07-01"},
    {name: "TX", type: "Texas", value: 4051, date: "2019-08-01"},
    {name: "TX", type: "Texas", value: 3573, date: "2019-09-01"},
    {name: "TX", type: "Texas", value: 4222, date: "2019-10-01"},
    {name: "TX", type: "Texas", value: 3391, date: "2019-11-01"},
    {name: "TX", type: "Texas", value: 3139, date: "2019-12-01"},
    {name: "TX", type: "Texas", value: 3144, date: "2020-01-01"},
    {name: "TX", type: "Texas", value: 3070, date: "2020-02-01"},
    {name: "TX", type: "Texas", value: 3009, date: "2020-03-01"},
    {name: "TX", type: "Texas", value: 3188, date: "2020-04-01"},
    {name: "TX", type: "Texas", value: 3588, date: "2020-05-01"},
    {name: "TX", type: "Texas", value: 3745, date: "2020-06-01"},
    {name: "TX", type: "Texas", value: 1499, date: "2020-07-01"},
    {name: "TX", type: "Texas", value: 1629, date: "2020-08-01"},
    {name: "TX", type: "Texas", value: 3871, date: "2020-09-01"},
    {name: "TX", type: "Texas", value: 6465, date: "2020-10-01"},
    {name: "TX", type: "Texas", value: 11236, date: "2020-11-01"},
    {name: "TX", type: "Texas", value: 12649, date: "2020-12-01"},
    {name: "UT", type: "Utah", value: 58, date: "2016-06-01"},
    {name: "UT", type: "Utah", value: 221, date: "2016-07-01"},
    {name: "UT", type: "Utah", value: 164, date: "2016-08-01"},
    {name: "UT", type: "Utah", value: 87, date: "2016-09-01"},
    {name: "UT", type: "Utah", value: 148, date: "2016-10-01"},
    {name: "UT", type: "Utah", value: 158, date: "2016-11-01"},
    {name: "UT", type: "Utah", value: 132, date: "2016-12-01"},
    {name: "UT", type: "Utah", value: 159, date: "2017-01-01"},
    {name: "UT", type: "Utah", value: 94, date: "2017-02-01"},
    {name: "UT", type: "Utah", value: 100, date: "2017-03-01"},
    {name: "UT", type: "Utah", value: 65, date: "2017-04-01"},
    {name: "UT", type: "Utah", value: 138, date: "2017-05-01"},
    {name: "UT", type: "Utah", value: 173, date: "2017-06-01"},
    {name: "UT", type: "Utah", value: 193, date: "2017-07-01"},
    {name: "UT", type: "Utah", value: 509, date: "2017-08-01"},
    {name: "UT", type: "Utah", value: 552, date: "2017-09-01"},
    {name: "UT", type: "Utah", value: 451, date: "2017-10-01"},
    {name: "UT", type: "Utah", value: 439, date: "2017-11-01"},
    {name: "UT", type: "Utah", value: 424, date: "2017-12-01"},
    {name: "UT", type: "Utah", value: 417, date: "2018-01-01"},
    {name: "UT", type: "Utah", value: 570, date: "2018-02-01"},
    {name: "UT", type: "Utah", value: 415, date: "2018-03-01"},
    {name: "UT", type: "Utah", value: 376, date: "2018-04-01"},
    {name: "UT", type: "Utah", value: 462, date: "2018-05-01"},
    {name: "UT", type: "Utah", value: 433, date: "2018-06-01"},
    {name: "UT", type: "Utah", value: 371, date: "2018-07-01"},
    {name: "UT", type: "Utah", value: 475, date: "2018-08-01"},
    {name: "UT", type: "Utah", value: 469, date: "2018-09-01"},
    {name: "UT", type: "Utah", value: 564, date: "2018-10-01"},
    {name: "UT", type: "Utah", value: 1140, date: "2018-11-01"},
    {name: "UT", type: "Utah", value: 2190, date: "2018-12-01"},
    {name: "UT", type: "Utah", value: 1988, date: "2019-01-01"},
    {name: "UT", type: "Utah", value: 1825, date: "2019-02-01"},
    {name: "UT", type: "Utah", value: 1672, date: "2019-03-01"},
    {name: "UT", type: "Utah", value: 1530, date: "2019-04-01"},
    {name: "UT", type: "Utah", value: 1766, date: "2019-05-01"},
    {name: "UT", type: "Utah", value: 1620, date: "2019-06-01"},
    {name: "UT", type: "Utah", value: 1558, date: "2019-07-01"},
    {name: "UT", type: "Utah", value: 2016, date: "2019-08-01"},
    {name: "UT", type: "Utah", value: 1561, date: "2019-09-01"},
    {name: "UT", type: "Utah", value: 1932, date: "2019-10-01"},
    {name: "UT", type: "Utah", value: 1513, date: "2019-11-01"},
    {name: "UT", type: "Utah", value: 1957, date: "2019-12-01"},
    {name: "UT", type: "Utah", value: 1880, date: "2020-01-01"},
    {name: "UT", type: "Utah", value: 1576, date: "2020-02-01"},
    {name: "UT", type: "Utah", value: 1515, date: "2020-03-01"},
    {name: "UT", type: "Utah", value: 1063, date: "2020-04-01"},
    {name: "UT", type: "Utah", value: 1320, date: "2020-05-01"},
    {name: "UT", type: "Utah", value: 1693, date: "2020-06-01"},
    {name: "UT", type: "Utah", value: 253, date: "2020-07-01"},
    {name: "UT", type: "Utah", value: 216, date: "2020-08-01"},
    {name: "UT", type: "Utah", value: 489, date: "2020-09-01"},
    {name: "UT", type: "Utah", value: 1004, date: "2020-10-01"},
    {name: "UT", type: "Utah", value: 1225, date: "2020-11-01"},
    {name: "UT", type: "Utah", value: 1578, date: "2020-12-01"},
    {name: "VA", type: "Virginia", value: 343, date: "2016-06-01"},
    {name: "VA", type: "Virginia", value: 472, date: "2016-07-01"},
    {name: "VA", type: "Virginia", value: 609, date: "2016-08-01"},
    {name: "VA", type: "Virginia", value: 552, date: "2016-09-01"},
    {name: "VA", type: "Virginia", value: 697, date: "2016-10-01"},
    {name: "VA", type: "Virginia", value: 942, date: "2016-11-01"},
    {name: "VA", type: "Virginia", value: 931, date: "2016-12-01"},
    {name: "VA", type: "Virginia", value: 775, date: "2017-01-01"},
    {name: "VA", type: "Virginia", value: 604, date: "2017-02-01"},
    {name: "VA", type: "Virginia", value: 827, date: "2017-03-01"},
    {name: "VA", type: "Virginia", value: 623, date: "2017-04-01"},
    {name: "VA", type: "Virginia", value: 651, date: "2017-05-01"},
    {name: "VA", type: "Virginia", value: 631, date: "2017-06-01"},
    {name: "VA", type: "Virginia", value: 742, date: "2017-07-01"},
    {name: "VA", type: "Virginia", value: 1861, date: "2017-08-01"},
    {name: "VA", type: "Virginia", value: 1652, date: "2017-09-01"},
    {name: "VA", type: "Virginia", value: 1539, date: "2017-10-01"},
    {name: "VA", type: "Virginia", value: 1329, date: "2017-11-01"},
    {name: "VA", type: "Virginia", value: 1396, date: "2017-12-01"},
    {name: "VA", type: "Virginia", value: 1468, date: "2018-01-01"},
    {name: "VA", type: "Virginia", value: 1249, date: "2018-02-01"},
    {name: "VA", type: "Virginia", value: 1157, date: "2018-03-01"},
    {name: "VA", type: "Virginia", value: 984, date: "2018-04-01"},
    {name: "VA", type: "Virginia", value: 1141, date: "2018-05-01"},
    {name: "VA", type: "Virginia", value: 1090, date: "2018-06-01"},
    {name: "VA", type: "Virginia", value: 1339, date: "2018-07-01"},
    {name: "VA", type: "Virginia", value: 1207, date: "2018-08-01"},
    {name: "VA", type: "Virginia", value: 1375, date: "2018-09-01"},
    {name: "VA", type: "Virginia", value: 1994, date: "2018-10-01"},
    {name: "VA", type: "Virginia", value: 1794, date: "2018-11-01"},
    {name: "VA", type: "Virginia", value: 1639, date: "2018-12-01"},
    {name: "VA", type: "Virginia", value: 1592, date: "2019-01-01"},
    {name: "VA", type: "Virginia", value: 1391, date: "2019-02-01"},
    {name: "VA", type: "Virginia", value: 1343, date: "2019-03-01"},
    {name: "VA", type: "Virginia", value: 1389, date: "2019-04-01"},
    {name: "VA", type: "Virginia", value: 1500, date: "2019-05-01"},
    {name: "VA", type: "Virginia", value: 1069, date: "2019-06-01"},
    {name: "VA", type: "Virginia", value: 1211, date: "2019-07-01"},
    {name: "VA", type: "Virginia", value: 1160, date: "2019-08-01"},
    {name: "VA", type: "Virginia", value: 937, date: "2019-09-01"},
    {name: "VA", type: "Virginia", value: 1179, date: "2019-10-01"},
    {name: "VA", type: "Virginia", value: 1017, date: "2019-11-01"},
    {name: "VA", type: "Virginia", value: 1203, date: "2019-12-01"},
    {name: "VA", type: "Virginia", value: 1127, date: "2020-01-01"},
    {name: "VA", type: "Virginia", value: 871, date: "2020-02-01"},
    {name: "VA", type: "Virginia", value: 1981, date: "2020-03-01"},
    {name: "VA", type: "Virginia", value: 3742, date: "2020-04-01"},
    {name: "VA", type: "Virginia", value: 2635, date: "2020-05-01"},
    {name: "VA", type: "Virginia", value: 2651, date: "2020-06-01"},
    {name: "VA", type: "Virginia", value: 469, date: "2020-07-01"},
    {name: "VA", type: "Virginia", value: 601, date: "2020-08-01"},
    {name: "VA", type: "Virginia", value: 3781, date: "2020-09-01"},
    {name: "VA", type: "Virginia", value: 6624, date: "2020-10-01"},
    {name: "VA", type: "Virginia", value: 7839, date: "2020-11-01"},
    {name: "VA", type: "Virginia", value: 8805, date: "2020-12-01"},
    {name: "VT", type: "Vermont", value: 3, date: "2016-07-01"},
    {name: "VT", type: "Vermont", value: 1, date: "2016-08-01"},
    {name: "VT", type: "Vermont", value: 2, date: "2016-09-01"},
    {name: "VT", type: "Vermont", value: 1, date: "2016-10-01"},
    {name: "VT", type: "Vermont", value: 5, date: "2016-11-01"},
    {name: "VT", type: "Vermont", value: 5, date: "2016-12-01"},
    {name: "VT", type: "Vermont", value: 3, date: "2017-01-01"},
    {name: "VT", type: "Vermont", value: 13, date: "2017-02-01"},
    {name: "VT", type: "Vermont", value: 15, date: "2017-03-01"},
    {name: "VT", type: "Vermont", value: 3, date: "2017-04-01"},
    {name: "VT", type: "Vermont", value: 5, date: "2017-05-01"},
    {name: "VT", type: "Vermont", value: 6, date: "2017-06-01"},
    {name: "VT", type: "Vermont", value: 9, date: "2017-07-01"},
    {name: "VT", type: "Vermont", value: 19, date: "2017-08-01"},
    {name: "VT", type: "Vermont", value: 3, date: "2017-09-01"},
    {name: "VT", type: "Vermont", value: 12, date: "2017-10-01"},
    {name: "VT", type: "Vermont", value: 7, date: "2017-11-01"},
    {name: "VT", type: "Vermont", value: 18, date: "2017-12-01"},
    {name: "VT", type: "Vermont", value: 14, date: "2018-01-01"},
    {name: "VT", type: "Vermont", value: 16, date: "2018-02-01"},
    {name: "VT", type: "Vermont", value: 14, date: "2018-03-01"},
    {name: "VT", type: "Vermont", value: 10, date: "2018-04-01"},
    {name: "VT", type: "Vermont", value: 12, date: "2018-06-01"},
    {name: "VT", type: "Vermont", value: 3, date: "2018-07-01"},
    {name: "VT", type: "Vermont", value: 4, date: "2018-08-01"},
    {name: "VT", type: "Vermont", value: 7, date: "2018-09-01"},
    {name: "VT", type: "Vermont", value: 12, date: "2018-10-01"},
    {name: "VT", type: "Vermont", value: 20, date: "2018-11-01"},
    {name: "VT", type: "Vermont", value: 15, date: "2018-12-01"},
    {name: "VT", type: "Vermont", value: 15, date: "2019-01-01"},
    {name: "VT", type: "Vermont", value: 15, date: "2019-02-01"},
    {name: "VT", type: "Vermont", value: 12, date: "2019-03-01"},
    {name: "VT", type: "Vermont", value: 4, date: "2019-04-01"},
    {name: "VT", type: "Vermont", value: 5, date: "2019-05-01"},
    {name: "VT", type: "Vermont", value: 5, date: "2019-06-01"},
    {name: "VT", type: "Vermont", value: 23, date: "2019-07-01"},
    {name: "VT", type: "Vermont", value: 14, date: "2019-08-01"},
    {name: "VT", type: "Vermont", value: 21, date: "2019-09-01"},
    {name: "VT", type: "Vermont", value: 17, date: "2019-10-01"},
    {name: "VT", type: "Vermont", value: 18, date: "2019-11-01"},
    {name: "VT", type: "Vermont", value: 21, date: "2019-12-01"},
    {name: "VT", type: "Vermont", value: 17, date: "2020-01-01"},
    {name: "VT", type: "Vermont", value: 20, date: "2020-02-01"},
    {name: "VT", type: "Vermont", value: 20, date: "2020-03-01"},
    {name: "VT", type: "Vermont", value: 6, date: "2020-04-01"},
    {name: "VT", type: "Vermont", value: 7, date: "2020-05-01"},
    {name: "VT", type: "Vermont", value: 19, date: "2020-06-01"},
    {name: "VT", type: "Vermont", value: 8, date: "2020-07-01"},
    {name: "VT", type: "Vermont", value: 4, date: "2020-08-01"},
    {name: "VT", type: "Vermont", value: 4, date: "2020-09-01"},
    {name: "VT", type: "Vermont", value: 9, date: "2020-10-01"},
    {name: "VT", type: "Vermont", value: 4, date: "2020-11-01"},
    {name: "VT", type: "Vermont", value: 10, date: "2020-12-01"},
    {name: "WA", type: "Washington", value: 415, date: "2016-06-01"},
    {name: "WA", type: "Washington", value: 902, date: "2016-07-01"},
    {name: "WA", type: "Washington", value: 916, date: "2016-08-01"},
    {name: "WA", type: "Washington", value: 790, date: "2016-09-01"},
    {name: "WA", type: "Washington", value: 950, date: "2016-10-01"},
    {name: "WA", type: "Washington", value: 1009, date: "2016-11-01"},
    {name: "WA", type: "Washington", value: 1125, date: "2016-12-01"},
    {name: "WA", type: "Washington", value: 783, date: "2017-01-01"},
    {name: "WA", type: "Washington", value: 1007, date: "2017-02-01"},
    {name: "WA", type: "Washington", value: 914, date: "2017-03-01"},
    {name: "WA", type: "Washington", value: 739, date: "2017-04-01"},
    {name: "WA", type: "Washington", value: 820, date: "2017-05-01"},
    {name: "WA", type: "Washington", value: 798, date: "2017-06-01"},
    {name: "WA", type: "Washington", value: 979, date: "2017-07-01"},
    {name: "WA", type: "Washington", value: 1080, date: "2017-08-01"},
    {name: "WA", type: "Washington", value: 1101, date: "2017-09-01"},
    {name: "WA", type: "Washington", value: 1405, date: "2017-10-01"},
    {name: "WA", type: "Washington", value: 1211, date: "2017-11-01"},
    {name: "WA", type: "Washington", value: 1082, date: "2017-12-01"},
    {name: "WA", type: "Washington", value: 979, date: "2018-01-01"},
    {name: "WA", type: "Washington", value: 843, date: "2018-02-01"},
    {name: "WA", type: "Washington", value: 952, date: "2018-03-01"},
    {name: "WA", type: "Washington", value: 927, date: "2018-04-01"},
    {name: "WA", type: "Washington", value: 1066, date: "2018-05-01"},
    {name: "WA", type: "Washington", value: 1259, date: "2018-06-01"},
    {name: "WA", type: "Washington", value: 1107, date: "2018-07-01"},
    {name: "WA", type: "Washington", value: 1097, date: "2018-08-01"},
    {name: "WA", type: "Washington", value: 887, date: "2018-09-01"},
    {name: "WA", type: "Washington", value: 853, date: "2018-10-01"},
    {name: "WA", type: "Washington", value: 966, date: "2018-11-01"},
    {name: "WA", type: "Washington", value: 1041, date: "2018-12-01"},
    {name: "WA", type: "Washington", value: 889, date: "2019-01-01"},
    {name: "WA", type: "Washington", value: 881, date: "2019-02-01"},
    {name: "WA", type: "Washington", value: 760, date: "2019-03-01"},
    {name: "WA", type: "Washington", value: 780, date: "2019-04-01"},
    {name: "WA", type: "Washington", value: 810, date: "2019-05-01"},
    {name: "WA", type: "Washington", value: 713, date: "2019-06-01"},
    {name: "WA", type: "Washington", value: 915, date: "2019-07-01"},
    {name: "WA", type: "Washington", value: 806, date: "2019-08-01"},
    {name: "WA", type: "Washington", value: 820, date: "2019-09-01"},
    {name: "WA", type: "Washington", value: 891, date: "2019-10-01"},
    {name: "WA", type: "Washington", value: 681, date: "2019-11-01"},
    {name: "WA", type: "Washington", value: 756, date: "2019-12-01"},
    {name: "WA", type: "Washington", value: 887, date: "2020-01-01"},
    {name: "WA", type: "Washington", value: 605, date: "2020-02-01"},
    {name: "WA", type: "Washington", value: 749, date: "2020-03-01"},
    {name: "WA", type: "Washington", value: 792, date: "2020-04-01"},
    {name: "WA", type: "Washington", value: 1120, date: "2020-05-01"},
    {name: "WA", type: "Washington", value: 1478, date: "2020-06-01"},
    {name: "WA", type: "Washington", value: 274, date: "2020-07-01"},
    {name: "WA", type: "Washington", value: 313, date: "2020-08-01"},
    {name: "WA", type: "Washington", value: 602, date: "2020-09-01"},
    {name: "WA", type: "Washington", value: 890, date: "2020-10-01"},
    {name: "WA", type: "Washington", value: 956, date: "2020-11-01"},
    {name: "WA", type: "Washington", value: 1084, date: "2020-12-01"},
    {name: "WI", type: "Wisconsin", value: 2, date: "2016-04-01"},
    {name: "WI", type: "Wisconsin", value: 4, date: "2016-05-01"},
    {name: "WI", type: "Wisconsin", value: 99, date: "2016-06-01"},
    {name: "WI", type: "Wisconsin", value: 210, date: "2016-07-01"},
    {name: "WI", type: "Wisconsin", value: 278, date: "2016-08-01"},
    {name: "WI", type: "Wisconsin", value: 196, date: "2016-09-01"},
    {name: "WI", type: "Wisconsin", value: 231, date: "2016-10-01"},
    {name: "WI", type: "Wisconsin", value: 278, date: "2016-11-01"},
    {name: "WI", type: "Wisconsin", value: 251, date: "2016-12-01"},
    {name: "WI", type: "Wisconsin", value: 253, date: "2017-01-01"},
    {name: "WI", type: "Wisconsin", value: 225, date: "2017-02-01"},
    {name: "WI", type: "Wisconsin", value: 238, date: "2017-03-01"},
    {name: "WI", type: "Wisconsin", value: 186, date: "2017-04-01"},
    {name: "WI", type: "Wisconsin", value: 242, date: "2017-05-01"},
    {name: "WI", type: "Wisconsin", value: 237, date: "2017-06-01"},
    {name: "WI", type: "Wisconsin", value: 214, date: "2017-07-01"},
    {name: "WI", type: "Wisconsin", value: 377, date: "2017-08-01"},
    {name: "WI", type: "Wisconsin", value: 360, date: "2017-09-01"},
    {name: "WI", type: "Wisconsin", value: 336, date: "2017-10-01"},
    {name: "WI", type: "Wisconsin", value: 309, date: "2017-11-01"},
    {name: "WI", type: "Wisconsin", value: 276, date: "2017-12-01"},
    {name: "WI", type: "Wisconsin", value: 316, date: "2018-01-01"},
    {name: "WI", type: "Wisconsin", value: 256, date: "2018-02-01"},
    {name: "WI", type: "Wisconsin", value: 242, date: "2018-03-01"},
    {name: "WI", type: "Wisconsin", value: 250, date: "2018-04-01"},
    {name: "WI", type: "Wisconsin", value: 279, date: "2018-05-01"},
    {name: "WI", type: "Wisconsin", value: 254, date: "2018-06-01"},
    {name: "WI", type: "Wisconsin", value: 209, date: "2018-07-01"},
    {name: "WI", type: "Wisconsin", value: 201, date: "2018-08-01"},
    {name: "WI", type: "Wisconsin", value: 241, date: "2018-09-01"},
    {name: "WI", type: "Wisconsin", value: 299, date: "2018-10-01"},
    {name: "WI", type: "Wisconsin", value: 417, date: "2018-11-01"},
    {name: "WI", type: "Wisconsin", value: 314, date: "2018-12-01"},
    {name: "WI", type: "Wisconsin", value: 527, date: "2019-01-01"},
    {name: "WI", type: "Wisconsin", value: 510, date: "2019-02-01"},
    {name: "WI", type: "Wisconsin", value: 321, date: "2019-03-01"},
    {name: "WI", type: "Wisconsin", value: 260, date: "2019-04-01"},
    {name: "WI", type: "Wisconsin", value: 323, date: "2019-05-01"},
    {name: "WI", type: "Wisconsin", value: 289, date: "2019-06-01"},
    {name: "WI", type: "Wisconsin", value: 284, date: "2019-07-01"},
    {name: "WI", type: "Wisconsin", value: 292, date: "2019-08-01"},
    {name: "WI", type: "Wisconsin", value: 359, date: "2019-09-01"},
    {name: "WI", type: "Wisconsin", value: 420, date: "2019-10-01"},
    {name: "WI", type: "Wisconsin", value: 286, date: "2019-11-01"},
    {name: "WI", type: "Wisconsin", value: 254, date: "2019-12-01"},
    {name: "WI", type: "Wisconsin", value: 323, date: "2020-01-01"},
    {name: "WI", type: "Wisconsin", value: 212, date: "2020-02-01"},
    {name: "WI", type: "Wisconsin", value: 199, date: "2020-03-01"},
    {name: "WI", type: "Wisconsin", value: 285, date: "2020-04-01"},
    {name: "WI", type: "Wisconsin", value: 340, date: "2020-05-01"},
    {name: "WI", type: "Wisconsin", value: 422, date: "2020-06-01"},
    {name: "WI", type: "Wisconsin", value: 115, date: "2020-07-01"},
    {name: "WI", type: "Wisconsin", value: 92, date: "2020-08-01"},
    {name: "WI", type: "Wisconsin", value: 100, date: "2020-09-01"},
    {name: "WI", type: "Wisconsin", value: 131, date: "2020-10-01"},
    {name: "WI", type: "Wisconsin", value: 118, date: "2020-11-01"},
    {name: "WI", type: "Wisconsin", value: 127, date: "2020-12-01"},
    {name: "WV", type: "West Virginia", value: 30, date: "2016-02-01"},
    {name: "WV", type: "West Virginia", value: 34, date: "2016-03-01"},
    {name: "WV", type: "West Virginia", value: 32, date: "2016-04-01"},
    {name: "WV", type: "West Virginia", value: 13, date: "2016-05-01"},
    {name: "WV", type: "West Virginia", value: 40, date: "2016-06-01"},
    {name: "WV", type: "West Virginia", value: 79, date: "2016-07-01"},
    {name: "WV", type: "West Virginia", value: 36, date: "2016-08-01"},
    {name: "WV", type: "West Virginia", value: 27, date: "2016-09-01"},
    {name: "WV", type: "West Virginia", value: 31, date: "2016-10-01"},
    {name: "WV", type: "West Virginia", value: 58, date: "2016-11-01"},
    {name: "WV", type: "West Virginia", value: 37, date: "2016-12-01"},
    {name: "WV", type: "West Virginia", value: 50, date: "2017-01-01"},
    {name: "WV", type: "West Virginia", value: 61, date: "2017-02-01"},
    {name: "WV", type: "West Virginia", value: 71, date: "2017-03-01"},
    {name: "WV", type: "West Virginia", value: 49, date: "2017-04-01"},
    {name: "WV", type: "West Virginia", value: 37, date: "2017-05-01"},
    {name: "WV", type: "West Virginia", value: 81, date: "2017-06-01"},
    {name: "WV", type: "West Virginia", value: 92, date: "2017-07-01"},
    {name: "WV", type: "West Virginia", value: 45, date: "2017-08-01"},
    {name: "WV", type: "West Virginia", value: 42, date: "2017-09-01"},
    {name: "WV", type: "West Virginia", value: 42, date: "2017-10-01"},
    {name: "WV", type: "West Virginia", value: 48, date: "2017-11-01"},
    {name: "WV", type: "West Virginia", value: 35, date: "2017-12-01"},
    {name: "WV", type: "West Virginia", value: 44, date: "2018-01-01"},
    {name: "WV", type: "West Virginia", value: 34, date: "2018-02-01"},
    {name: "WV", type: "West Virginia", value: 33, date: "2018-03-01"},
    {name: "WV", type: "West Virginia", value: 50, date: "2018-04-01"},
    {name: "WV", type: "West Virginia", value: 57, date: "2018-05-01"},
    {name: "WV", type: "West Virginia", value: 27, date: "2018-06-01"},
    {name: "WV", type: "West Virginia", value: 39, date: "2018-07-01"},
    {name: "WV", type: "West Virginia", value: 7, date: "2018-08-01"},
    {name: "WV", type: "West Virginia", value: 55, date: "2018-09-01"},
    {name: "WV", type: "West Virginia", value: 85, date: "2018-10-01"},
    {name: "WV", type: "West Virginia", value: 99, date: "2018-11-01"},
    {name: "WV", type: "West Virginia", value: 70, date: "2018-12-01"},
    {name: "WV", type: "West Virginia", value: 49, date: "2019-01-01"},
    {name: "WV", type: "West Virginia", value: 71, date: "2019-02-01"},
    {name: "WV", type: "West Virginia", value: 26, date: "2019-03-01"},
    {name: "WV", type: "West Virginia", value: 48, date: "2019-04-01"},
    {name: "WV", type: "West Virginia", value: 47, date: "2019-05-01"},
    {name: "WV", type: "West Virginia", value: 38, date: "2019-06-01"},
    {name: "WV", type: "West Virginia", value: 53, date: "2019-07-01"},
    {name: "WV", type: "West Virginia", value: 26, date: "2019-08-01"},
    {name: "WV", type: "West Virginia", value: 31, date: "2019-09-01"},
    {name: "WV", type: "West Virginia", value: 42, date: "2019-10-01"},
    {name: "WV", type: "West Virginia", value: 11, date: "2019-11-01"},
    {name: "WV", type: "West Virginia", value: 11, date: "2019-12-01"},
    {name: "WV", type: "West Virginia", value: 31, date: "2020-01-01"},
    {name: "WV", type: "West Virginia", value: 13, date: "2020-02-01"},
    {name: "WV", type: "West Virginia", value: 5, date: "2020-03-01"},
    {name: "WV", type: "West Virginia", value: 21, date: "2020-04-01"},
    {name: "WV", type: "West Virginia", value: 6, date: "2020-05-01"},
    {name: "WV", type: "West Virginia", value: 6, date: "2020-06-01"},
    {name: "WV", type: "West Virginia", value: 2, date: "2020-07-01"},
    {name: "WV", type: "West Virginia", value: 8, date: "2020-08-01"},
    {name: "WV", type: "West Virginia", value: 107, date: "2020-09-01"},
    {name: "WV", type: "West Virginia", value: 233, date: "2020-10-01"},
    {name: "WV", type: "West Virginia", value: 364, date: "2020-11-01"},
    {name: "WV", type: "West Virginia", value: 502, date: "2020-12-01"},
    {name: "WY", type: "Wyoming", value: 1, date: "2016-06-01"},
    {name: "WY", type: "Wyoming", value: 14, date: "2016-07-01"},
    {name: "WY", type: "Wyoming", value: 6, date: "2016-08-01"},
    {name: "WY", type: "Wyoming", value: 8, date: "2016-09-01"},
    {name: "WY", type: "Wyoming", value: 10, date: "2016-10-01"},
    {name: "WY", type: "Wyoming", value: 16, date: "2016-11-01"},
    {name: "WY", type: "Wyoming", value: 14, date: "2016-12-01"},
    {name: "WY", type: "Wyoming", value: 13, date: "2017-01-01"},
    {name: "WY", type: "Wyoming", value: 22, date: "2017-02-01"},
    {name: "WY", type: "Wyoming", value: 10, date: "2017-03-01"},
    {name: "WY", type: "Wyoming", value: 4, date: "2017-04-01"},
    {name: "WY", type: "Wyoming", value: 2, date: "2017-05-01"},
    {name: "WY", type: "Wyoming", value: 6, date: "2017-06-01"},
    {name: "WY", type: "Wyoming", value: 9, date: "2017-07-01"},
    {name: "WY", type: "Wyoming", value: 10, date: "2017-08-01"},
    {name: "WY", type: "Wyoming", value: 6, date: "2017-09-01"},
    {name: "WY", type: "Wyoming", value: 2, date: "2017-10-01"},
    {name: "WY", type: "Wyoming", value: 5, date: "2017-11-01"},
    {name: "WY", type: "Wyoming", value: 7, date: "2017-12-01"},
    {name: "WY", type: "Wyoming", value: 11, date: "2018-01-01"},
    {name: "WY", type: "Wyoming", value: 9, date: "2018-02-01"},
    {name: "WY", type: "Wyoming", value: 15, date: "2018-03-01"},
    {name: "WY", type: "Wyoming", value: 11, date: "2018-04-01"},
    {name: "WY", type: "Wyoming", value: 5, date: "2018-05-01"},
    {name: "WY", type: "Wyoming", value: 13, date: "2018-06-01"},
    {name: "WY", type: "Wyoming", value: 7, date: "2018-07-01"},
    {name: "WY", type: "Wyoming", value: 4, date: "2018-08-01"},
    {name: "WY", type: "Wyoming", value: 7, date: "2018-09-01"},
    {name: "WY", type: "Wyoming", value: 7, date: "2018-10-01"},
    {name: "WY", type: "Wyoming", value: 40, date: "2018-11-01"},
    {name: "WY", type: "Wyoming", value: 13, date: "2018-12-01"},
    {name: "WY", type: "Wyoming", value: 25, date: "2019-01-01"},
    {name: "WY", type: "Wyoming", value: 19, date: "2019-02-01"},
    {name: "WY", type: "Wyoming", value: 5, date: "2019-03-01"},
    {name: "WY", type: "Wyoming", value: 6, date: "2019-04-01"},
    {name: "WY", type: "Wyoming", value: 6, date: "2019-05-01"},
    {name: "WY", type: "Wyoming", value: 3, date: "2019-06-01"},
    {name: "WY", type: "Wyoming", value: 5, date: "2019-07-01"},
    {name: "WY", type: "Wyoming", value: 4, date: "2019-08-01"},
    {name: "WY", type: "Wyoming", value: 6, date: "2019-09-01"},
    {name: "WY", type: "Wyoming", value: 7, date: "2019-10-01"},
    {name: "WY", type: "Wyoming", value: 3, date: "2019-11-01"},
    {name: "WY", type: "Wyoming", value: 5, date: "2019-12-01"},
    {name: "WY", type: "Wyoming", value: 4, date: "2020-01-01"},
    {name: "WY", type: "Wyoming", value: 2, date: "2020-03-01"},
    {name: "WY", type: "Wyoming", value: 2, date: "2020-04-01"},
    {name: "WY", type: "Wyoming", value: 1, date: "2020-05-01"},
    {name: "WY", type: "Wyoming", value: 1, date: "2020-06-01"},
    {name: "WY", type: "Wyoming", value: 1, date: "2020-08-01"},
    {name: "WY", type: "Wyoming", value: 6, date: "2020-10-01"},
    {name: "WY", type: "Wyoming", value: 1, date: "2020-12-01"}
]
var user_pallete = config.color_palette;

// set the dimensions and margins of the graph
var margin = {top: 10, right: 30, bottom: 30, left: 40},
    width = 1950 - margin.left - margin.right,
    height = 1050 - margin.top - margin.bottom;

// append the svg object to the body of the page
const svg = d3.select("#col-1")
    .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

// get the data
function getCsv() {
    console.log("loading...");
    draw(dataOri);
}

window.onload = getCsv()

function changeColor0() {
    user_pallete = []
}

function changeColorRed() {
    user_pallete = ["#ff1a1a","#ff001c","#cb0017","#810008","#3b0107"]
}
function changeColorYellow() {
    user_pallete = ["#ffeb6e","#dec151","#b69512","#8f7802","#9d5d00"]
}
function changeColorGreen() {
    user_pallete = ["#7dffa2","#39ff75","#00bd37","#008125","#004615"]
}

function changeColorBlue() {
    user_pallete = ["#849cff","#3b58e1","#1931b9","#0022bb","#001783"]
}

// 选择颜色
function getColor(d) {
    var divide_color_by = config.divide_color_by;
    var changeable_color = config.changeable_color;
    var divide_changeable_color_by_type = config.divide_changeable_color_by_type;
    // 如果用户提供的color_palette 长度不为0 则使用它，否则使用d3.schemeCatetory10
    var product_palette = user_pallete.length !== 0 ? user_pallete : d3.schemeCategory10;
    var r = 0.0;
    if (changeable_color) {
        var colorRange = d3.interpolateCubehelix(
            config.color_range[0],
            config.color_range[1]
        );
        if (divide_changeable_color_by_type && d["type"] in config.color_ranges) {
            var colorRange = d3.interpolateCubehelix(
                config.color_ranges[d["type"]][0],
                config.color_ranges[d["type"]][1]
            );
        }
        var v =
            Math.abs(rate[d.name] - rate["MIN_RATE"]) /
            (rate["MAX_RATE"] - rate["MIN_RATE"]);
        if (isNaN(v) || v == -1) {
            return colorRange(0.6);
        }
        return colorRange(v);
    }

    if (d[divide_color_by] in config.color)
        return config.color[d[divide_color_by]];
    else {
        return product_palette[
            Math.floor(d[divide_color_by].charCodeAt() % product_palette.length)
            ];
    }
}

// draw race bar chart (ref: https://github.com/Jannchie/Historical-ranking-data-visualization-based-on-d3.js)
function draw(data) {
    console.log(data)
    var date = [];
    data.forEach(element => {
        if (date.indexOf(element["date"]) == -1) {
            date.push(element["date"]);
        }
    });
    let rate = [];
    var auto_sort = config.auto_sort;
    if (auto_sort) {
        var time = date.sort((x, y) => new Date(x) - new Date(y));
    } else {
        var time = date;
    }
    var use_semilogarithmic_coordinate = config.use_semilogarithmic_coordinate;
    var big_value = config.big_value;
    var divide_by = config.divide_by;
    var divide_color_by = config.divide_color_by;
    var name_list = [];
    var changeable_color = config.changeable_color;
    var divide_changeable_color_by_type = config.divide_changeable_color_by_type;
    data
        .sort((a, b) => Number(b.value) - Number(a.value))
        .forEach(e => {
            if (name_list.indexOf(e.name) == -1) {
                name_list.push(e.name);
            }
        });
    var baseTime = 3000;

    // // 如果用户提供的color_palette 长度不为0 则使用它，否则使用d3.schemeCatetory10
    // var user_pallete = config.color_palette;
    // var product_palette = user_pallete.length !== 0 ? user_pallete : d3.schemeCategory10;
    //
    // // 选择颜色
    // function getColor(d) {
    //     var r = 0.0;
    //     if (changeable_color) {
    //         var colorRange = d3.interpolateCubehelix(
    //             config.color_range[0],
    //             config.color_range[1]
    //         );
    //         if (divide_changeable_color_by_type && d["type"] in config.color_ranges) {
    //             var colorRange = d3.interpolateCubehelix(
    //                 config.color_ranges[d["type"]][0],
    //                 config.color_ranges[d["type"]][1]
    //             );
    //         }
    //         var v =
    //             Math.abs(rate[d.name] - rate["MIN_RATE"]) /
    //             (rate["MAX_RATE"] - rate["MIN_RATE"]);
    //         if (isNaN(v) || v == -1) {
    //             return colorRange(0.6);
    //         }
    //         return colorRange(v);
    //     }
    //
    //     if (d[divide_color_by] in config.color)
    //         return config.color[d[divide_color_by]];
    //     else {
    //         return product_palette[
    //             Math.floor(d[divide_color_by].charCodeAt() % product_palette.length)
    //             ];
    //     }
    // }

    var showMessage = config.showMessage;
    var allow_up = config.allow_up;
    var always_up = config.always_up;
    var interval_time = config.interval_time;
    var text_y = config.text_y;
    var itemLabel = config.itemLabel;
    var typeLabel = config.typeLabel;
    // 长度小于display_barInfo的bar将不显示barInfo
    var display_barInfo = config.display_barInfo;
    // 显示类型
    if (config.use_type_info) {
        var use_type_info = config.use_type_info;
    } else if (divide_by != "name") {
        var use_type_info = true;
    } else {
        var use_type_info = false;
    }
    // 使用计数器
    var use_counter = config.use_counter;
    // 每个数据的间隔日期
    var step = config.step;
    var long = config.long;
    var format = config.format;
    var left_margin = config.left_margin;
    var right_margin = config.right_margin;
    var top_margin = config.top_margin;
    var bottom_margin = config.bottom_margin;
    var timeFormat = config.timeFormat;
    var item_x = config.item_x;
    var max_number = config.max_number;
    var reverse = config.reverse;
    var text_x = config.text_x;
    var offset = config.offset;
    var animation = config.animation;
    var deformat = config.deformat;
    config.imgs = Object.assign(config.imgs, external_imgs);
    config.color = Object.assign(config.color, external_colors);

    const margin = {
        left: left_margin,
        right: right_margin,
        top: top_margin,
        bottom: bottom_margin
    };
    var background_color = config.background_color;

    d3.select("body").attr("style", "background:" + background_color);

    var enter_from_0 = config.enter_from_0;
    interval_time /= 3;
    var lastData = [];
    var currentdate = time[0].toString();
    var currentData = [];
    var lastname;
    const svg = d3.select("svg");

    const width = svg.attr("width");
    const height = svg.attr("height");
    const innerWidth = width - margin.left - margin.right;
    const innerHeight = height - margin.top - margin.bottom - 32;
    //var dateLabel_y = height - margin.top - margin.bottom - 32;;
    const xValue = d => Number(d.value);
    const yValue = d => d.name;

    const g = svg
        .append("g")
        .attr("transform", `translate(${margin.left},${margin.top})`);
    const xAxisG = g
        .append("g")
        .attr("transform", `translate(0, ${innerHeight})`);
    const yAxisG = g.append("g");

    xAxisG
        .append("text")
        .attr("class", "axis-label")
        .attr("x", innerWidth / 2)
        .attr("y", 100);

    var xScale = d3.scaleLinear();
    if (use_semilogarithmic_coordinate) {
        xScale = d3.scalePow().exponent(0.5);
    } else {
        xScale = d3.scaleLinear();
    }
    const yScale = d3
        .scaleBand()
        .paddingInner(0.3)
        .paddingOuter(0);

    const xTicks = 10;
    const xAxis = d3
        .axisBottom()
        .scale(xScale)
        .ticks(xTicks)
        .tickPadding(20)
        .tickFormat(d => {
            if (d <= 0) {
                return "";
            }
            return d3.format(",.0f")(d);
        })
        .tickSize(-innerHeight);

    const yAxis = d3
        .axisLeft()
        .scale(yScale)
        .tickPadding(5)
        .tickSize(-innerWidth);

    var dateLabel_switch = config.dateLabel_switch;
    var dateLabel_x = config.dateLabel_x;
    var dateLabel_y = config.dateLabel_y;
    //dateLabel位置
    if (dateLabel_x == null || dateLabel_y == null) {
        dateLabel_x = innerWidth; //默认
        dateLabel_y = innerHeight; //默认
    } //是否隐藏
    if (dateLabel_switch == false) {
        dateLabel_switch = "hidden";
    } else {
        dateLabel_switch = "visible";
    }

    var dateLabel = g
        .insert("text")
        .data(currentdate)
        .attr("class", "dateLabel")
        .attr("style:visibility", dateLabel_switch)
        .attr("x", dateLabel_x)
        .attr("y", dateLabel_y)
        .attr("text-anchor", function () {
            return "end";
        })
        .text(currentdate);

    var topLabel = g
        .insert("text")
        .attr("class", "topLabel")
        .attr("x", item_x)
        .attr("y", text_y);

    function dataSort() {
        if (reverse) {
            currentData.sort(function (a, b) {
                if (Number(a.value) == Number(b.value)) {
                    var r1 = 0;
                    var r2 = 0;
                    for (let index = 0; index < a.name.length; index++) {
                        r1 = r1 + a.name.charCodeAt(index);
                    }
                    for (let index = 0; index < b.name.length; index++) {
                        r2 = r2 + b.name.charCodeAt(index);
                    }
                    return r2 - r1;
                } else {
                    return Number(a.value) - Number(b.value);
                }
            });
        } else {
            currentData.sort(function (a, b) {
                if (Number(a.value) == Number(b.value)) {
                    var r1 = 0;
                    var r2 = 0;
                    for (let index = 0; index < a.name.length; index++) {
                        r1 = r1 + a.name.charCodeAt(index);
                    }
                    for (let index = 0; index < b.name.length; index++) {
                        r2 = r2 + b.name.charCodeAt(index);
                    }
                    return r2 - r1;
                } else {
                    return Number(b.value) - Number(a.value);
                }
            });
        }
    }

    function getCurrentData(date) {
        rate = [];
        currentData = [];
        indexList = [];

        data.forEach(element => {
            if (element["date"] == date && parseFloat(element["value"]) != 0) {
                if (element.name.length > config.bar_name_max) {
                    tail = "...";
                } else {
                    tail = "";
                }
                element.name = element.name.slice(0, config.bar_name_max - 1) + tail;
                currentData.push(element);
            }
        });

        rate["MAX_RATE"] = 0;
        rate["MIN_RATE"] = 1;
        currentData.forEach(e => {
            _cName = e.name;
            lastData.forEach(el => {
                if (el.name == e.name) {
                    rate[e.name] = Number(Number(e.value) - Number(el.value));
                }
            });
            if (rate[e.name] == undefined) {
                rate[e.name] = rate["MIN_RATE"];
            }
            if (rate[e.name] > rate["MAX_RATE"]) {
                rate["MAX_RATE"] = rate[e.name];
            } else if (rate[e.name] < rate["MIN_RATE"]) {
                rate["MIN_RATE"] = rate[e.name];
            }
        });

        // sort and pick the top max_number data
        dataSort();
        currentData = currentData.slice(0, max_number);

        d3.transition("2")
            .each(redraw)
            .each(change);
        lastData = currentData;
    }

    if (showMessage) {
        // 左1文字
        var topInfo = g
            .insert("text")
            .attr("class", "growth")
            .attr("x", -50)
            .attr("y", text_y)
            .text('State');

        // 右1文字
        g.insert("text")
            .attr("class", "growth")
            .attr("x", text_x - 200)
            .attr("y", text_y)
            .text('Accident number');

        // 榜首日期计数
        if (use_counter == true) {
            var days = g
                .insert("text")
                .attr("class", "days")
                .attr("x", text_x + offset)
                .attr("y", text_y);
        } else {
            // 显示榜首type
            if (use_type_info == true) {
                var top_type = g
                    .insert("text")
                    .attr("class", "days")
                    .attr("x", text_x + offset)
                    .attr("y", text_y);
            }
        }
    }

    var lastname;
    var counter = {
        value: 1
    };

    var avg = 0;
    var enter_from_now = true;

    function redraw() {
        if (currentData.length == 0) return;
        // yScale
        //     .domain(currentData.map(d => d.name).reverse())
        //     .range([innerHeight, 0]);
        // x轴范围
        // 如果所有数字很大导致拉不开差距

        if (big_value) {
            xScale
                .domain([
                    2 * d3.min(currentData, xValue) - d3.max(currentData, xValue),
                    d3.max(currentData, xValue) + 10
                ])
                .range([0, innerWidth]);
        } else {
            xScale
                .domain([0, d3.max(currentData, xValue) + 1])
                .range([0, innerWidth]);
        }
        if (auto_sort) {
            dateLabel
                .data(currentData)
                .transition()
                .duration(baseTime * interval_time)
                .ease(d3.easeLinear)
                .tween("text", function (d) {
                    var self = this;
                    var i = d3.interpolateDate(
                        new Date(self.textContent),
                        new Date(d.date)
                    );
                    // var prec = (new Date(d.date) + "").split(".");
                    // var round = (prec.length > 1) ? Math.pow(10, prec[1].length) : 1;
                    return function (t) {
                        var dateformat = d3.timeFormat(timeFormat);
                        self.textContent = dateformat(i(t));
                    };
                });
        } else {
            dateLabel.text(currentdate);
        }

        xAxisG
            .transition()
            .duration(baseTime * interval_time)
            .ease(d3.easeLinear)
            .call(xAxis);
        yAxisG
            .transition()
            .duration(baseTime * interval_time)
            .ease(d3.easeLinear)
            .call(yAxis);

        yAxisG.selectAll(".tick").remove();
        if (!config.show_x_tick) {
            xAxisG.selectAll(".tick").remove();
        }

        yScale
            .domain(currentData.map(d => d.name).reverse())
            .range([innerHeight, 0]);

        var bar = g.selectAll(".bar").data(currentData, function (d) {
            return d.name;
        });

        if (showMessage) {
            // 榜首文字
            topLabel.data(currentData).text(function (d) {
                if (lastname == d.name) {
                    counter.value = counter.value + step;
                } else {
                    counter.value = 1;
                }
                lastname = d.name;
                if (d.name.length > 24) return d.name.slice(0, 23) + "...";
                return d.name;
            });
            if (use_counter == true) {
                // 榜首持续时间更新
                days
                    .data(currentData)
                    .transition()
                    .duration(baseTime * interval_time)
                    .ease(d3.easeLinear)
                    .tween("text", function (d) {
                        var self = this;
                        var i = d3.interpolate(self.textContent, counter.value),
                            prec = (counter.value + "").split("."),
                            round = prec.length > 1 ? Math.pow(10, prec[1].length) : 1;

                        return function (t) {
                            self.textContent = d3.format(format)(
                                Math.round(i(t) * round) / round
                            );
                        };
                    });
            } else if (use_type_info == true) {
                // 榜首type更新
                top_type.data(currentData).text(function (d) {
                    return d["type"];
                });
            }
        }

        var barEnter = bar
            .enter()
            .insert("g", ".axis")
            .attr("class", "bar")
            .attr("transform", function (d) {
                return "translate(0," + yScale(yValue(d)) + ")";
            });

        barEnter
            .append("rect")
            .attr("width", function (d) {
                if (enter_from_0) {
                    return 0;
                } else {
                    return xScale(currentData[currentData.length - 1].value);
                }
            })
            .attr("fill-opacity", 0)
            .attr("height", 26)
            .attr("y", 50)
            .style("fill", d => getColor(d))
            .transition("a")
            .delay(500 * interval_time)
            .duration(2490 * interval_time)
            .attr("y", 0)
            .attr("width", d => xScale(xValue(d)))
            .attr("fill-opacity", 1);

        if (config.rounded_rectangle) {
            d3.selectAll("rect").attr("rx", 13);
        }
        if (config.showLabel == true) {
            barEnter
                .append("text")
                .attr("y", 50)
                .attr("fill-opacity", 0)
                .style("fill", d => getColor(d))
                .transition("2")
                .delay(500 * interval_time)
                .duration(2490 * interval_time)
                .attr("fill-opacity", 1)
                .attr("y", 0)
                .attr("class", function (d) {
                    return "label ";
                })
                .attr("x", config.labelx)
                .attr("y", 20)
                .attr("text-anchor", "end")
                .text(function (d) {
                    if (long) {
                        return "";
                    }
                    return d.name;
                });
        }

        if (config.use_img) {
            barEnter
                .append("defs")
                .append("pattern")
                .attr("id", d => d.name)
                .attr("width", "100%")
                .attr("height", "100%")
                .append("image")
                .attr("x", "0")
                .attr("y", "0")
                .attr("width", "40")
                .attr("height", "40")
                .attr("href", d => config.imgs[d.name]);

            barEnter
                .append("circle")
                .attr("fill-opacity", 0)
                .attr("cy", 63)
                .attr(
                    "fill",
                    d =>
                        "url(#" +
                        encodeURIComponent(d.name)
                            .replace("'", "%27")
                            .replace("(", "%28")
                            .replace(")", "%29") +
                        ")"
                )
                .attr("stroke-width", "0px")
                .transition("a")
                .delay(500 * interval_time)
                .duration(2490 * interval_time)
                // .attr("stroke", d => getColor(d))
                // .attr("paint-order", "stroke")
                .attr("x", -16)
                .attr("cx", d => xScale(xValue(d)) - 20)
                .attr("cy", 13)
                .attr("r", 40 / 2)
                .attr("fill-opacity", 1);
        }
        // bar上文字
        var barInfo = barEnter
            .append("text")
            .attr("x", function (d) {
                if (long) return 10;
                if (enter_from_0) {
                    return 0;
                } else {
                    return xScale(currentData[currentData.length - 1].value);
                }
            })
            .attr("stroke", d => getColor(d))
            .attr("class", function () {
                return "barInfo";
            })
            .attr("y", 50)
            .attr("stroke-width", "0px")
            .attr("fill-opacity", 0)
            .transition()
            .delay(500 * interval_time)
            .duration(2490 * interval_time)
            .text(function (d) {
                if (use_type_info) {
                    return d[divide_by] + "-" + d.name;
                }
                return d.name;
            })
            .attr("x", d => {
                if (long) return 10;
                return xScale(xValue(d)) - 40;
            })
            .attr("fill-opacity", function (d) {
                if (xScale(xValue(d)) - 40 < display_barInfo) {
                    return 0;
                }
                return 1;
            })
            .attr("y", 2)
            .attr("dy", ".5em")
            .attr("text-anchor", function () {
                if (long) return "start";
                return "end";
            })
            .attr("stroke-width", function (d) {
                if (xScale(xValue(d)) - 40 < display_barInfo) {
                    return "0px";
                }
                return "4px";
            })
            .attr("paint-order", "stroke");
        if (long) {
            barInfo.tween("text", function (d) {
                var self = this;
                self.textContent = d.value;
                var i = d3.interpolate(self.textContent, Number(d.value)),
                    prec = (Number(d.value) + "").split("."),
                    round = prec.length > 1 ? Math.pow(10, prec[1].length) : 1;
                return function (t) {
                    self.textContent =
                        d[divide_by] +
                        "-" +
                        d.name +
                        "  数值:" +
                        d3.format(format)(Math.round(i(t) * round) / round);
                };
            });
        }
        if (!long) {
            barEnter
                .append("text")
                .attr("x", function () {
                    if (long) {
                        return 10;
                    }
                    if (enter_from_0) {
                        return 0;
                    } else {
                        return xScale(currentData[currentData.length - 1].value);
                    }
                })
                .attr("y", 50)
                .attr("fill-opacity", 0)
                .style("fill", d => getColor(d))
                .transition()
                .duration(2990 * interval_time)
                .tween("text", function (d) {
                    var self = this;
                    // 初始值为d.value的0.9倍
                    self.textContent = d.value * 0.9;
                    var i = d3.interpolate(self.textContent, Number(d.value)),
                        prec = (Number(d.value) + "").split("."),
                        round = prec.length > 1 ? Math.pow(10, prec[1].length) : 1;
                    // d.value = self.textContent
                    return function (t) {
                        self.textContent =
                            d3.format(format)(Math.round(i(t) * round) / round) +
                            config.postfix;
                        // d.value = self.textContent
                    };
                })
                .attr("fill-opacity", 1)
                .attr("y", 0)
                .attr("class", function (d) {
                    return "value";
                })
                .attr("x", d => {
                    return xScale(xValue(d)) + 10;
                })
                .attr("y", 22);
        }
        var barUpdate = bar
            .transition("2")
            .duration(2990 * interval_time)
            .ease(d3.easeLinear);

        barUpdate
            .select("rect")
            .style("fill", d => getColor(d))
            .attr("width", d => xScale(xValue(d)));
        if (config.showLabel == true) {
            barUpdate
                .select(".label")
                .attr("class", function (d) {
                    return "label ";
                })
                .style("fill", d => getColor(d))
                .attr("width", d => xScale(xValue(d)));
        }

        if (!long) {
            barUpdate
                .select(".value")
                .attr("class", function (d) {
                    return "value";
                })
                .style("fill", d => getColor(d))
                .attr("width", d => xScale(xValue(d)));
        }
        barUpdate.select(".barInfo").attr("stroke", function (d) {
            return getColor(d);
        });

        if (config.use_img) {
            barUpdate
                .select("circle")
                .attr("stroke", function (d) {
                    return getColor(d);
                })
                .attr("cx", d => xScale(xValue(d)) - 20);
        }

        var barInfo = barUpdate
            .select(".barInfo")
            .text(function (d) {
                if (use_type_info) {
                    return d[divide_by] + "-" + d.name;
                }
                return d.name;
            })
            .attr("x", d => {
                if (long) return 10;
                return xScale(xValue(d)) - 40;
            })
            .attr("fill-opacity", function (d) {
                if (xScale(xValue(d)) - 40 < display_barInfo) {
                    return 0;
                }
                return 1;
            })
            .attr("stroke-width", function (d) {
                if (xScale(xValue(d)) - 40 < display_barInfo) {
                    return "0px";
                }
                return "4px";
            })
            .attr("paint-order", "stroke");

        if (long) {
            barInfo.tween("text", function (d) {
                var self = this;
                var str = d[divide_by] + "-" + d.name + "  数值:";

                var i = d3.interpolate(
                        self.textContent.slice(str.length, 99),
                        Number(d.value)
                    ),
                    prec = (Number(d.value) + "").split("."),
                    round = prec.length > 1 ? Math.pow(10, prec[1].length) : 1;
                return function (t) {
                    self.textContent =
                        d[divide_by] +
                        "-" +
                        d.name +
                        "  数值:" +
                        d3.format(format)(Math.round(i(t) * round) / round);
                };
            });
        }
        if (!long) {
            barUpdate
                .select(".value")
                .tween("text", function (d) {
                    var self = this;

                    // if postfix is blank, do not slice.
                    if (config.postfix == "") {
                        var i = d3.interpolate(self.textContent, Number(d.value));
                    } else {
                        var i = d3.interpolate(
                            self.textContent.slice(0, -config.postfix.length),
                            Number(d.value)
                        );
                    }

                    var i = d3.interpolate(
                        deformat(self.textContent, config.postfix),
                        Number(d.value)
                    );

                    var prec = (Number(d.value) + "").split("."),
                        round = prec.length > 1 ? Math.pow(10, prec[1].length) : 1;
                    // d.value = self.textContent
                    return function (t) {
                        self.textContent =
                            d3.format(format)(Math.round(i(t) * round) / round) +
                            config.postfix;
                        // d.value = self.textContent
                    };
                })
                .duration(2990 * interval_time)
                .attr("x", d => xScale(xValue(d)) + 10);
        }
        avg =
            (Number(currentData[0]["value"]) +
                Number(currentData[currentData.length - 1]["value"])) /
            2;

        var barExit = bar
            .exit()
            .attr("fill-opacity", 1)
            .transition()
            .duration(2500 * interval_time);
        barExit
            .attr("transform", function (d) {
                if (always_up) {
                    return "translate(0," + "-100" + ")";
                }
                if (Number(d.value) > avg && allow_up) {
                    return "translate(0," + "-100" + ")";
                }
                return "translate(0," + "1000" + ")";
            })
            .remove()
            .attr("fill-opacity", 0);
        barExit
            .select("rect")
            .attr("fill-opacity", 0)
            .attr("width", () => {
                if (always_up) return xScale(0);
                return xScale(currentData[currentData.length - 1]["value"]);
            });
        if (!long) {
            barExit
                .select(".value")
                .attr("fill-opacity", 0)
                .attr("x", () => {
                    if (always_up) return xScale(0);
                    return xScale(currentData[currentData.length - 1]["value"]);
                });
        }
        barExit
            .select(".barInfo")
            .attr("fill-opacity", 0)
            .attr("stroke-width", function (d) {
                return "0px";
            })
            .attr("x", () => {
                if (long) return 10;
                if (always_up) return xScale(0);
                return xScale(currentData[currentData.length - 1]["value"]);
            });
        barExit.select(".label").attr("fill-opacity", 0);
        if (config.use_img) {
            barExit.select("circle").attr("fill-opacity", 0);
        }
    }

    function change() {
        yScale
            .domain(currentData.map(d => d.name).reverse())
            .range([innerHeight, 0]);
        if (animation == "linear") {
            g.selectAll(".bar")
                .data(currentData, function (d) {
                    return d.name;
                })
                .transition("1")
                .ease(d3.easeLinear)
                .duration(baseTime * update_rate * interval_time)
                .attr("transform", function (d) {
                    return "translate(0," + yScale(yValue(d)) + ")";
                });
        } else {
            g.selectAll(".bar")
                .data(currentData, function (d) {
                    return d.name;
                })
                .transition("1")
                .duration(baseTime * update_rate * interval_time)
                .attr("transform", function (d) {
                    return "translate(0," + yScale(yValue(d)) + ")";
                });
        }
    }

    var i = 0;
    var p = config.wait;
    var update_rate = config.update_rate;
    var inter = setInterval(function next() {
        // 空过p回合
        while (p) {
            p -= 1;
            return;
        }
        currentdate = time[i];
        getCurrentData(time[i]);
        i++;

        if (i >= time.length) {
            window.clearInterval(inter);
        }
    }, baseTime * interval_time);
    // setInterval(() => {
    //     d3.transition()
    //         .each(change)
    // }, baseTime * update_rate * interval_time)
}









