// Generated from LatexLexer.g4 by ANTLR 4.9.1
// jshint ignore: start
import antlr4 from 'antlr4';



const serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786",
    "\u5964\u00023\u017e\b\u0001\b\u0001\u0004\u0002\t\u0002\u0004\u0003",
    "\t\u0003\u0004\u0004\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006",
    "\u0004\u0007\t\u0007\u0004\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b",
    "\t\u000b\u0004\f\t\f\u0004\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f",
    "\u0004\u0010\t\u0010\u0004\u0011\t\u0011\u0004\u0012\t\u0012\u0004\u0013",
    "\t\u0013\u0004\u0014\t\u0014\u0004\u0015\t\u0015\u0004\u0016\t\u0016",
    "\u0004\u0017\t\u0017\u0004\u0018\t\u0018\u0004\u0019\t\u0019\u0004\u001a",
    "\t\u001a\u0004\u001b\t\u001b\u0004\u001c\t\u001c\u0004\u001d\t\u001d",
    "\u0004\u001e\t\u001e\u0004\u001f\t\u001f\u0004 \t \u0004!\t!\u0004\"",
    "\t\"\u0004#\t#\u0004$\t$\u0004%\t%\u0004&\t&\u0004\'\t\'\u0004(\t(\u0004",
    ")\t)\u0004*\t*\u0004+\t+\u0004,\t,\u0004-\t-\u0004.\t.\u0004/\t/\u0004",
    "0\t0\u00041\t1\u00042\t2\u00043\t3\u00044\t4\u0003\u0002\u0003\u0002",
    "\u0003\u0002\u0003\u0002\u0003\u0003\u0003\u0003\u0003\u0004\u0003\u0004",
    "\u0003\u0005\u0003\u0005\u0003\u0006\u0003\u0006\u0003\u0007\u0003\u0007",
    "\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\t\u0003\t\u0003",
    "\t\u0003\t\u0003\t\u0003\t\u0003\n\u0003\n\u0003\n\u0003\n\u0003\n\u0003",
    "\n\u0003\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0003",
    "\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003\r\u0003\r\u0003\r\u0003\r\u0003",
    "\r\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000e\u0003",
    "\u000f\u0003\u000f\u0003\u000f\u0003\u000f\u0003\u000f\u0003\u0010\u0003",
    "\u0010\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0011\u0003\u0011\u0003",
    "\u0011\u0003\u0011\u0003\u0011\u0003\u0011\u0003\u0011\u0003\u0011\u0003",
    "\u0012\u0003\u0012\u0003\u0012\u0003\u0012\u0003\u0012\u0003\u0012\u0003",
    "\u0012\u0003\u0012\u0003\u0013\u0003\u0013\u0003\u0013\u0003\u0013\u0003",
    "\u0013\u0003\u0013\u0003\u0013\u0003\u0013\u0003\u0014\u0003\u0014\u0003",
    "\u0014\u0003\u0014\u0003\u0014\u0003\u0014\u0003\u0015\u0003\u0015\u0003",
    "\u0015\u0003\u0015\u0003\u0015\u0003\u0015\u0003\u0016\u0003\u0016\u0003",
    "\u0016\u0003\u0016\u0003\u0016\u0003\u0016\u0003\u0017\u0003\u0017\u0003",
    "\u0017\u0003\u0017\u0003\u0017\u0003\u0017\u0003\u0018\u0003\u0018\u0003",
    "\u0018\u0003\u0018\u0003\u0018\u0003\u0018\u0003\u0018\u0003\u0018\u0003",
    "\u0019\u0003\u0019\u0003\u0019\u0003\u0019\u0003\u0019\u0003\u0019\u0003",
    "\u0019\u0003\u0019\u0003\u0019\u0003\u001a\u0003\u001a\u0003\u001b\u0003",
    "\u001b\u0003\u001c\u0003\u001c\u0003\u001d\u0003\u001d\u0003\u001e\u0006",
    "\u001e\u00f3\n\u001e\r\u001e\u000e\u001e\u00f4\u0003\u001e\u0003\u001e",
    "\u0007\u001e\u00f9\n\u001e\f\u001e\u000e\u001e\u00fc\u000b\u001e\u0003",
    "\u001e\u0003\u001e\u0006\u001e\u0100\n\u001e\r\u001e\u000e\u001e\u0101",
    "\u0003\u001e\u0006\u001e\u0105\n\u001e\r\u001e\u000e\u001e\u0106\u0005",
    "\u001e\u0109\n\u001e\u0003\u001f\u0003\u001f\u0003 \u0006 \u010e\n ",
    "\r \u000e \u010f\u0003!\u0006!\u0113\n!\r!\u000e!\u0114\u0003!\u0003",
    "!\u0003\"\u0003\"\u0003\"\u0003\"\u0003\"\u0003#\u0003#\u0003$\u0003",
    "$\u0003$\u0003$\u0003%\u0003%\u0003%\u0003%\u0003%\u0003%\u0003&\u0003",
    "&\u0003&\u0003&\u0003&\u0003&\u0003\'\u0003\'\u0003\'\u0003\'\u0003",
    "\'\u0003\'\u0003(\u0003(\u0003)\u0006)\u0139\n)\r)\u000e)\u013a\u0003",
    "*\u0003*\u0003+\u0003+\u0003,\u0003,\u0003-\u0003-\u0003.\u0006.\u0146",
    "\n.\r.\u000e.\u0147\u0003.\u0003.\u0007.\u014c\n.\f.\u000e.\u014f\u000b",
    ".\u0003.\u0003.\u0006.\u0153\n.\r.\u000e.\u0154\u0003.\u0006.\u0158",
    "\n.\r.\u000e.\u0159\u0005.\u015c\n.\u0003/\u0003/\u00030\u00030\u0003",
    "0\u00030\u00030\u00030\u00030\u00030\u00031\u00031\u00031\u00031\u0003",
    "1\u00031\u00031\u00031\u00031\u00032\u00062\u0172\n2\r2\u000e2\u0173",
    "\u00032\u00032\u00033\u00033\u00033\u00033\u00033\u00034\u00034\u0002",
    "\u00025\u0004\u0003\u0006\u0004\b\u0005\n\u0006\f\u0007\u000e\b\u0010",
    "\t\u0012\n\u0014\u000b\u0016\f\u0018\r\u001a\u000e\u001c\u000f\u001e",
    "\u0010 \u0011\"\u0012$\u0013&\u0014(\u0015*\u0016,\u0017.\u00180\u0019",
    "2\u001a4\u001b6\u001c8\u001d:\u001e<\u001f>\u0002@ B!D\"F#H$J%L&N\'",
    "P(R)T*V+X,Z-\\.^\u0002`/b0d1f2h3\u0004\u0002\u0003\u0005\u0003\u0002",
    "2;\u0004\u0002C\\c|\u0005\u0002\u000b\f\u000f\u000f\"\"\u0002\u018a",
    "\u0002\u0004\u0003\u0002\u0002\u0002\u0002\u0006\u0003\u0002\u0002\u0002",
    "\u0002\b\u0003\u0002\u0002\u0002\u0002\n\u0003\u0002\u0002\u0002\u0002",
    "\f\u0003\u0002\u0002\u0002\u0002\u000e\u0003\u0002\u0002\u0002\u0002",
    "\u0010\u0003\u0002\u0002\u0002\u0002\u0012\u0003\u0002\u0002\u0002\u0002",
    "\u0014\u0003\u0002\u0002\u0002\u0002\u0016\u0003\u0002\u0002\u0002\u0002",
    "\u0018\u0003\u0002\u0002\u0002\u0002\u001a\u0003\u0002\u0002\u0002\u0002",
    "\u001c\u0003\u0002\u0002\u0002\u0002\u001e\u0003\u0002\u0002\u0002\u0002",
    " \u0003\u0002\u0002\u0002\u0002\"\u0003\u0002\u0002\u0002\u0002$\u0003",
    "\u0002\u0002\u0002\u0002&\u0003\u0002\u0002\u0002\u0002(\u0003\u0002",
    "\u0002\u0002\u0002*\u0003\u0002\u0002\u0002\u0002,\u0003\u0002\u0002",
    "\u0002\u0002.\u0003\u0002\u0002\u0002\u00020\u0003\u0002\u0002\u0002",
    "\u00022\u0003\u0002\u0002\u0002\u00024\u0003\u0002\u0002\u0002\u0002",
    "6\u0003\u0002\u0002\u0002\u00028\u0003\u0002\u0002\u0002\u0002:\u0003",
    "\u0002\u0002\u0002\u0002<\u0003\u0002\u0002\u0002\u0002@\u0003\u0002",
    "\u0002\u0002\u0002B\u0003\u0002\u0002\u0002\u0002D\u0003\u0002\u0002",
    "\u0002\u0002F\u0003\u0002\u0002\u0002\u0003H\u0003\u0002\u0002\u0002",
    "\u0003J\u0003\u0002\u0002\u0002\u0003L\u0003\u0002\u0002\u0002\u0003",
    "N\u0003\u0002\u0002\u0002\u0003P\u0003\u0002\u0002\u0002\u0003R\u0003",
    "\u0002\u0002\u0002\u0003T\u0003\u0002\u0002\u0002\u0003V\u0003\u0002",
    "\u0002\u0002\u0003X\u0003\u0002\u0002\u0002\u0003Z\u0003\u0002\u0002",
    "\u0002\u0003\\\u0003\u0002\u0002\u0002\u0003`\u0003\u0002\u0002\u0002",
    "\u0003b\u0003\u0002\u0002\u0002\u0003d\u0003\u0002\u0002\u0002\u0003",
    "f\u0003\u0002\u0002\u0002\u0003h\u0003\u0002\u0002\u0002\u0004j\u0003",
    "\u0002\u0002\u0002\u0006n\u0003\u0002\u0002\u0002\bp\u0003\u0002\u0002",
    "\u0002\nr\u0003\u0002\u0002\u0002\ft\u0003\u0002\u0002\u0002\u000ev",
    "\u0003\u0002\u0002\u0002\u0010x\u0003\u0002\u0002\u0002\u0012~\u0003",
    "\u0002\u0002\u0002\u0014\u0084\u0003\u0002\u0002\u0002\u0016\u008a\u0003",
    "\u0002\u0002\u0002\u0018\u008f\u0003\u0002\u0002\u0002\u001a\u0094\u0003",
    "\u0002\u0002\u0002\u001c\u0099\u0003\u0002\u0002\u0002\u001e\u009e\u0003",
    "\u0002\u0002\u0002 \u00a3\u0003\u0002\u0002\u0002\"\u00a8\u0003\u0002",
    "\u0002\u0002$\u00b0\u0003\u0002\u0002\u0002&\u00b8\u0003\u0002\u0002",
    "\u0002(\u00c0\u0003\u0002\u0002\u0002*\u00c6\u0003\u0002\u0002\u0002",
    ",\u00cc\u0003\u0002\u0002\u0002.\u00d2\u0003\u0002\u0002\u00020\u00d8",
    "\u0003\u0002\u0002\u00022\u00e0\u0003\u0002\u0002\u00024\u00e9\u0003",
    "\u0002\u0002\u00026\u00eb\u0003\u0002\u0002\u00028\u00ed\u0003\u0002",
    "\u0002\u0002:\u00ef\u0003\u0002\u0002\u0002<\u0108\u0003\u0002\u0002",
    "\u0002>\u010a\u0003\u0002\u0002\u0002@\u010d\u0003\u0002\u0002\u0002",
    "B\u0112\u0003\u0002\u0002\u0002D\u0118\u0003\u0002\u0002\u0002F\u011d",
    "\u0003\u0002\u0002\u0002H\u011f\u0003\u0002\u0002\u0002J\u0123\u0003",
    "\u0002\u0002\u0002L\u0129\u0003\u0002\u0002\u0002N\u012f\u0003\u0002",
    "\u0002\u0002P\u0135\u0003\u0002\u0002\u0002R\u0138\u0003\u0002\u0002",
    "\u0002T\u013c\u0003\u0002\u0002\u0002V\u013e\u0003\u0002\u0002\u0002",
    "X\u0140\u0003\u0002\u0002\u0002Z\u0142\u0003\u0002\u0002\u0002\\\u015b",
    "\u0003\u0002\u0002\u0002^\u015d\u0003\u0002\u0002\u0002`\u015f\u0003",
    "\u0002\u0002\u0002b\u0167\u0003\u0002\u0002\u0002d\u0171\u0003\u0002",
    "\u0002\u0002f\u0177\u0003\u0002\u0002\u0002h\u017c\u0003\u0002\u0002",
    "\u0002jk\u0007]\u0002\u0002kl\u0003\u0002\u0002\u0002lm\b\u0002\u0002",
    "\u0002m\u0005\u0003\u0002\u0002\u0002no\u0007=\u0002\u0002o\u0007\u0003",
    "\u0002\u0002\u0002pq\u0007}\u0002\u0002q\t\u0003\u0002\u0002\u0002r",
    "s\u0007\u007f\u0002\u0002s\u000b\u0003\u0002\u0002\u0002tu\u0007*\u0002",
    "\u0002u\r\u0003\u0002\u0002\u0002vw\u0007+\u0002\u0002w\u000f\u0003",
    "\u0002\u0002\u0002xy\u0007^\u0002\u0002yz\u0007h\u0002\u0002z{\u0007",
    "t\u0002\u0002{|\u0007c\u0002\u0002|}\u0007e\u0002\u0002}\u0011\u0003",
    "\u0002\u0002\u0002~\u007f\u0007^\u0002\u0002\u007f\u0080\u0007e\u0002",
    "\u0002\u0080\u0081\u0007f\u0002\u0002\u0081\u0082\u0007q\u0002\u0002",
    "\u0082\u0083\u0007v\u0002\u0002\u0083\u0013\u0003\u0002\u0002\u0002",
    "\u0084\u0085\u0007^\u0002\u0002\u0085\u0086\u0007u\u0002\u0002\u0086",
    "\u0087\u0007s\u0002\u0002\u0087\u0088\u0007t\u0002\u0002\u0088\u0089",
    "\u0007v\u0002\u0002\u0089\u0015\u0003\u0002\u0002\u0002\u008a\u008b",
    "\u0007^\u0002\u0002\u008b\u008c\u0007u\u0002\u0002\u008c\u008d\u0007",
    "k\u0002\u0002\u008d\u008e\u0007p\u0002\u0002\u008e\u0017\u0003\u0002",
    "\u0002\u0002\u008f\u0090\u0007^\u0002\u0002\u0090\u0091\u0007e\u0002",
    "\u0002\u0091\u0092\u0007q\u0002\u0002\u0092\u0093\u0007u\u0002\u0002",
    "\u0093\u0019\u0003\u0002\u0002\u0002\u0094\u0095\u0007^\u0002\u0002",
    "\u0095\u0096\u0007v\u0002\u0002\u0096\u0097\u0007c\u0002\u0002\u0097",
    "\u0098\u0007p\u0002\u0002\u0098\u001b\u0003\u0002\u0002\u0002\u0099",
    "\u009a\u0007^\u0002\u0002\u009a\u009b\u0007e\u0002\u0002\u009b\u009c",
    "\u0007q\u0002\u0002\u009c\u009d\u0007v\u0002\u0002\u009d\u001d\u0003",
    "\u0002\u0002\u0002\u009e\u009f\u0007^\u0002\u0002\u009f\u00a0\u0007",
    "u\u0002\u0002\u00a0\u00a1\u0007g\u0002\u0002\u00a1\u00a2\u0007e\u0002",
    "\u0002\u00a2\u001f\u0003\u0002\u0002\u0002\u00a3\u00a4\u0007^\u0002",
    "\u0002\u00a4\u00a5\u0007e\u0002\u0002\u00a5\u00a6\u0007u\u0002\u0002",
    "\u00a6\u00a7\u0007e\u0002\u0002\u00a7!\u0003\u0002\u0002\u0002\u00a8",
    "\u00a9\u0007^\u0002\u0002\u00a9\u00aa\u0007c\u0002\u0002\u00aa\u00ab",
    "\u0007t\u0002\u0002\u00ab\u00ac\u0007e\u0002\u0002\u00ac\u00ad\u0007",
    "u\u0002\u0002\u00ad\u00ae\u0007k\u0002\u0002\u00ae\u00af\u0007p\u0002",
    "\u0002\u00af#\u0003\u0002\u0002\u0002\u00b0\u00b1\u0007^\u0002\u0002",
    "\u00b1\u00b2\u0007c\u0002\u0002\u00b2\u00b3\u0007t\u0002\u0002\u00b3",
    "\u00b4\u0007e\u0002\u0002\u00b4\u00b5\u0007e\u0002\u0002\u00b5\u00b6",
    "\u0007q\u0002\u0002\u00b6\u00b7\u0007u\u0002\u0002\u00b7%\u0003\u0002",
    "\u0002\u0002\u00b8\u00b9\u0007^\u0002\u0002\u00b9\u00ba\u0007c\u0002",
    "\u0002\u00ba\u00bb\u0007t\u0002\u0002\u00bb\u00bc\u0007e\u0002\u0002",
    "\u00bc\u00bd\u0007v\u0002\u0002\u00bd\u00be\u0007c\u0002\u0002\u00be",
    "\u00bf\u0007p\u0002\u0002\u00bf\'\u0003\u0002\u0002\u0002\u00c0\u00c1",
    "\u0007^\u0002\u0002\u00c1\u00c2\u0007u\u0002\u0002\u00c2\u00c3\u0007",
    "k\u0002\u0002\u00c3\u00c4\u0007p\u0002\u0002\u00c4\u00c5\u0007j\u0002",
    "\u0002\u00c5)\u0003\u0002\u0002\u0002\u00c6\u00c7\u0007^\u0002\u0002",
    "\u00c7\u00c8\u0007e\u0002\u0002\u00c8\u00c9\u0007q\u0002\u0002\u00c9",
    "\u00ca\u0007u\u0002\u0002\u00ca\u00cb\u0007j\u0002\u0002\u00cb+\u0003",
    "\u0002\u0002\u0002\u00cc\u00cd\u0007^\u0002\u0002\u00cd\u00ce\u0007",
    "v\u0002\u0002\u00ce\u00cf\u0007c\u0002\u0002\u00cf\u00d0\u0007p\u0002",
    "\u0002\u00d0\u00d1\u0007j\u0002\u0002\u00d1-\u0003\u0002\u0002\u0002",
    "\u00d2\u00d3\u0007^\u0002\u0002\u00d3\u00d4\u0007e\u0002\u0002\u00d4",
    "\u00d5\u0007q\u0002\u0002\u00d5\u00d6\u0007v\u0002\u0002\u00d6\u00d7",
    "\u0007j\u0002\u0002\u00d7/\u0003\u0002\u0002\u0002\u00d8\u00d9\u0007",
    "^\u0002\u0002\u00d9\u00da\u0007n\u0002\u0002\u00da\u00db\u0007g\u0002",
    "\u0002\u00db\u00dc\u0007h\u0002\u0002\u00dc\u00dd\u0007v\u0002\u0002",
    "\u00dd\u00de\u0003\u0002\u0002\u0002\u00de\u00df\b\u0018\u0003\u0002",
    "\u00df1\u0003\u0002\u0002\u0002\u00e0\u00e1\u0007^\u0002\u0002\u00e1",
    "\u00e2\u0007t\u0002\u0002\u00e2\u00e3\u0007k\u0002\u0002\u00e3\u00e4",
    "\u0007i\u0002\u0002\u00e4\u00e5\u0007j\u0002\u0002\u00e5\u00e6\u0007",
    "v\u0002\u0002\u00e6\u00e7\u0003\u0002\u0002\u0002\u00e7\u00e8\b\u0019",
    "\u0003\u0002\u00e83\u0003\u0002\u0002\u0002\u00e9\u00ea\u0007-\u0002",
    "\u0002\u00ea5\u0003\u0002\u0002\u0002\u00eb\u00ec\u0007/\u0002\u0002",
    "\u00ec7\u0003\u0002\u0002\u0002\u00ed\u00ee\u0007`\u0002\u0002\u00ee",
    "9\u0003\u0002\u0002\u0002\u00ef\u00f0\u0007?\u0002\u0002\u00f0;\u0003",
    "\u0002\u0002\u0002\u00f1\u00f3\u0005>\u001f\u0002\u00f2\u00f1\u0003",
    "\u0002\u0002\u0002\u00f3\u00f4\u0003\u0002\u0002\u0002\u00f4\u00f2\u0003",
    "\u0002\u0002\u0002\u00f4\u00f5\u0003\u0002\u0002\u0002\u00f5\u00f6\u0003",
    "\u0002\u0002\u0002\u00f6\u00fa\u00070\u0002\u0002\u00f7\u00f9\u0005",
    ">\u001f\u0002\u00f8\u00f7\u0003\u0002\u0002\u0002\u00f9\u00fc\u0003",
    "\u0002\u0002\u0002\u00fa\u00f8\u0003\u0002\u0002\u0002\u00fa\u00fb\u0003",
    "\u0002\u0002\u0002\u00fb\u0109\u0003\u0002\u0002\u0002\u00fc\u00fa\u0003",
    "\u0002\u0002\u0002\u00fd\u00ff\u00070\u0002\u0002\u00fe\u0100\u0005",
    ">\u001f\u0002\u00ff\u00fe\u0003\u0002\u0002\u0002\u0100\u0101\u0003",
    "\u0002\u0002\u0002\u0101\u00ff\u0003\u0002\u0002\u0002\u0101\u0102\u0003",
    "\u0002\u0002\u0002\u0102\u0109\u0003\u0002\u0002\u0002\u0103\u0105\u0005",
    ">\u001f\u0002\u0104\u0103\u0003\u0002\u0002\u0002\u0105\u0106\u0003",
    "\u0002\u0002\u0002\u0106\u0104\u0003\u0002\u0002\u0002\u0106\u0107\u0003",
    "\u0002\u0002\u0002\u0107\u0109\u0003\u0002\u0002\u0002\u0108\u00f2\u0003",
    "\u0002\u0002\u0002\u0108\u00fd\u0003\u0002\u0002\u0002\u0108\u0104\u0003",
    "\u0002\u0002\u0002\u0109=\u0003\u0002\u0002\u0002\u010a\u010b\t\u0002",
    "\u0002\u0002\u010b?\u0003\u0002\u0002\u0002\u010c\u010e\t\u0003\u0002",
    "\u0002\u010d\u010c\u0003\u0002\u0002\u0002\u010e\u010f\u0003\u0002\u0002",
    "\u0002\u010f\u010d\u0003\u0002\u0002\u0002\u010f\u0110\u0003\u0002\u0002",
    "\u0002\u0110A\u0003\u0002\u0002\u0002\u0111\u0113\t\u0004\u0002\u0002",
    "\u0112\u0111\u0003\u0002\u0002\u0002\u0113\u0114\u0003\u0002\u0002\u0002",
    "\u0114\u0112\u0003\u0002\u0002\u0002\u0114\u0115\u0003\u0002\u0002\u0002",
    "\u0115\u0116\u0003\u0002\u0002\u0002\u0116\u0117\b!\u0003\u0002\u0117",
    "C\u0003\u0002\u0002\u0002\u0118\u0119\u0007^\u0002\u0002\u0119\u011a",
    "\u0007\"\u0002\u0002\u011a\u011b\u0003\u0002\u0002\u0002\u011b\u011c",
    "\b\"\u0003\u0002\u011cE\u0003\u0002\u0002\u0002\u011d\u011e\u000b\u0002",
    "\u0002\u0002\u011eG\u0003\u0002\u0002\u0002\u011f\u0120\u0007_\u0002",
    "\u0002\u0120\u0121\u0003\u0002\u0002\u0002\u0121\u0122\b$\u0004\u0002",
    "\u0122I\u0003\u0002\u0002\u0002\u0123\u0124\u0007^\u0002\u0002\u0124",
    "\u0125\u0007h\u0002\u0002\u0125\u0126\u0007t\u0002\u0002\u0126\u0127",
    "\u0007c\u0002\u0002\u0127\u0128\u0007e\u0002\u0002\u0128K\u0003\u0002",
    "\u0002\u0002\u0129\u012a\u0007^\u0002\u0002\u012a\u012b\u0007e\u0002",
    "\u0002\u012b\u012c\u0007f\u0002\u0002\u012c\u012d\u0007q\u0002\u0002",
    "\u012d\u012e\u0007v\u0002\u0002\u012eM\u0003\u0002\u0002\u0002\u012f",
    "\u0130\u0007^\u0002\u0002\u0130\u0131\u0007u\u0002\u0002\u0131\u0132",
    "\u0007s\u0002\u0002\u0132\u0133\u0007t\u0002\u0002\u0133\u0134\u0007",
    "v\u0002\u0002\u0134O\u0003\u0002\u0002\u0002\u0135\u0136\u0007`\u0002",
    "\u0002\u0136Q\u0003\u0002\u0002\u0002\u0137\u0139\t\u0003\u0002\u0002",
    "\u0138\u0137\u0003\u0002\u0002\u0002\u0139\u013a\u0003\u0002\u0002\u0002",
    "\u013a\u0138\u0003\u0002\u0002\u0002\u013a\u013b\u0003\u0002\u0002\u0002",
    "\u013bS\u0003\u0002\u0002\u0002\u013c\u013d\u0007*\u0002\u0002\u013d",
    "U\u0003\u0002\u0002\u0002\u013e\u013f\u0007+\u0002\u0002\u013fW\u0003",
    "\u0002\u0002\u0002\u0140\u0141\u0007}\u0002\u0002\u0141Y\u0003\u0002",
    "\u0002\u0002\u0142\u0143\u0007\u007f\u0002\u0002\u0143[\u0003\u0002",
    "\u0002\u0002\u0144\u0146\u0005^/\u0002\u0145\u0144\u0003\u0002\u0002",
    "\u0002\u0146\u0147\u0003\u0002\u0002\u0002\u0147\u0145\u0003\u0002\u0002",
    "\u0002\u0147\u0148\u0003\u0002\u0002\u0002\u0148\u0149\u0003\u0002\u0002",
    "\u0002\u0149\u014d\u00070\u0002\u0002\u014a\u014c\u0005^/\u0002\u014b",
    "\u014a\u0003\u0002\u0002\u0002\u014c\u014f\u0003\u0002\u0002\u0002\u014d",
    "\u014b\u0003\u0002\u0002\u0002\u014d\u014e\u0003\u0002\u0002\u0002\u014e",
    "\u015c\u0003\u0002\u0002\u0002\u014f\u014d\u0003\u0002\u0002\u0002\u0150",
    "\u0152\u00070\u0002\u0002\u0151\u0153\u0005^/\u0002\u0152\u0151\u0003",
    "\u0002\u0002\u0002\u0153\u0154\u0003\u0002\u0002\u0002\u0154\u0152\u0003",
    "\u0002\u0002\u0002\u0154\u0155\u0003\u0002\u0002\u0002\u0155\u015c\u0003",
    "\u0002\u0002\u0002\u0156\u0158\u0005^/\u0002\u0157\u0156\u0003\u0002",
    "\u0002\u0002\u0158\u0159\u0003\u0002\u0002\u0002\u0159\u0157\u0003\u0002",
    "\u0002\u0002\u0159\u015a\u0003\u0002\u0002\u0002\u015a\u015c\u0003\u0002",
    "\u0002\u0002\u015b\u0145\u0003\u0002\u0002\u0002\u015b\u0150\u0003\u0002",
    "\u0002\u0002\u015b\u0157\u0003\u0002\u0002\u0002\u015c]\u0003\u0002",
    "\u0002\u0002\u015d\u015e\t\u0002\u0002\u0002\u015e_\u0003\u0002\u0002",
    "\u0002\u015f\u0160\u0007^\u0002\u0002\u0160\u0161\u0007n\u0002\u0002",
    "\u0161\u0162\u0007g\u0002\u0002\u0162\u0163\u0007h\u0002\u0002\u0163",
    "\u0164\u0007v\u0002\u0002\u0164\u0165\u0003\u0002\u0002\u0002\u0165",
    "\u0166\b0\u0003\u0002\u0166a\u0003\u0002\u0002\u0002\u0167\u0168\u0007",
    "^\u0002\u0002\u0168\u0169\u0007t\u0002\u0002\u0169\u016a\u0007k\u0002",
    "\u0002\u016a\u016b\u0007i\u0002\u0002\u016b\u016c\u0007j\u0002\u0002",
    "\u016c\u016d\u0007v\u0002\u0002\u016d\u016e\u0003\u0002\u0002\u0002",
    "\u016e\u016f\b1\u0003\u0002\u016fc\u0003\u0002\u0002\u0002\u0170\u0172",
    "\t\u0004\u0002\u0002\u0171\u0170\u0003\u0002\u0002\u0002\u0172\u0173",
    "\u0003\u0002\u0002\u0002\u0173\u0171\u0003\u0002\u0002\u0002\u0173\u0174",
    "\u0003\u0002\u0002\u0002\u0174\u0175\u0003\u0002\u0002\u0002\u0175\u0176",
    "\b2\u0003\u0002\u0176e\u0003\u0002\u0002\u0002\u0177\u0178\u0007^\u0002",
    "\u0002\u0178\u0179\u0007\"\u0002\u0002\u0179\u017a\u0003\u0002\u0002",
    "\u0002\u017a\u017b\b3\u0003\u0002\u017bg\u0003\u0002\u0002\u0002\u017c",
    "\u017d\u000b\u0002\u0002\u0002\u017di\u0003\u0002\u0002\u0002\u0012",
    "\u0002\u0003\u00f4\u00fa\u0101\u0106\u0108\u010f\u0114\u013a\u0147\u014d",
    "\u0154\u0159\u015b\u0173\u0005\u0004\u0003\u0002\b\u0002\u0002\u0004",
    "\u0002\u0002"].join("");


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

