import Connection from './../db';

const AmostraDAO = {
  insert: amostra => {
    return new Promise((resolve, error) => {
      const con = Connection.getConnection();
      con.connect(function(err) {
        if (err) throw err;
        console.log('Connected!');
        var sql = 'INSERT INTO AMOSTRAS VALUES ?';
        var values = amostra;
        console.log(values);
        con
          .query(sql, [values], function(err, result) {
            if (err) throw err;
            console.log('Number of records inserted: ' + result.affectedRows);
            resolve(result.affectedRows)
          })
          .on('error', err => {
              if(err.code == 'ER_DUP_ENTRY'){
                  let duplicated = err.sqlMessage.split("'")[1]
                  let er = {
                      type: "Duplicated Entry",
                      data: duplicated
                  }
                  error(er);
              }else if(err.code == 'ER_WRONG_VALUE_COUNT_ON_ROW'){
                let er = {
                    type: "INVALID CSV",
                    data: "INVALID CSV"
                }
                error(er)
              }
            error(err);
          })
          .on('end', () => {
            con.destroy();
          });
      });
    });
  },

  getIds: () => {
    return new Promise((resolve,error) => {
        const con = Connection.getConnection();
        con.connect(function(err) {
          if (err) throw err;
          console.log('Connected!');
          var sql = 'SELECT id FROM AMOSTRAS';
          con.query(sql,function(err, result){
            if(err) throw err;
            resolve(result);
          })
        })
    });
  },

  getAllComp: () => {
    return new Promise((resolve,error) => {
        const con = Connection.getConnection();
        con.connect(function(err) {
          if (err) throw err;
          console.log('Connected!');
          var sql = "select c525, c526, c528, c530, c532, c534, c536, c538, c540, c542, c544, c546, c548, c550, c552, c553, c555, c557, c559, c561, c563, c565, c567, c569, c571, c573, c575, c577, c579, c580, c582, c584, c586, c588, c590, c592, c594, c596, c598, c600, c602, c604, c606, c607, c609, c611, c613, c615, c617, c619, c621, c623, c625, c627, c629, c631, c633, c634, c636, c638, c640, c642, c644, c646, c648, c650, c652, c654, c656, c658, c660, c661, c663, c665, c667, c669, c671, c673, c675, c677, c679, c681, c683, c685, c687, c688, c690, c692, c694, c696, c698, c700, c702, c704, c706, c708, c710, c712, c714, c715, c717, c719, c721, c723, c725, c727, c729, c731, c733, c735, c737, c739, c741, c742, c744, c746, c748, c750, c752, c754, c756, c758, c760, c762, c764, c766, c768, c769, c771, c773, c775, c777, c779, c781, c783, c785, c787, c789, c791, c793, c795, c796, c798, c800, c802, c804, c806, c808, c810, c812, c814, c816, c818, c820, c822, c823, c825, c827, c829, c831, c833, c835, c837, c839, c841, c843, c845, c847, c849, c850, c852, c854, c856, c858, c860, c862, c864, c866, c868, c870, c872, c874, c876, c877, c879, c881, c883, c885, c887, c889, c891, c893, c895, c897, c899, c901, c903, c904, c906, c908, c910, c912, c914, c916, c918, c920, c922, c924, c926, c928, c930, c931, c933, c935, c937, c939, c941, c943, c945, c947, c949, c951, c953, c955, c957, c958, c960, c962, c964, c966, c968, c970, c972, c974, c976, c978, c980, c982, c984, c985, c987, c989, c991, c993, c995, c997, c999, c1001, c1003, c1005, c1007, c1009, c1011, c1012, c1014, c1016, c1018, c1020, c1022, c1024, c1026, c1028, c1030, c1032, c1034, c1036, c1038, c1039, c1041, c1043, c1045, c1047, c1049, c1051, c1053, c1055, c1057, c1059, c1061, c1063, c1065, c1066, c1068, c1070, c1072, c1074, c1076, c1078, c1080, c1082, c1084, c1086, c1088, c1090, c1092, c1093, c1095, c1097, c1099, c1101, c1103, c1105, c1107, c1109, c1111, c1113, c1115, c1117, c1119, c1120, c1122, c1124, c1126, c1128, c1130, c1132, c1134, c1136, c1138, c1140, c1142, c1144, c1146, c1147, c1149, c1151, c1153, c1155, c1157, c1159, c1161, c1163, c1165, c1167, c1169, c1171, c1173, c1174, c1176, c1178, c1180, c1182, c1184, c1186, c1188, c1190, c1192, c1194, c1196, c1198, c1200, c1201, c1203, c1205, c1207, c1209, c1211, c1213, c1215, c1217, c1219, c1221, c1223, c1225, c1227, c1228, c1230, c1232, c1234, c1236, c1238, c1240, c1242, c1244, c1246, c1248, c1250, c1252, c1254, c1255, c1257, c1259, c1261, c1263, c1265, c1267, c1269, c1271, c1273, c1275, c1277, c1279, c1281, c1282, c1284, c1286, c1288, c1290, c1292, c1294, c1296, c1298, c1300, c1302, c1304, c1306, c1308, c1309, c1311, c1313, c1315, c1317, c1319, c1321, c1323, c1325, c1327, c1329, c1331, c1333, c1335, c1336, c1338, c1340, c1342, c1344, c1346, c1348, c1350, c1352, c1354, c1356, c1358, c1360, c1362, c1363, c1365, c1367, c1369, c1371, c1373, c1375, c1377, c1379, c1381, c1383, c1385, c1387, c1389, c1390, c1392, c1394, c1396, c1398, c1400, c1402, c1404, c1406, c1408, c1410, c1412, c1414, c1416, c1417, c1419, c1421, c1423, c1425, c1427, c1429, c1431, c1433, c1435, c1437, c1439, c1441, c1443, c1444, c1446, c1448, c1450, c1452, c1454, c1456, c1458, c1460, c1462, c1464, c1466, c1468, c1470, c1471, c1473, c1475, c1477, c1479, c1481, c1483, c1485, c1487, c1489, c1491, c1493, c1495, c1497, c1498, c1500, c1502, c1504, c1506, c1508, c1510, c1512, c1514, c1516, c1518, c1520, c1522, c1524, c1525, c1527, c1529, c1531, c1533, c1535, c1537, c1539, c1541, c1543, c1545, c1547, c1549, c1551, c1552, c1554, c1556, c1558, c1560, c1562, c1564, c1566, c1568, c1570, c1572, c1574, c1576, c1578, c1579, c1581, c1583, c1585, c1587, c1589, c1591, c1593, c1595, c1597, c1599, c1601, c1603, c1605, c1606, c1608, c1610, c1612, c1614, c1616, c1618, c1620, c1622, c1624, c1626, c1628, c1630, c1632, c1633, c1635, c1637, c1639, c1641, c1643, c1645, c1647, c1649, c1651, c1653, c1655, c1657, c1659, c1660, c1662, c1664, c1666, c1668, c1670, c1672, c1674, c1676, c1678, c1680, c1682, c1684, c1686, c1687, c1689, c1691, c1693, c1695, c1697, c1699, c1701, c1703, c1705, c1707, c1709, c1711, c1713, c1714, c1716, c1718, c1720, c1722, c1724, c1726, c1728, c1730, c1732, c1734, c1736, c1738, c1740, c1741, c1743, c1745, c1747, c1749, c1751, c1753, c1755, c1757, c1759, c1761, c1763, c1765, c1767, c1768, c1770, c1772, c1774, c1776, c1778, c1780, c1782, c1784, c1786, c1788, c1790, c1792, c1794, c1795, c1797 from AMOSTRAS"; con.query(sql,function(err, result){
            if(err) throw err;
            resolve(result);
          })
        })
    });
  }
};

export default AmostraDAO;
