var Module=typeof pyodide._module!=="undefined"?pyodide._module:{};if(!Module.expectedDataFileDownloads){Module.expectedDataFileDownloads=0}Module.expectedDataFileDownloads++;(function(){var loadPackage=function(metadata){var PACKAGE_PATH;if(typeof window==="object"){PACKAGE_PATH=window["encodeURIComponent"](window.location.pathname.toString().substring(0,window.location.pathname.toString().lastIndexOf("/"))+"/")}else if(typeof location!=="undefined"){PACKAGE_PATH=encodeURIComponent(location.pathname.toString().substring(0,location.pathname.toString().lastIndexOf("/"))+"/")}else{throw"using preloaded data can only be done on a web page or in a web worker"}var PACKAGE_NAME="mpmath.data";var REMOTE_PACKAGE_BASE="mpmath.data";if(typeof Module["locateFilePackage"]==="function"&&!Module["locateFile"]){Module["locateFile"]=Module["locateFilePackage"];err("warning: you defined Module.locateFilePackage, that has been renamed to Module.locateFile (using your locateFilePackage for now)")}var REMOTE_PACKAGE_NAME=Module["locateFile"]?Module["locateFile"](REMOTE_PACKAGE_BASE,""):REMOTE_PACKAGE_BASE;var REMOTE_PACKAGE_SIZE=metadata["remote_package_size"];var PACKAGE_UUID=metadata["package_uuid"];function fetchRemotePackage(packageName,packageSize,callback,errback){var xhr=new XMLHttpRequest;xhr.open("GET",packageName,true);xhr.responseType="arraybuffer";xhr.onprogress=function(event){var url=packageName;var size=packageSize;if(event.total)size=event.total;if(event.loaded){if(!xhr.addedTotal){xhr.addedTotal=true;if(!Module.dataFileDownloads)Module.dataFileDownloads={};Module.dataFileDownloads[url]={loaded:event.loaded,total:size}}else{Module.dataFileDownloads[url].loaded=event.loaded}var total=0;var loaded=0;var num=0;for(var download in Module.dataFileDownloads){var data=Module.dataFileDownloads[download];total+=data.total;loaded+=data.loaded;num++}total=Math.ceil(total*Module.expectedDataFileDownloads/num);if(Module["setStatus"])Module["setStatus"]("Downloading data... ("+loaded+"/"+total+")")}else if(!Module.dataFileDownloads){if(Module["setStatus"])Module["setStatus"]("Downloading data...")}};xhr.onerror=function(event){throw new Error("NetworkError for: "+packageName)};xhr.onload=function(event){if(xhr.status==200||xhr.status==304||xhr.status==206||xhr.status==0&&xhr.response){var packageData=xhr.response;callback(packageData)}else{throw new Error(xhr.statusText+" : "+xhr.responseURL)}};xhr.send(null)}function handleError(error){console.error("package error:",error)}var fetchedCallback=null;var fetched=Module["getPreloadedPackage"]?Module["getPreloadedPackage"](REMOTE_PACKAGE_NAME,REMOTE_PACKAGE_SIZE):null;if(!fetched)fetchRemotePackage(REMOTE_PACKAGE_NAME,REMOTE_PACKAGE_SIZE,function(data){if(fetchedCallback){fetchedCallback(data);fetchedCallback=null}else{fetched=data}},handleError);function runWithFS(){function assert(check,msg){if(!check)throw msg+(new Error).stack}Module["FS_createPath"]("/","lib",true,true);Module["FS_createPath"]("/lib","python3.8",true,true);Module["FS_createPath"]("/lib/python3.8","site-packages",true,true);Module["FS_createPath"]("/lib/python3.8/site-packages","mpmath",true,true);Module["FS_createPath"]("/lib/python3.8/site-packages/mpmath","matrices",true,true);Module["FS_createPath"]("/lib/python3.8/site-packages/mpmath","libmp",true,true);Module["FS_createPath"]("/lib/python3.8/site-packages/mpmath","tests",true,true);Module["FS_createPath"]("/lib/python3.8/site-packages/mpmath","calculus",true,true);Module["FS_createPath"]("/lib/python3.8/site-packages/mpmath","functions",true,true);function processPackageData(arrayBuffer){assert(arrayBuffer,"Loading data file failed.");assert(arrayBuffer instanceof ArrayBuffer,"bad input to processPackageData");var byteArray=new Uint8Array(arrayBuffer);var curr;var compressedData={data:null,cachedOffset:1106107,cachedIndexes:[-1,-1],cachedChunks:[null,null],offsets:[0,1311,2276,3500,4657,5832,7058,8260,9419,11058,12424,13433,14178,14745,15604,16440,17423,18511,19504,20824,21900,23023,24143,25236,26419,27455,28620,29721,30815,31909,32990,33966,35159,36289,37232,38222,39511,40645,41744,42784,43502,44630,46027,47239,48700,49814,51047,52476,53827,55089,56040,57429,58675,60098,61410,62683,64138,65646,66932,68172,69616,70950,72348,73743,74884,76214,77400,78837,80099,81348,82373,83636,84713,85959,87133,88739,90190,91372,92762,94009,95353,96746,98171,99694,101183,102661,104050,105555,106884,108279,109724,110880,112348,113815,115310,116887,118146,119725,121170,122498,124008,125331,126849,128337,129850,131227,132559,133957,135238,136478,137806,139227,140586,142099,143371,144516,145898,147351,148548,150022,151305,152603,153952,155399,156897,158290,159655,161100,162504,163848,165267,166657,168069,169563,170931,172212,173489,174916,176003,177406,178838,180344,181704,183087,184528,185681,187052,188508,190030,191644,193060,194580,196052,197402,198895,200335,201762,203039,204441,205388,206712,208102,209489,210832,212276,213733,215035,216289,217759,218922,220326,221779,222984,224305,225614,226883,228379,229743,231254,232627,234097,235425,236979,238276,239460,240847,242037,243437,244854,246e3,247412,248741,250092,251547,252719,253655,254423,255525,256384,257557,258407,258919,259816,260960,261978,262857,264047,264999,265945,267070,268099,269260,270675,272046,272905,273356,274701,275717,276580,277556,278590,279429,280414,281375,282736,284013,285044,286520,287926,289056,290468,291423,292546,293843,295110,296354,297575,298978,300059,301146,302302,303231,304455,305546,306487,307497,308589,310016,311079,312405,313785,314871,316080,317373,318483,319739,320936,322154,323304,324575,325848,327035,328194,329416,330457,331386,332329,333326,334238,335164,335993,337145,338380,339703,341130,342491,343623,344818,345944,347221,348406,349508,350599,351985,353095,353826,354739,355836,357228,358337,359661,360743,362001,363309,364456,365722,367015,368320,369477,370627,371676,373033,373898,374776,375738,376942,378288,378999,379817,380839,381755,382885,384096,385282,386584,387822,388725,389424,390594,391436,392546,393643,394789,395996,397057,397958,399133,400143,401029,402436,403645,405011,406481,407587,408807,410178,411271,412719,413917,415118,416424,417703,418897,419921,421159,422354,423573,424720,425786,426691,428119,429207,430370,431855,433074,434244,435574,437040,438298,439317,440205,441285,442441,443595,444873,445956,446669,447951,449052,449972,451113,452430,453884,454846,455697,456806,457942,459321,460503,461374,462335,463272,464268,465547,466737,467945,469001,470237,471185,472465,473623,474815,476080,477393,478553,479866,481292,482833,484160,485636,486813,488206,489484,490857,492218,493428,494698,495875,497379,498743,500030,501309,502559,503791,505080,506332,507614,508825,510010,510801,512161,513361,514571,515667,516564,517861,518926,519887,520988,522247,523273,524561,525680,526810,528116,529286,530633,531761,532794,533819,535031,536098,537474,538636,539832,540539,541811,542733,543881,545095,546346,547534,548970,550084,551490,552650,553829,555115,556357,557548,558524,560494,561503,562745,564440,565640,566745,567615,568574,569327,570254,571369,572181,573271,574199,574995,575761,576932,577753,578742,579139,579878,580700,582301,584152,585992,587469,588810,589895,590827,591493,592029,592888,593879,594676,595602,596693,597926,599198,600295,601570,602496,604145,605302,605928,606901,607850,608778,609527,610833,611769,612488,613578,614596,615394,616164,616693,617373,618246,619253,620402,621483,622733,623903,625146,626352,627590,628408,629256,630070,631130,632037,633365,634701,636084,637345,638465,639437,640368,641363,642555,643383,644556,645041,646109,646941,648089,649136,650277,651496,652486,653253,654073,655277,656512,657412,659068,660887,662704,664502,666334,668176,669981,671801,673616,675431,676714,678108,678947,680028,681304,681868,682975,684108,685078,686075,687203,688659,690343,691860,692769,693311,694079,694903,695877,696933,698505,699903,701039,701980,703004,704211,704982,705940,706894,707778,708582,709736,710453,711583,712759,713655,714822,716046,716661,717482,718560,719608,720837,721777,722314,723436,724675,725796,726851,727811,728984,730153,730828,731673,732522,733402,734253,735111,735996,736826,737341,737911,738769,739628,740504,741342,742235,743100,743974,744842,745505,746391,747261,748148,748976,749810,750587,751301,751944,752754,753574,754385,755161,756013,756890,757772,758691,759556,760167,761320,762457,763591,764563,765771,767080,768077,769126,770370,771598,772876,774074,775245,776408,777760,779004,780374,781619,782677,783707,784891,786056,787323,788518,789668,791112,792408,793887,795268,796613,797793,799031,800170,801465,802596,803745,804996,806193,807710,809044,810475,811828,813119,814445,815656,816850,818044,818917,820244,821536,822819,823974,825413,826938,828385,829784,831166,832597,833989,835042,836356,837618,838667,839498,840771,841960,842984,844429,845964,847259,848430,849464,850353,851809,853270,854699,855836,857130,858413,859625,860704,861990,863018,864406,865503,866825,868309,869632,871075,872568,874029,875367,876599,877980,879331,880632,881941,883274,884571,885977,887294,888699,890102,891409,892649,893987,895244,896610,897967,899381,900715,902063,903189,904598,905978,907326,908611,909848,911276,912661,914027,915387,916626,917994,919034,920195,921258,922355,923422,924500,925770,926782,927936,928998,930062,930786,931990,933007,934099,935039,936090,937289,938432,939764,940851,942181,943406,944630,945878,947176,948605,949712,950976,952188,953466,954819,955861,956913,957698,958550,959766,961187,962556,963938,965055,966110,967400,968674,969893,971094,972220,973600,974570,975429,976587,977890,979170,980392,981730,982847,984239,985473,986721,988073,989377,990716,991952,993308,994494,995551,996866,997961,999329,1000918,1002173,1003197,1004347,1005281,1006363,1007592,1008930,1010102,1011234,1012537,1013943,1015298,1016666,1018063,1019159,1020495,1021745,1023174,1024407,1025788,1027005,1027834,1028787,1029625,1030585,1031468,1032398,1033420,1034446,1035262,1036109,1037156,1038081,1039012,1040047,1040854,1041891,1042609,1043436,1044622,1045714,1046572,1047622,1048547,1049629,1050927,1052201,1053697,1054811,1055766,1056980,1058172,1059349,1060460,1061668,1062694,1063927,1064868,1066073,1067215,1068175,1069247,1070414,1071803,1073069,1074143,1075534,1076335,1077726,1078994,1080281,1081569,1083039,1084194,1085379,1086519,1087648,1088799,1089998,1090916,1092067,1093196,1094346,1095375,1096526,1097404,1098272,1099502,1100647,1101626,1102841,1104095,1105398],sizes:[1311,965,1224,1157,1175,1226,1202,1159,1639,1366,1009,745,567,859,836,983,1088,993,1320,1076,1123,1120,1093,1183,1036,1165,1101,1094,1094,1081,976,1193,1130,943,990,1289,1134,1099,1040,718,1128,1397,1212,1461,1114,1233,1429,1351,1262,951,1389,1246,1423,1312,1273,1455,1508,1286,1240,1444,1334,1398,1395,1141,1330,1186,1437,1262,1249,1025,1263,1077,1246,1174,1606,1451,1182,1390,1247,1344,1393,1425,1523,1489,1478,1389,1505,1329,1395,1445,1156,1468,1467,1495,1577,1259,1579,1445,1328,1510,1323,1518,1488,1513,1377,1332,1398,1281,1240,1328,1421,1359,1513,1272,1145,1382,1453,1197,1474,1283,1298,1349,1447,1498,1393,1365,1445,1404,1344,1419,1390,1412,1494,1368,1281,1277,1427,1087,1403,1432,1506,1360,1383,1441,1153,1371,1456,1522,1614,1416,1520,1472,1350,1493,1440,1427,1277,1402,947,1324,1390,1387,1343,1444,1457,1302,1254,1470,1163,1404,1453,1205,1321,1309,1269,1496,1364,1511,1373,1470,1328,1554,1297,1184,1387,1190,1400,1417,1146,1412,1329,1351,1455,1172,936,768,1102,859,1173,850,512,897,1144,1018,879,1190,952,946,1125,1029,1161,1415,1371,859,451,1345,1016,863,976,1034,839,985,961,1361,1277,1031,1476,1406,1130,1412,955,1123,1297,1267,1244,1221,1403,1081,1087,1156,929,1224,1091,941,1010,1092,1427,1063,1326,1380,1086,1209,1293,1110,1256,1197,1218,1150,1271,1273,1187,1159,1222,1041,929,943,997,912,926,829,1152,1235,1323,1427,1361,1132,1195,1126,1277,1185,1102,1091,1386,1110,731,913,1097,1392,1109,1324,1082,1258,1308,1147,1266,1293,1305,1157,1150,1049,1357,865,878,962,1204,1346,711,818,1022,916,1130,1211,1186,1302,1238,903,699,1170,842,1110,1097,1146,1207,1061,901,1175,1010,886,1407,1209,1366,1470,1106,1220,1371,1093,1448,1198,1201,1306,1279,1194,1024,1238,1195,1219,1147,1066,905,1428,1088,1163,1485,1219,1170,1330,1466,1258,1019,888,1080,1156,1154,1278,1083,713,1282,1101,920,1141,1317,1454,962,851,1109,1136,1379,1182,871,961,937,996,1279,1190,1208,1056,1236,948,1280,1158,1192,1265,1313,1160,1313,1426,1541,1327,1476,1177,1393,1278,1373,1361,1210,1270,1177,1504,1364,1287,1279,1250,1232,1289,1252,1282,1211,1185,791,1360,1200,1210,1096,897,1297,1065,961,1101,1259,1026,1288,1119,1130,1306,1170,1347,1128,1033,1025,1212,1067,1376,1162,1196,707,1272,922,1148,1214,1251,1188,1436,1114,1406,1160,1179,1286,1242,1191,976,1970,1009,1242,1695,1200,1105,870,959,753,927,1115,812,1090,928,796,766,1171,821,989,397,739,822,1601,1851,1840,1477,1341,1085,932,666,536,859,991,797,926,1091,1233,1272,1097,1275,926,1649,1157,626,973,949,928,749,1306,936,719,1090,1018,798,770,529,680,873,1007,1149,1081,1250,1170,1243,1206,1238,818,848,814,1060,907,1328,1336,1383,1261,1120,972,931,995,1192,828,1173,485,1068,832,1148,1047,1141,1219,990,767,820,1204,1235,900,1656,1819,1817,1798,1832,1842,1805,1820,1815,1815,1283,1394,839,1081,1276,564,1107,1133,970,997,1128,1456,1684,1517,909,542,768,824,974,1056,1572,1398,1136,941,1024,1207,771,958,954,884,804,1154,717,1130,1176,896,1167,1224,615,821,1078,1048,1229,940,537,1122,1239,1121,1055,960,1173,1169,675,845,849,880,851,858,885,830,515,570,858,859,876,838,893,865,874,868,663,886,870,887,828,834,777,714,643,810,820,811,776,852,877,882,919,865,611,1153,1137,1134,972,1208,1309,997,1049,1244,1228,1278,1198,1171,1163,1352,1244,1370,1245,1058,1030,1184,1165,1267,1195,1150,1444,1296,1479,1381,1345,1180,1238,1139,1295,1131,1149,1251,1197,1517,1334,1431,1353,1291,1326,1211,1194,1194,873,1327,1292,1283,1155,1439,1525,1447,1399,1382,1431,1392,1053,1314,1262,1049,831,1273,1189,1024,1445,1535,1295,1171,1034,889,1456,1461,1429,1137,1294,1283,1212,1079,1286,1028,1388,1097,1322,1484,1323,1443,1493,1461,1338,1232,1381,1351,1301,1309,1333,1297,1406,1317,1405,1403,1307,1240,1338,1257,1366,1357,1414,1334,1348,1126,1409,1380,1348,1285,1237,1428,1385,1366,1360,1239,1368,1040,1161,1063,1097,1067,1078,1270,1012,1154,1062,1064,724,1204,1017,1092,940,1051,1199,1143,1332,1087,1330,1225,1224,1248,1298,1429,1107,1264,1212,1278,1353,1042,1052,785,852,1216,1421,1369,1382,1117,1055,1290,1274,1219,1201,1126,1380,970,859,1158,1303,1280,1222,1338,1117,1392,1234,1248,1352,1304,1339,1236,1356,1186,1057,1315,1095,1368,1589,1255,1024,1150,934,1082,1229,1338,1172,1132,1303,1406,1355,1368,1397,1096,1336,1250,1429,1233,1381,1217,829,953,838,960,883,930,1022,1026,816,847,1047,925,931,1035,807,1037,718,827,1186,1092,858,1050,925,1082,1298,1274,1496,1114,955,1214,1192,1177,1111,1208,1026,1233,941,1205,1142,960,1072,1167,1389,1266,1074,1391,801,1391,1268,1287,1288,1470,1155,1185,1140,1129,1151,1199,918,1151,1129,1150,1029,1151,878,868,1230,1145,979,1215,1254,1303,709],successes:[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]};compressedData["data"]=byteArray;assert(typeof Module.LZ4==="object","LZ4 not present - was your app build with  -s LZ4=1  ?");Module.LZ4.loadPackage({metadata:metadata,compressedData:compressedData},true);Module["removeRunDependency"]("datafile_mpmath.data")}Module["addRunDependency"]("datafile_mpmath.data");if(!Module.preloadResults)Module.preloadResults={};Module.preloadResults[PACKAGE_NAME]={fromCache:false};if(fetched){processPackageData(fetched);fetched=null}else{fetchedCallback=processPackageData}}if(Module["calledRun"]){runWithFS()}else{if(!Module["preRun"])Module["preRun"]=[];Module["preRun"].push(runWithFS)}};loadPackage({files:[{filename:"/lib/python3.8/site-packages/mpmath-1.1.0-py3.8.egg-info",start:0,end:332,audio:0},{filename:"/lib/python3.8/site-packages/mpmath/math2.py",start:332,end:18893,audio:0},{filename:"/lib/python3.8/site-packages/mpmath/ctx_mp.py",start:18893,end:68565,audio:0},{filename:"/lib/python3.8/site-packages/mpmath/ctx_base.py",start:68565,end:84550,audio:0},{filename:"/lib/python3.8/site-packages/mpmath/identification.py",start:84550,end:113820,audio:0},{filename:"/lib/python3.8/site-packages/mpmath/function_docs.py",start:113820,end:394286,audio:0},{filename:"/lib/python3.8/site-packages/mpmath/ctx_mp_python.py",start:394286,end:432399,audio:0},{filename:"/lib/python3.8/site-packages/mpmath/usertools.py",start:432399,end:435428,audio:0},{filename:"/lib/python3.8/site-packages/mpmath/rational.py",start:435428,end:441398,audio:0},{filename:"/lib/python3.8/site-packages/mpmath/ctx_iv.py",start:441398,end:458196,audio:0},{filename:"/lib/python3.8/site-packages/mpmath/visualization.py",start:458196,end:468823,audio:0},{filename:"/lib/python3.8/site-packages/mpmath/ctx_fp.py",start:468823,end:475395,audio:0},{filename:"/lib/python3.8/site-packages/mpmath/__init__.py",start:475395,end:483995,audio:0},{filename:"/lib/python3.8/site-packages/mpmath/matrices/calculus.py",start:483995,end:502604,audio:0},{filename:"/lib/python3.8/site-packages/mpmath/matrices/eigen.py",start:502604,end:526986,audio:0},{filename:"/lib/python3.8/site-packages/mpmath/matrices/matrices.py",start:526986,end:558581,audio:0},{filename:"/lib/python3.8/site-packages/mpmath/matrices/linalg.py",start:558581,end:585601,audio:0},{filename:"/lib/python3.8/site-packages/mpmath/matrices/eigen_symmetric.py",start:585601,end:644125,audio:0},{filename:"/lib/python3.8/site-packages/mpmath/matrices/__init__.py",start:644125,end:644219,audio:0},{filename:"/lib/python3.8/site-packages/mpmath/libmp/libmpi.py",start:644219,end:671841,audio:0},{filename:"/lib/python3.8/site-packages/mpmath/libmp/libelefun.py",start:671841,end:715702,audio:0},{filename:"/lib/python3.8/site-packages/mpmath/libmp/libintmath.py",start:715702,end:732164,audio:0},{filename:"/lib/python3.8/site-packages/mpmath/libmp/libmpc.py",start:732164,end:759033,audio:0},{filename:"/lib/python3.8/site-packages/mpmath/libmp/six.py",start:759033,end:770888,audio:0},{filename:"/lib/python3.8/site-packages/mpmath/libmp/libhyper.py",start:770888,end:807512,audio:0},{filename:"/lib/python3.8/site-packages/mpmath/libmp/gammazeta.py",start:807512,end:886438,audio:0},{filename:"/lib/python3.8/site-packages/mpmath/libmp/libmpf.py",start:886438,end:931454,audio:0},{filename:"/lib/python3.8/site-packages/mpmath/libmp/backend.py",start:931454,end:934311,audio:0},{filename:"/lib/python3.8/site-packages/mpmath/libmp/__init__.py",start:934311,end:938171,audio:0},{filename:"/lib/python3.8/site-packages/mpmath/tests/extratest_gamma.py",start:938171,end:945399,audio:0},{filename:"/lib/python3.8/site-packages/mpmath/tests/extratest_zeta.py",start:945399,end:946402,audio:0},{filename:"/lib/python3.8/site-packages/mpmath/tests/test_compatibility.py",start:946402,end:948708,audio:0},{filename:"/lib/python3.8/site-packages/mpmath/tests/test_functions.py",start:948708,end:979663,audio:0},{filename:"/lib/python3.8/site-packages/mpmath/tests/test_str.py",start:979663,end:980207,audio:0},{filename:"/lib/python3.8/site-packages/mpmath/tests/test_bitwise.py",start:980207,end:987893,audio:0},{filename:"/lib/python3.8/site-packages/mpmath/tests/test_hp.py",start:987893,end:998354,audio:0},{filename:"/lib/python3.8/site-packages/mpmath/tests/test_interval.py",start:998354,end:1015487,audio:0},{filename:"/lib/python3.8/site-packages/mpmath/tests/test_linalg.py",start:1015487,end:1025943,audio:0},{filename:"/lib/python3.8/site-packages/mpmath/tests/torture.py",start:1025943,end:1033811,audio:0},{filename:"/lib/python3.8/site-packages/mpmath/tests/test_identify.py",start:1033811,end:1034503,audio:0},{filename:"/lib/python3.8/site-packages/mpmath/tests/test_eigen_symmetric.py",start:1034503,end:1043281,audio:0},{filename:"/lib/python3.8/site-packages/mpmath/tests/test_basic_ops.py",start:1043281,end:1058480,audio:0},{filename:"/lib/python3.8/site-packages/mpmath/tests/test_pickle.py",start:1058480,end:1058881,audio:0},{filename:"/lib/python3.8/site-packages/mpmath/tests/test_diff.py",start:1058881,end:1061347,audio:0},{filename:"/lib/python3.8/site-packages/mpmath/tests/test_functions2.py",start:1061347,end:1158337,audio:0},{filename:"/lib/python3.8/site-packages/mpmath/tests/test_ode.py",start:1158337,end:1160159,audio:0},{filename:"/lib/python3.8/site-packages/mpmath/tests/test_elliptic.py",start:1160159,end:1184804,audio:0},{filename:"/lib/python3.8/site-packages/mpmath/tests/test_trig.py",start:1184804,end:1189603,audio:0},{filename:"/lib/python3.8/site-packages/mpmath/tests/test_eigen.py",start:1189603,end:1193508,audio:0},{filename:"/lib/python3.8/site-packages/mpmath/tests/test_quad.py",start:1193508,end:1197262,audio:0},{filename:"/lib/python3.8/site-packages/mpmath/tests/test_calculus.py",start:1197262,end:1206233,audio:0},{filename:"/lib/python3.8/site-packages/mpmath/tests/test_rootfinding.py",start:1206233,end:1209475,audio:0},{filename:"/lib/python3.8/site-packages/mpmath/tests/test_division.py",start:1209475,end:1214815,audio:0},{filename:"/lib/python3.8/site-packages/mpmath/tests/test_special.py",start:1214815,end:1217663,audio:0},{filename:"/lib/python3.8/site-packages/mpmath/tests/test_convert.py",start:1217663,end:1226173,audio:0},{filename:"/lib/python3.8/site-packages/mpmath/tests/test_mpmath.py",start:1226173,end:1226369,audio:0},{filename:"/lib/python3.8/site-packages/mpmath/tests/test_visualization.py",start:1226369,end:1227313,audio:0},{filename:"/lib/python3.8/site-packages/mpmath/tests/test_matrices.py",start:1227313,end:1232731,audio:0},{filename:"/lib/python3.8/site-packages/mpmath/tests/test_power.py",start:1232731,end:1237958,audio:0},{filename:"/lib/python3.8/site-packages/mpmath/tests/__init__.py",start:1237958,end:1237958,audio:0},{filename:"/lib/python3.8/site-packages/mpmath/tests/test_summation.py",start:1237958,end:1239817,audio:0},{filename:"/lib/python3.8/site-packages/mpmath/tests/test_levin.py",start:1239817,end:1244907,audio:0},{filename:"/lib/python3.8/site-packages/mpmath/tests/test_fp.py",start:1244907,end:1334904,audio:0},{filename:"/lib/python3.8/site-packages/mpmath/tests/test_gammazeta.py",start:1334904,end:1362567,audio:0},{filename:"/lib/python3.8/site-packages/mpmath/tests/runtests.py",start:1362567,end:1367385,audio:0},{filename:"/lib/python3.8/site-packages/mpmath/calculus/calculus.py",start:1367385,end:1367484,audio:0},{filename:"/lib/python3.8/site-packages/mpmath/calculus/polynomials.py",start:1367484,end:1375338,audio:0},{filename:"/lib/python3.8/site-packages/mpmath/calculus/optimization.py",start:1375338,end:1407757,audio:0},{filename:"/lib/python3.8/site-packages/mpmath/calculus/quadrature.py",start:1407757,end:1446069,audio:0},{filename:"/lib/python3.8/site-packages/mpmath/calculus/extrapolation.py",start:1446069,end:1519358,audio:0},{filename:"/lib/python3.8/site-packages/mpmath/calculus/approximation.py",start:1519358,end:1528175,audio:0},{filename:"/lib/python3.8/site-packages/mpmath/calculus/differentiation.py",start:1528175,end:1548401,audio:0},{filename:"/lib/python3.8/site-packages/mpmath/calculus/inverselaplace.py",start:1548401,end:1579536,audio:0},{filename:"/lib/python3.8/site-packages/mpmath/calculus/odes.py",start:1579536,end:1589444,audio:0},{filename:"/lib/python3.8/site-packages/mpmath/calculus/__init__.py",start:1589444,end:1589606,audio:0},{filename:"/lib/python3.8/site-packages/mpmath/functions/orthogonal.py",start:1589606,end:1605703,audio:0},{filename:"/lib/python3.8/site-packages/mpmath/functions/bessel.py",start:1605703,end:1643641,audio:0},{filename:"/lib/python3.8/site-packages/mpmath/functions/rszeta.py",start:1643641,end:1689825,audio:0},{filename:"/lib/python3.8/site-packages/mpmath/functions/elliptic.py",start:1689825,end:1728855,audio:0},{filename:"/lib/python3.8/site-packages/mpmath/functions/zeta.py",start:1728855,end:1765226,audio:0},{filename:"/lib/python3.8/site-packages/mpmath/functions/factorials.py",start:1765226,end:1770941,audio:0},{filename:"/lib/python3.8/site-packages/mpmath/functions/qfunctions.py",start:1770941,end:1778574,audio:0},{filename:"/lib/python3.8/site-packages/mpmath/functions/theta.py",start:1778574,end:1815894,audio:0},{filename:"/lib/python3.8/site-packages/mpmath/functions/hypergeometric.py",start:1815894,end:1867464,audio:0},{filename:"/lib/python3.8/site-packages/mpmath/functions/zetazeros.py",start:1867464,end:1898415,audio:0},{filename:"/lib/python3.8/site-packages/mpmath/functions/expintegrals.py",start:1898415,end:1910059,audio:0},{filename:"/lib/python3.8/site-packages/mpmath/functions/functions.py",start:1910059,end:1928120,audio:0},{filename:"/lib/python3.8/site-packages/mpmath/functions/__init__.py",start:1928120,end:1928428,audio:0}],remote_package_size:1110203,package_uuid:"de585a9f-d6b3-4cbd-951e-b5025b7cdcd2"})})();