export default class LatexLexer extends antlr4.Lexer {

    static grammarFileName = "LatexLexer.g4";
    static channelNames = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];
	static modeNames = [ "DEFAULT_MODE", "UNITS" ];
	static literalNames = [ null, "'['", "';'", null, null, null, null, null, 
                         null, null, "'\\sin'", "'\\cos'", "'\\tan'", "'\\cot'", 
                         "'\\sec'", "'\\csc'", "'\\arcsin'", "'\\arccos'", 
                         "'\\arctan'", "'\\sinh'", "'\\cosh'", "'\\tanh'", 
                         "'\\coth'", null, null, "'+'", "'-'", null, "'='", 
                         null, null, null, null, null, "']'" ];
	static symbolicNames = [ null, "L_BRACKET", "SEMICOLON", "L_BRACE", "R_BRACE", 
                          "L_PAREN", "R_PAREN", "CMD_FRAC", "CMD_CDOT", 
                          "CMD_SQRT", "CMD_SIN", "CMD_COS", "CMD_TAN", "CMD_COT", 
                          "CMD_SEC", "CMD_CSC", "CMD_ARCSIN", "CMD_ARCCOS", 
                          "CMD_ARCTAN", "CMD_SINH", "CMD_COSH", "CMD_TANH", 
                          "CMD_COTH", "CMD_LEFT", "CMD_RIGHT", "ADD", "SUB", 
                          "CARET", "EQ", "NUMBER", "ID", "WS", "SLASH_SPACE", 
                          "ERROR_CHAR", "R_BRACKET", "U_CMD_FRAC", "U_CMD_CDOT", 
                          "U_CMD_SQRT", "U_CARET", "U_NAME", "U_L_PAREN", 
                          "U_R_PAREN", "U_L_BRACE", "U_R_BRACE", "U_NUMBER", 
                          "U_CMD_LEFT", "U_CMD_RIGHT", "U_WS", "U_SLASH_SPACE", 
                          "U_ERROR_CHAR" ];
	static ruleNames = [ "L_BRACKET", "SEMICOLON", "L_BRACE", "R_BRACE", "L_PAREN", 
                      "R_PAREN", "CMD_FRAC", "CMD_CDOT", "CMD_SQRT", "CMD_SIN", 
                      "CMD_COS", "CMD_TAN", "CMD_COT", "CMD_SEC", "CMD_CSC", 
                      "CMD_ARCSIN", "CMD_ARCCOS", "CMD_ARCTAN", "CMD_SINH", 
                      "CMD_COSH", "CMD_TANH", "CMD_COTH", "CMD_LEFT", "CMD_RIGHT", 
                      "ADD", "SUB", "CARET", "EQ", "NUMBER", "DIGIT", "ID", 
                      "WS", "SLASH_SPACE", "ERROR_CHAR", "R_BRACKET", "U_CMD_FRAC", 
                      "U_CMD_CDOT", "U_CMD_SQRT", "U_CARET", "U_NAME", "U_L_PAREN", 
                      "U_R_PAREN", "U_L_BRACE", "U_R_BRACE", "U_NUMBER", 
                      "U_DIGIT", "U_CMD_LEFT", "U_CMD_RIGHT", "U_WS", "U_SLASH_SPACE", 
                      "U_ERROR_CHAR" ];

    constructor(input) {
        super(input)
        this._interp = new antlr4.atn.LexerATNSimulator(this, atn, decisionsToDFA, new antlr4.PredictionContextCache());
    }

    get atn() {
        return atn;
    }
}

