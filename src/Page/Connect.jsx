import React, { useState } from 'react';
import styled from 'styled-components';
import { FiCopy, FiExternalLink, FiMail, FiUser } from 'react-icons/fi';
import { FaGithub, FaLinkedin, FaInstagram, FaDiscord, FaGlobe, FaYoutube, FaTelegram } from 'react-icons/fa';
import { SiX } from 'react-icons/si';

// Animated background with stars (similar to linktree style)
const AnimatedBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  background: radial-gradient(ellipse at bottom, #223344 0%, #090a0f 100%);
  overflow: hidden;

  #stars1,
  #stars2,
  #stars3 {
    position: absolute;
    top: 0;
    left: 0;
    width: 1px;
    height: 1px;
    background: transparent;
  }

  #stars1 {
    box-shadow:
      779px 1331px #fff,
      324px 42px #fff,
      303px 586px #fff,
      1312px 276px #fff,
      451px 625px #fff,
      521px 1931px #fff,
      1087px 1871px #fff,
      36px 1546px #fff,
      132px 934px #fff,
      1698px 901px #fff,
      1418px 664px #fff,
      1448px 1157px #fff,
      1084px 232px #fff,
      347px 1776px #fff,
      1722px 243px #fff,
      1629px 835px #fff,
      479px 969px #fff,
      1231px 960px #fff,
      586px 384px #fff,
      164px 527px #fff,
      8px 646px #fff,
      1150px 1126px #fff,
      665px 1357px #fff,
      1556px 1982px #fff,
      1260px 1961px #fff,
      1675px 1741px #fff,
      1843px 1514px #fff,
      718px 1628px #fff,
      242px 1343px #fff,
      1497px 1880px #fff,
      1364px 230px #fff,
      1739px 1302px #fff,
      636px 959px #fff,
      304px 686px #fff,
      614px 751px #fff,
      1935px 816px #fff,
      1428px 60px #fff,
      355px 335px #fff,
      1594px 158px #fff,
      90px 60px #fff,
      1553px 162px #fff,
      1239px 1825px #fff,
      1945px 587px #fff,
      749px 1785px #fff,
      1987px 1172px #fff,
      1301px 1237px #fff,
      1039px 342px #fff,
      1585px 1481px #fff,
      995px 1048px #fff,
      524px 932px #fff,
      214px 413px #fff,
      1701px 1300px #fff,
      1037px 1613px #fff,
      1871px 996px #fff,
      1360px 1635px #fff,
      1110px 1313px #fff,
      412px 1783px #fff,
      1949px 177px #fff,
      903px 1854px #fff,
      700px 1936px #fff,
      378px 125px #fff,
      308px 834px #fff,
      1118px 962px #fff,
      1350px 1929px #fff,
      781px 1811px #fff,
      561px 137px #fff,
      757px 1148px #fff,
      1670px 1979px #fff,
      343px 739px #fff,
      945px 795px #fff,
      576px 1903px #fff,
      1078px 1436px #fff,
      1583px 450px #fff,
      1366px 474px #fff,
      297px 1873px #fff,
      192px 162px #fff,
      1624px 1633px #fff,
      59px 453px #fff,
      82px 1872px #fff,
      1933px 498px #fff,
      1966px 1974px #fff,
      1975px 1688px #fff,
      779px 314px #fff,
      1858px 1543px #fff,
      73px 1507px #fff,
      1693px 975px #fff,
      1683px 108px #fff,
      1768px 1654px #fff,
      654px 14px #fff,
      494px 171px #fff,
      1689px 1895px #fff,
      1660px 263px #fff,
      1031px 903px #fff,
      1203px 1393px #fff,
      1333px 1421px #fff,
      1113px 41px #fff,
      1206px 1645px #fff,
      1325px 1635px #fff,
      142px 388px #fff,
      572px 215px #fff,
      1535px 296px #fff,
      1419px 407px #fff,
      1379px 1003px #fff,
      329px 469px #fff,
      1791px 1652px #fff,
      935px 1802px #fff,
      1330px 1820px #fff,
      421px 1933px #fff,
      828px 365px #fff,
      275px 316px #fff,
      707px 960px #fff,
      1605px 1554px #fff,
      625px 58px #fff,
      717px 1697px #fff,
      1669px 246px #fff,
      1925px 322px #fff,
      1154px 1803px #fff,
      1929px 295px #fff,
      1248px 240px #fff,
      1045px 1755px #fff,
      166px 942px #fff,
      1888px 1773px #fff,
      678px 1963px #fff,
      1370px 569px #fff,
      1974px 1400px #fff,
      1786px 460px #fff,
      51px 307px #fff,
      784px 1400px #fff,
      730px 1258px #fff,
      1712px 393px #fff,
      416px 170px #fff,
      1797px 1932px #fff,
      572px 219px #fff,
      1557px 1856px #fff,
      218px 8px #fff,
      348px 1334px #fff,
      469px 413px #fff,
      385px 1738px #fff,
      1357px 1818px #fff,
      240px 942px #fff,
      248px 1847px #fff,
      1535px 806px #fff,
      236px 1514px #fff,
      1429px 1556px #fff,
      73px 1633px #fff,
      1398px 1121px #fff,
      671px 1301px #fff,
      1404px 1663px #fff,
      740px 1018px #fff,
      1600px 377px #fff,
      785px 514px #fff,
      112px 1084px #fff,
      1915px 1887px #fff,
      1463px 1848px #fff,
      687px 1115px #fff,
      1268px 1768px #fff,
      1729px 1425px #fff,
      1284px 1022px #fff,
      801px 974px #fff,
      1975px 1317px #fff,
      1354px 834px #fff,
      1446px 1484px #fff,
      1283px 1786px #fff,
      11px 523px #fff,
      1842px 236px #fff,
      1355px 654px #fff,
      429px 7px #fff,
      1033px 1128px #fff,
      157px 297px #fff,
      545px 635px #fff,
      52px 1080px #fff,
      827px 1520px #fff,
      1121px 490px #fff,
      9px 309px #fff,
      1744px 1586px #fff,
      1014px 417px #fff,
      1534px 524px #fff,
      958px 552px #fff,
      1403px 1496px #fff,
      387px 703px #fff,
      1522px 548px #fff,
      1355px 282px #fff,
      1532px 601px #fff,
      1838px 790px #fff,
      290px 259px #fff,
      295px 598px #fff,
      1601px 539px #fff,
      1561px 1272px #fff,
      34px 1922px #fff,
      1024px 543px #fff,
      467px 369px #fff,
      722px 333px #fff,
      1976px 1255px #fff,
      766px 983px #fff,
      1582px 1285px #fff,
      12px 512px #fff,
      617px 1410px #fff,
      682px 577px #fff,
      1334px 1438px #fff,
      439px 327px #fff,
      1617px 1661px #fff,
      673px 129px #fff,
      794px 941px #fff,
      1386px 1902px #fff,
      37px 1353px #fff,
      1467px 1353px #fff,
      416px 18px #fff,
      187px 344px #fff,
      200px 1898px #fff,
      1491px 1619px #fff,
      811px 347px #fff,
      924px 1827px #fff,
      945px 217px #fff,
      1735px 1228px #fff,
      379px 1890px #fff,
      79px 761px #fff,
      825px 1837px #fff,
      1980px 1558px #fff,
      1308px 1573px #fff,
      1488px 1726px #fff,
      382px 1208px #fff,
      522px 595px #fff,
      1277px 1898px #fff,
      354px 552px #fff,
      161px 1784px #fff,
      614px 251px #fff,
      526px 1576px #fff,
      17px 212px #fff,
      179px 996px #fff,
      467px 1208px #fff,
      1944px 1838px #fff,
      1140px 1093px #fff,
      858px 1007px #fff,
      200px 1064px #fff,
      423px 1964px #fff,
      1945px 439px #fff,
      1377px 689px #fff,
      1120px 1437px #fff,
      1876px 668px #fff,
      907px 1324px #fff,
      343px 1976px #fff,
      1816px 1501px #fff,
      1849px 177px #fff,
      647px 91px #fff,
      1984px 1012px #fff,
      1336px 1300px #fff,
      128px 648px #fff,
      305px 1060px #fff,
      1324px 826px #fff,
      1263px 1314px #fff,
      1801px 629px #fff,
      1614px 1555px #fff,
      1634px 90px #fff,
      1603px 452px #fff,
      891px 1984px #fff,
      1556px 1906px #fff,
      121px 68px #fff,
      1676px 1714px #fff,
      516px 936px #fff,
      1947px 1492px #fff,
      1455px 1519px #fff,
      45px 602px #fff,
      205px 1039px #fff,
      793px 172px #fff,
      1562px 1739px #fff,
      1056px 110px #fff,
      1512px 379px #fff,
      1795px 1621px #fff,
      1848px 607px #fff,
      262px 1719px #fff,
      477px 991px #fff,
      483px 883px #fff,
      1239px 1197px #fff,
      1496px 647px #fff,
      1649px 25px #fff,
      1491px 1946px #fff,
      119px 996px #fff,
      179px 1472px #fff,
      1341px 808px #fff,
      1565px 1700px #fff,
      407px 1544px #fff,
      1754px 357px #fff,
      1288px 981px #fff,
      902px 1997px #fff,
      1755px 1668px #fff,
      186px 877px #fff,
      1202px 1882px #fff,
      461px 1213px #fff,
      1400px 748px #fff,
      1969px 1899px #fff,
      809px 522px #fff,
      514px 1219px #fff,
      374px 275px #fff,
      938px 1973px #fff,
      357px 552px #fff,
      144px 1722px #fff,
      1572px 912px #fff,
      402px 1858px #fff,
      1544px 1195px #fff,
      667px 1257px #fff,
      727px 1496px #fff,
      993px 232px #fff,
      1772px 313px #fff,
      1040px 1590px #fff,
      1204px 1973px #fff,
      1268px 79px #fff,
      1555px 1048px #fff,
      986px 1707px #fff,
      978px 1710px #fff,
      713px 360px #fff,
      407px 863px #fff,
      461px 736px #fff,
      284px 1608px #fff,
      103px 430px #fff,
      1283px 1319px #fff,
      977px 1186px #fff,
      1966px 1516px #fff,
      1287px 1129px #fff,
      70px 1098px #fff,
      1189px 889px #fff,
      1126px 1734px #fff,
      309px 1292px #fff,
      879px 764px #fff,
      65px 473px #fff,
      1003px 1959px #fff,
      658px 791px #fff,
      402px 1576px #fff,
      35px 622px #fff,
      529px 1589px #fff,
      164px 666px #fff,
      1876px 1290px #fff,
      1541px 526px #fff,
      270px 1297px #fff,
      440px 865px #fff,
      1500px 802px #fff,
      182px 1754px #fff,
      1264px 892px #fff,
      272px 1249px #fff,
      1289px 1535px #fff,
      190px 1646px #fff,
      955px 242px #fff,
      1456px 1597px #fff,
      1727px 1983px #fff,
      635px 801px #fff,
      226px 455px #fff,
      1396px 1710px #fff,
      849px 1863px #fff,
      237px 1264px #fff,
      839px 140px #fff,
      1122px 735px #fff,
      1280px 15px #fff,
      1318px 242px #fff,
      1819px 1148px #fff,
      333px 1392px #fff,
      1949px 553px #fff,
      1878px 1332px #fff,
      467px 548px #fff,
      1812px 1082px #fff,
      1067px 193px #fff,
      243px 156px #fff,
      483px 1616px #fff,
      1714px 933px #fff,
      759px 1800px #fff,
      1822px 995px #fff,
      1877px 572px #fff,
      581px 1084px #fff,
      107px 732px #fff,
      642px 1837px #fff,
      166px 1493px #fff,
      1555px 198px #fff,
      819px 307px #fff,
      947px 345px #fff,
      827px 224px #fff,
      927px 1394px #fff,
      540px 467px #fff,
      1093px 405px #fff,
      1140px 927px #fff,
      130px 529px #fff,
      33px 1980px #fff,
      1147px 1663px #fff,
      1616px 1436px #fff,
      528px 710px #fff,
      798px 1100px #fff,
      505px 1480px #fff,
      899px 641px #fff,
      1909px 1949px #fff,
      1311px 964px #fff,
      979px 1301px #fff,
      1393px 969px #fff,
      1793px 1886px #fff,
      292px 357px #fff,
      1196px 1718px #fff,
      1290px 1994px #fff,
      537px 1973px #fff,
      1181px 1674px #fff;
    animation: animStar 120s linear infinite;
  }

  #stars1:after {
    content: '';
    position: absolute;
    top: auto;
    width: 1px;
    height: 1px;
    background: transparent;
    box-shadow:
      779px 1331px #fff,
      324px 42px #fff,
      303px 586px #fff,
      1312px 276px #fff,
      451px 625px #fff,
      521px 1931px #fff,
      1087px 1871px #fff,
      36px 1546px #fff,
      132px 934px #fff,
      1698px 901px #fff,
      1418px 664px #fff,
      1448px 1157px #fff,
      1084px 232px #fff,
      347px 1776px #fff,
      1722px 243px #fff,
      1629px 835px #fff,
      479px 969px #fff,
      1231px 960px #fff,
      586px 384px #fff,
      164px 527px #fff,
      8px 646px #fff,
      1150px 1126px #fff,
      665px 1357px #fff,
      1556px 1982px #fff,
      1260px 1961px #fff,
      1675px 1741px #fff,
      1843px 1514px #fff,
      718px 1628px #fff,
      242px 1343px #fff,
      1497px 1880px #fff,
      1364px 230px #fff,
      1739px 1302px #fff,
      636px 959px #fff,
      304px 686px #fff,
      614px 751px #fff,
      1935px 816px #fff,
      1428px 60px #fff,
      355px 335px #fff,
      1594px 158px #fff,
      90px 60px #fff,
      1553px 162px #fff,
      1239px 1825px #fff,
      1945px 587px #fff,
      749px 1785px #fff,
      1987px 1172px #fff,
      1301px 1237px #fff,
      1039px 342px #fff,
      1585px 1481px #fff,
      995px 1048px #fff,
      524px 932px #fff,
      214px 413px #fff,
      1701px 1300px #fff,
      1037px 1613px #fff,
      1871px 996px #fff,
      1360px 1635px #fff,
      1110px 1313px #fff,
      412px 1783px #fff,
      1949px 177px #fff,
      903px 1854px #fff,
      700px 1936px #fff,
      378px 125px #fff,
      308px 834px #fff,
      1118px 962px #fff,
      1350px 1929px #fff,
      781px 1811px #fff,
      561px 137px #fff,
      757px 1148px #fff,
      1670px 1979px #fff,
      343px 739px #fff,
      945px 795px #fff,
      576px 1903px #fff,
      1078px 1436px #fff,
      1583px 450px #fff,
      1366px 474px #fff,
      297px 1873px #fff,
      192px 162px #fff,
      1624px 1633px #fff,
      59px 453px #fff,
      82px 1872px #fff,
      1933px 498px #fff,
      1966px 1974px #fff,
      1975px 1688px #fff,
      779px 314px #fff,
      1858px 1543px #fff,
      73px 1507px #fff,
      1693px 975px #fff,
      1683px 108px #fff,
      1768px 1654px #fff,
      654px 14px #fff,
      494px 171px #fff,
      1689px 1895px #fff,
      1660px 263px #fff,
      1031px 903px #fff,
      1203px 1393px #fff,
      1333px 1421px #fff,
      1113px 41px #fff,
      1206px 1645px #fff,
      1325px 1635px #fff,
      142px 388px #fff,
      572px 215px #fff,
      1535px 296px #fff,
      1419px 407px #fff,
      1379px 1003px #fff,
      329px 469px #fff,
      1791px 1652px #fff,
      935px 1802px #fff,
      1330px 1820px #fff,
      421px 1933px #fff,
      828px 365px #fff,
      275px 316px #fff,
      707px 960px #fff,
      1605px 1554px #fff,
      625px 58px #fff,
      717px 1697px #fff,
      1669px 246px #fff,
      1925px 322px #fff,
      1154px 1803px #fff,
      1929px 295px #fff,
      1248px 240px #fff,
      1045px 1755px #fff,
      166px 942px #fff,
      1888px 1773px #fff,
      678px 1963px #fff,
      1370px 569px #fff,
      1974px 1400px #fff,
      1786px 460px #fff,
      51px 307px #fff,
      784px 1400px #fff,
      730px 1258px #fff,
      1712px 393px #fff,
      416px 170px #fff,
      1797px 1932px #fff,
      572px 219px #fff,
      1557px 1856px #fff,
      218px 8px #fff,
      348px 1334px #fff,
      469px 413px #fff,
      385px 1738px #fff,
      1357px 1818px #fff,
      240px 942px #fff,
      248px 1847px #fff,
      1535px 806px #fff,
      236px 1514px #fff,
      1429px 1556px #fff,
      73px 1633px #fff,
      1398px 1121px #fff,
      671px 1301px #fff,
      1404px 1663px #fff,
      740px 1018px #fff,
      1600px 377px #fff,
      785px 514px #fff,
      112px 1084px #fff,
      1915px 1887px #fff,
      1463px 1848px #fff,
      687px 1115px #fff,
      1268px 1768px #fff,
      1729px 1425px #fff;
  }

  #stars2 {
    width: 2px;
    height: 2px;
    background: transparent;
    box-shadow:
      779px 1331px #fff,
      324px 42px #fff,
      303px 586px #fff,
      1312px 276px #fff,
      451px 625px #fff,
      521px 1931px #fff,
      1087px 1871px #fff,
      36px 1546px #fff,
      132px 934px #fff,
      1698px 901px #fff,
      1418px 664px #fff,
      1448px 1157px #fff,
      1084px 232px #fff,
      347px 1776px #fff,
      1722px 243px #fff,
      1629px 835px #fff,
      479px 969px #fff,
      1231px 960px #fff,
      586px 384px #fff,
      164px 527px #fff,
      8px 646px #fff,
      1150px 1126px #fff,
      665px 1357px #fff,
      1556px 1982px #fff,
      1260px 1961px #fff,
      1675px 1741px #fff,
      1843px 1514px #fff,
      718px 1628px #fff,
      242px 1343px #fff,
      1497px 1880px #fff,
      1364px 230px #fff,
      1739px 1302px #fff,
      636px 959px #fff,
      304px 686px #fff,
      614px 751px #fff,
      1935px 816px #fff,
      1428px 60px #fff,
      355px 335px #fff,
      1594px 158px #fff,
      90px 60px #fff,
      1553px 162px #fff,
      1239px 1825px #fff,
      1945px 587px #fff,
      749px 1785px #fff,
      1987px 1172px #fff,
      1301px 1237px #fff,
      1039px 342px #fff,
      1585px 1481px #fff,
      995px 1048px #fff,
      524px 932px #fff,
      214px 413px #fff,
      1701px 1300px #fff,
      1037px 1613px #fff,
      1871px 996px #fff,
      1360px 1635px #fff,
      1110px 1313px #fff,
      412px 1783px #fff,
      1949px 177px #fff;
    animation: animStar 100s linear infinite;
  }

  #stars2:after {
    content: '';
    position: absolute;
    top: auto;
    width: 2px;
    height: 2px;
    background: transparent;
    box-shadow:
      779px 1331px #fff,
      324px 42px #fff,
      303px 586px #fff,
      1312px 276px #fff,
      451px 625px #fff,
      521px 1931px #fff,
      1087px 1871px #fff,
      36px 1546px #fff,
      132px 934px #fff,
      1698px 901px #fff,
      1418px 664px #fff,
      1448px 1157px #fff,
      1084px 232px #fff,
      347px 1776px #fff,
      1722px 243px #fff,
      1629px 835px #fff,
      479px 969px #fff,
      1231px 960px #fff,
      586px 384px #fff,
      164px 527px #fff,
      8px 646px #fff,
      1150px 1126px #fff,
      665px 1357px #fff,
      1556px 1982px #fff,
      1260px 1961px #fff,
      1675px 1741px #fff,
      1843px 1514px #fff,
      718px 1628px #fff,
      242px 1343px #fff,
      1497px 1880px #fff,
      1364px 230px #fff,
      1739px 1302px #fff,
      636px 959px #fff,
      304px 686px #fff,
      614px 751px #fff,
      1935px 816px #fff,
      1428px 60px #fff,
      355px 335px #fff,
      1594px 158px #fff,
      90px 60px #fff,
      1553px 162px #fff,
      1239px 1825px #fff,
      1945px 587px #fff,
      749px 1785px #fff,
      1987px 1172px #fff,
      1301px 1237px #fff,
      1039px 342px #fff,
      1585px 1481px #fff,
      995px 1048px #fff,
      524px 932px #fff,
      214px 413px #fff,
      1701px 1300px #fff,
      1037px 1613px #fff,
      1871px 996px #fff,
      1360px 1635px #fff,
      1110px 1313px #fff,
      412px 1783px #fff,
      1949px 177px #fff;
  }

  #stars3 {
    width: 3px;
    height: 3px;
    background: transparent;
    box-shadow:
      779px 1331px #fff,
      324px 42px #fff,
      303px 586px #fff,
      1312px 276px #fff,
      451px 625px #fff,
      521px 1931px #fff,
      1087px 1871px #fff,
      36px 1546px #fff,
      132px 934px #fff,
      1698px 901px #fff,
      1418px 664px #fff,
      1448px 1157px #fff,
      1084px 232px #fff,
      347px 1776px #fff,
      1722px 243px #fff,
      1629px 835px #fff,
      479px 969px #fff,
      1231px 960px #fff,
      586px 384px #fff,
      164px 527px #fff,
      8px 646px #fff,
      1150px 1126px #fff,
      665px 1357px #fff,
      1556px 1982px #fff,
      1260px 1961px #fff,
      1675px 1741px #fff,
      1843px 1514px #fff,
      718px 1628px #fff,
      242px 1343px #fff,
      1497px 1880px #fff,
      1364px 230px #fff,
      1739px 1302px #fff,
      636px 959px #fff,
      304px 686px #fff,
      614px 751px #fff,
      1935px 816px #fff,
      1428px 60px #fff,
      355px 335px #fff,
      1594px 158px #fff,
      90px 60px #fff,
      1553px 162px #fff,
      1239px 1825px #fff,
      1945px 587px #fff,
      749px 1785px #fff,
      1987px 1172px #fff,
      1301px 1237px #fff,
      1039px 342px #fff,
      1585px 1481px #fff,
      995px 1048px #fff,
      524px 932px #fff,
      214px 413px #fff,
      1701px 1300px #fff,
      1037px 1613px #fff,
      1871px 996px #fff,
      1360px 1635px #fff,
      1110px 1313px #fff,
      412px 1783px #fff,
      1949px 177px #fff,
      903px 1854px #fff,
      700px 1936px #fff,
      378px 125px #fff,
      308px 834px #fff,
      1118px 962px #fff,
      1350px 1929px #fff,
      781px 1811px #fff,
      561px 137px #fff,
      757px 1148px #fff,
      1670px 1979px #fff,
      343px 739px #fff,
      945px 795px #fff,
      576px 1903px #fff,
      1078px 1436px #fff,
      1583px 450px #fff,
      1366px 474px #fff,
      297px 1873px #fff,
      192px 162px #fff,
      1624px 1633px #fff,
      59px 453px #fff,
      82px 1872px #fff,
      1933px 498px #fff,
      1966px 1974px #fff,
      1975px 1688px #fff,
      779px 314px #fff,
      1858px 1543px #fff,
      73px 1507px #fff,
      1693px 975px #fff,
      1683px 108px #fff,
      1768px 1654px #fff,
      654px 14px #fff,
      494px 171px #fff;
    animation: animStar 150s linear infinite;
  }

  #stars3:after {
    content: '';
    position: absolute;
    top: auto;
    width: 3px;
    height: 3px;
    background: transparent;
    box-shadow:
      779px 1331px #fff,
      324px 42px #fff,
      303px 586px #fff,
      1312px 276px #fff,
      451px 625px #fff,
      521px 1931px #fff,
      1087px 1871px #fff,
      36px 1546px #fff,
      132px 934px #fff,
      1698px 901px #fff,
      1418px 664px #fff,
      1448px 1157px #fff,
      1084px 232px #fff,
      347px 1776px #fff,
      1722px 243px #fff,
      1629px 835px #fff,
      479px 969px #fff,
      1231px 960px #fff,
      586px 384px #fff,
      164px 527px #fff,
      8px 646px #fff,
      1150px 1126px #fff,
      665px 1357px #fff,
      1556px 1982px #fff,
      1260px 1961px #fff,
      1675px 1741px #fff,
      1843px 1514px #fff,
      718px 1628px #fff,
      242px 1343px #fff,
      1497px 1880px #fff,
      1364px 230px #fff,
      1739px 1302px #fff,
      636px 959px #fff,
      304px 686px #fff,
      614px 751px #fff,
      1935px 816px #fff,
      1428px 60px #fff,
      355px 335px #fff,
      1594px 158px #fff,
      90px 60px #fff,
      1553px 162px #fff,
      1239px 1825px #fff,
      1945px 587px #fff,
      749px 1785px #fff,
      1987px 1172px #fff,
      1301px 1237px #fff,
      1039px 342px #fff,
      1585px 1481px #fff,
      995px 1048px #fff,
      524px 932px #fff,
      214px 413px #fff,
      1701px 1300px #fff,
      1037px 1613px #fff,
      1871px 996px #fff,
      1360px 1635px #fff,
      1110px 1313px #fff,
      412px 1783px #fff,
      1949px 177px #fff,
      903px 1854px #fff,
      700px 1936px #fff,
      378px 125px #fff,
      308px 834px #fff,
      1118px 962px #fff,
      1350px 1929px #fff,
      781px 1811px #fff,
      561px 137px #fff,
      757px 1148px #fff,
      1670px 1979px #fff,
      343px 739px #fff,
      945px 795px #fff,
      576px 1903px #fff,
      1078px 1436px #fff,
      1583px 450px #fff,
      1366px 474px #fff,
      297px 1873px #fff,
      192px 162px #fff,
      1624px 1633px #fff,
      59px 453px #fff,
      82px 1872px #fff,
      1933px 498px #fff,
      1966px 1974px #fff,
      1975px 1688px #fff,
      779px 314px #fff,
      1858px 1543px #fff,
      73px 1507px #fff,
      1693px 975px #fff,
      1683px 108px #fff,
      1768px 1654px #fff,
      654px 14px #fff,
      494px 171px #fff;
  }

  @keyframes animStar {
    from {
      transform: translateY(0px);
    }
    to {
      transform: translateY(-2000px);
    }
  }
`;

// Main container
const Container = styled.div`
  min-height: 100vh;
  padding: 2rem 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  color: white;
  font-family:
    'Inter',
    -apple-system,
    BlinkMacSystemFont,
    sans-serif;
`;

// Logo section
const LogoSection = styled.div`
  text-align: center;
  margin-bottom: 3rem;
  animation: fadeInUp 1s ease-out;

  h1 {
    font-size: 2.5rem;
    font-weight: 800;
    color: white;
    margin-top: 3rem;
    margin-bottom: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    flex-wrap: wrap;

    img {
      height: 3rem;
      width: auto;
      object-fit: contain;
      filter: drop-shadow(0 0 20px rgba(255, 255, 255, 0.1));
    }
  }

  p {
    font-size: 1.2rem;
    color: rgba(255, 255, 255, 0.8);
    max-width: 600px;
    margin: 0 auto;
    line-height: 1.6;
  }

  @media (max-width: 768px) {
    h1 {
      font-size: 2rem;
      gap: 0.5rem;

      img {
        height: 2.5rem;
      }
    }
    p {
      font-size: 1rem;
    }
  }

  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

// Links grid
const LinksGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 1.5rem;
  max-width: 1200px;
  width: 100%;
  margin: 2rem 0;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
`;

// Individual link card
const LinkCard = styled.div`
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  padding: 1.5rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;

  &:hover {
    transform: translateY(-2px);
    border-color: rgba(0, 212, 255, 0.3);
    box-shadow: 0 10px 30px rgba(0, 212, 255, 0.1);
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(90deg, transparent, rgba(0, 212, 255, 0.5), transparent);
    animation: shimmer 3s ease-in-out infinite;
  }

  @keyframes shimmer {
    0%,
    100% {
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
  }
`;

// Icon container
const IconContainer = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${(props) => props.bgColor || 'rgba(255, 255, 255, 0.1)'};
  flex-shrink: 0;

  svg,
  img {
    width: 24px;
    height: 24px;
    color: ${(props) => props.iconColor || '#fff'};
  }
`;

// Link info
const LinkInfo = styled.div`
  flex: 1;
  min-width: 0;

  h3 {
    font-size: 1.1rem;
    font-weight: 600;
    margin: 0 0 0.25rem 0;
    color: white;
  }

  p {
    font-size: 0.9rem;
    color: rgba(255, 255, 255, 0.6);
    margin: 0;
  }
`;

// Action buttons
const ActionButtons = styled.div`
  display: flex;
  gap: 0.5rem;
  flex-shrink: 0;
`;

const ActionButton = styled.button`
  width: 36px;
  height: 36px;
  border-radius: 8px;
  border: none;
  background: rgba(255, 255, 255, 0.1);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: ${(props) => props.hoverColor || 'rgba(0, 212, 255, 0.2)'};
    transform: scale(1.05);
  }

  &:active {
    transform: scale(0.95);
  }

  svg {
    width: 16px;
    height: 16px;
  }
`;

// Toast notification
const Toast = styled.div`
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  background: rgba(0, 212, 255, 0.9);
  color: white;
  padding: 1rem 1.5rem;
  border-radius: 8px;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  opacity: ${(props) => (props.show ? 1 : 0)};
  transform: translateY(${(props) => (props.show ? 0 : '100px')});
  transition: all 0.3s ease;
  z-index: 1000;

  @media (max-width: 768px) {
    bottom: 1rem;
    right: 1rem;
    left: 1rem;
  }
`;

const Connect = () => {
  const [toast, setToast] = useState({ show: false, message: '' });

  const showToast = (message) => {
    setToast({ show: true, message });
    setTimeout(() => setToast({ show: false, message: '' }), 3000);
  };

  const copyToClipboard = async (text, label) => {
    try {
      await navigator.clipboard.writeText(text);
      showToast(`${label} copied to clipboard!`);
    } catch (err) {
      console.error('Failed to copy: ', err);
      showToast('Failed to copy');
    }
  };

  const openLink = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const links = [
    {
      id: 'platform',
      name: 'DevDisplay Platform',
      description: 'Main platform for developers',
      url: 'https://devdisplay.org',
      icon: <FaGlobe />,
      bgColor: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      iconColor: '#fff',
    },
    {
      id: 'community',
      name: 'DevDisplay Community',
      description: 'Join our developer community',
      url: 'https://www.devdisplay.tech/',
      icon: <FaGlobe />,
      bgColor: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
      iconColor: '#fff',
    },
    {
      id: 'linkedin',
      name: 'LinkedIn',
      description: 'Follow us on LinkedIn',
      url: 'https://www.linkedin.com/company/devdisplay/',
      icon: <FaLinkedin />,
      bgColor: '#0077b5',
      iconColor: '#fff',
    },
    {
      id: 'twitter',
      name: 'Twitter',
      description: 'Follow us on Twitter',
      url: 'https://twitter.com/devdisplay_',
      icon: <SiX />,
      bgColor: '#000000',
      iconColor: '#fff',
    },
    {
      id: 'instagram',
      name: 'Instagram',
      description: 'Follow us on Instagram',
      url: 'https://instagram.com/devdisplay',
      icon: <FaInstagram />,
      bgColor: 'linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%)',
      iconColor: '#fff',
    },
    {
      id: 'discord',
      name: 'Discord',
      description: 'Join our Discord server',
      url: 'https://discord.com/invite/chyt2UgTv5',
      icon: <FaDiscord />,
      bgColor: '#5865f2',
      iconColor: '#fff',
    },
    {
      id: 'github-repo',
      name: 'GitHub Repository',
      description: 'Main DevDisplay repository',
      url: 'https://github.com/codeaashu/DevDisplay',
      icon: <FaGithub />,
      bgColor: '#333333',
      iconColor: '#fff',
    },
    {
      id: 'github-org',
      name: 'GitHub Organization',
      description: 'DevDisplay GitHub organization',
      url: 'https://github.com/DevDisplay',
      icon: <FaGithub />,
      bgColor: '#333333',
      iconColor: '#fff',
    },
    {
      id: 'youtube',
      name: 'YouTube',
      description: 'Subscribe to our channel',
      url: 'https://youtube.com/@devdisplay',
      icon: <FaYoutube />,
      bgColor: '#ff0000',
      iconColor: '#fff',
    },
    {
      id: 'telegram',
      name: 'Telegram',
      description: 'Join our Telegram community',
      url: 'https://t.me/devdisplay',
      icon: <FaTelegram />,
      bgColor: '#0088cc',
      iconColor: '#fff',
    },
    {
      id: 'email',
      name: 'Contact Team',
      description: 'team@devdisplay.org',
      url: 'mailto:team@devdisplay.org',
      icon: <FiMail />,
      bgColor: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      iconColor: '#fff',
      isEmail: true,
      emailAddress: 'team@devdisplay.org',
    },
    {
      id: 'founder',
      name: 'Connect with Founder',
      description: 'Get in touch with our founder',
      url: 'https://www.devdisplay.org/profile/codeaashu',
      icon: <FiUser />,
      bgColor: 'linear-gradient(135deg, #ffeaa7 0%, #fab1a0 100%)',
      iconColor: '#333',
    },
  ];

  return (
    <>
      <AnimatedBackground>
        <div id="stars1"></div>
        <div id="stars2"></div>
        <div id="stars3"></div>
      </AnimatedBackground>

      <Container>
        <LogoSection>
          <h1>
            Connect with <img src="/DDColorLOGO.png" alt="DevDisplay" />
          </h1>
          <p>The First Global Platform for Developers to Fulfill All Their Tech Needs.</p>
        </LogoSection>

        <LinksGrid>
          {links.map((link) => (
            <LinkCard key={link.id}>
              <IconContainer bgColor={link.bgColor} iconColor={link.iconColor}>
                {link.icon}
              </IconContainer>

              <LinkInfo>
                <h3>{link.name}</h3>
                <p>{link.description}</p>
              </LinkInfo>

              <ActionButtons>
                <ActionButton
                  onClick={() => copyToClipboard(link.isEmail ? link.emailAddress : link.url, link.name)}
                  hoverColor="rgba(0, 212, 255, 0.2)"
                  title="Copy link"
                >
                  <FiCopy />
                </ActionButton>

                <ActionButton onClick={() => openLink(link.url)} hoverColor="rgba(0, 255, 136, 0.2)" title="Visit link">
                  <FiExternalLink />
                </ActionButton>
              </ActionButtons>
            </LinkCard>
          ))}
        </LinksGrid>

        <Toast show={toast.show}>{toast.message}</Toast>
      </Container>
    </>
  );
};

export default Connect;