LatexLexer.EOF = antlr4.Token.EOF;
LatexLexer.L_BRACKET = 1;
LatexLexer.SEMICOLON = 2;
LatexLexer.L_BRACE = 3;
LatexLexer.R_BRACE = 4;
LatexLexer.L_PAREN = 5;
LatexLexer.R_PAREN = 6;
LatexLexer.CMD_FRAC = 7;
LatexLexer.CMD_CDOT = 8;
LatexLexer.CMD_SQRT = 9;
LatexLexer.CMD_SIN = 10;
LatexLexer.CMD_COS = 11;
LatexLexer.CMD_TAN = 12;
LatexLexer.CMD_COT = 13;
LatexLexer.CMD_SEC = 14;
LatexLexer.CMD_CSC = 15;
LatexLexer.CMD_ARCSIN = 16;
LatexLexer.CMD_ARCCOS = 17;
LatexLexer.CMD_ARCTAN = 18;
LatexLexer.CMD_SINH = 19;
LatexLexer.CMD_COSH = 20;
LatexLexer.CMD_TANH = 21;
LatexLexer.CMD_COTH = 22;
LatexLexer.CMD_LEFT = 23;
LatexLexer.CMD_RIGHT = 24;
LatexLexer.ADD = 25;
LatexLexer.SUB = 26;
LatexLexer.CARET = 27;
LatexLexer.EQ = 28;
LatexLexer.NUMBER = 29;
LatexLexer.ID = 30;
LatexLexer.WS = 31;
LatexLexer.SLASH_SPACE = 32;
LatexLexer.ERROR_CHAR = 33;
LatexLexer.R_BRACKET = 34;
LatexLexer.U_CMD_FRAC = 35;
LatexLexer.U_CMD_CDOT = 36;
LatexLexer.U_CMD_SQRT = 37;
LatexLexer.U_CARET = 38;
LatexLexer.U_NAME = 39;
LatexLexer.U_L_PAREN = 40;
LatexLexer.U_R_PAREN = 41;
LatexLexer.U_L_BRACE = 42;
LatexLexer.U_R_BRACE = 43;
LatexLexer.U_NUMBER = 44;
LatexLexer.U_CMD_LEFT = 45;
LatexLexer.U_CMD_RIGHT = 46;
LatexLexer.U_WS = 47;
LatexLexer.U_SLASH_SPACE = 48;
LatexLexer.U_ERROR_CHAR = 49;

LatexLexer.UNITS = 1;




