// Generated from LatexLexer.g4 by ANTLR 4.9.1
// jshint ignore: start
import antlr4 from 'antlr4';



const serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786",
    "\u5964\u0002\"\u0100\b\u0001\b\u0001\u0004\u0002\t\u0002\u0004\u0003",
    "\t\u0003\u0004\u0004\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006",
    "\u0004\u0007\t\u0007\u0004\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b",
    "\t\u000b\u0004\f\t\f\u0004\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f",
    "\u0004\u0010\t\u0010\u0004\u0011\t\u0011\u0004\u0012\t\u0012\u0004\u0013",
    "\t\u0013\u0004\u0014\t\u0014\u0004\u0015\t\u0015\u0004\u0016\t\u0016",
    "\u0004\u0017\t\u0017\u0004\u0018\t\u0018\u0004\u0019\t\u0019\u0004\u001a",
    "\t\u001a\u0004\u001b\t\u001b\u0004\u001c\t\u001c\u0004\u001d\t\u001d",
    "\u0004\u001e\t\u001e\u0004\u001f\t\u001f\u0004 \t \u0004!\t!\u0004\"",
    "\t\"\u0004#\t#\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0002\u0003",
    "\u0003\u0003\u0003\u0003\u0004\u0003\u0004\u0003\u0005\u0003\u0005\u0003",
    "\u0006\u0003\u0006\u0003\u0007\u0003\u0007\u0003\b\u0003\b\u0003\b\u0003",
    "\b\u0003\b\u0003\b\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003",
    "\n\u0003\n\u0003\n\u0003\n\u0003\n\u0003\n\u0003\u000b\u0003\u000b\u0003",
    "\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0003",
    "\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003",
    "\r\u0003\r\u0003\u000e\u0003\u000e\u0003\u000f\u0003\u000f\u0003\u0010",
    "\u0003\u0010\u0003\u0011\u0006\u0011\u0083\n\u0011\r\u0011\u000e\u0011",
    "\u0084\u0003\u0011\u0003\u0011\u0007\u0011\u0089\n\u0011\f\u0011\u000e",
    "\u0011\u008c\u000b\u0011\u0003\u0011\u0003\u0011\u0006\u0011\u0090\n",
    "\u0011\r\u0011\u000e\u0011\u0091\u0003\u0011\u0006\u0011\u0095\n\u0011",
    "\r\u0011\u000e\u0011\u0096\u0005\u0011\u0099\n\u0011\u0003\u0012\u0003",
    "\u0012\u0003\u0013\u0006\u0013\u009e\n\u0013\r\u0013\u000e\u0013\u009f",
    "\u0003\u0014\u0006\u0014\u00a3\n\u0014\r\u0014\u000e\u0014\u00a4\u0003",
    "\u0014\u0003\u0014\u0003\u0015\u0006\u0015\u00aa\n\u0015\r\u0015\u000e",
    "\u0015\u00ab\u0003\u0015\u0003\u0015\u0003\u0016\u0003\u0016\u0003\u0016",
    "\u0003\u0016\u0003\u0016\u0003\u0016\u0003\u0016\u0003\u0016\u0003\u0017",
    "\u0003\u0017\u0003\u0017\u0003\u0017\u0003\u0017\u0003\u0017\u0003\u0017",
    "\u0003\u0017\u0003\u0017\u0003\u0018\u0003\u0018\u0003\u0018\u0003\u0018",
    "\u0003\u0019\u0003\u0019\u0003\u0019\u0003\u0019\u0003\u0019\u0003\u0019",
    "\u0003\u001a\u0003\u001a\u0003\u001a\u0003\u001a\u0003\u001a\u0003\u001a",
    "\u0003\u001b\u0003\u001b\u0003\u001b\u0003\u001b\u0003\u001b\u0003\u001b",
    "\u0003\u001c\u0003\u001c\u0003\u001d\u0006\u001d\u00da\n\u001d\r\u001d",
    "\u000e\u001d\u00db\u0003\u001e\u0003\u001e\u0003\u001f\u0003\u001f\u0003",
    " \u0003 \u0003!\u0003!\u0003\"\u0006\"\u00e7\n\"\r\"\u000e\"\u00e8\u0003",
    "\"\u0003\"\u0007\"\u00ed\n\"\f\"\u000e\"\u00f0\u000b\"\u0003\"\u0003",
    "\"\u0006\"\u00f4\n\"\r\"\u000e\"\u00f5\u0003\"\u0006\"\u00f9\n\"\r\"",
    "\u000e\"\u00fa\u0005\"\u00fd\n\"\u0003#\u0003#\u0002\u0002$\u0004\u0003",
    "\u0006\u0004\b\u0005\n\u0006\f\u0007\u000e\b\u0010\t\u0012\n\u0014\u000b",
    "\u0016\f\u0018\r\u001a\u000e\u001c\u000f\u001e\u0010 \u0011\"\u0012",
    "$\u0002&\u0013(\u0014*\u0015,\u0016.\u00170\u00182\u00194\u001a6\u001b",
    "8\u001c:\u001d<\u001e>\u001f@ B!D\"F\u0002\u0004\u0002\u0003\u0005\u0003",
    "\u00022;\u0004\u0002C\\c|\u0005\u0002\u000b\f\u000f\u000f\"\"\u0002",
    "\u010c\u0002\u0004\u0003\u0002\u0002\u0002\u0002\u0006\u0003\u0002\u0002",
    "\u0002\u0002\b\u0003\u0002\u0002\u0002\u0002\n\u0003\u0002\u0002\u0002",
    "\u0002\f\u0003\u0002\u0002\u0002\u0002\u000e\u0003\u0002\u0002\u0002",
    "\u0002\u0010\u0003\u0002\u0002\u0002\u0002\u0012\u0003\u0002\u0002\u0002",
    "\u0002\u0014\u0003\u0002\u0002\u0002\u0002\u0016\u0003\u0002\u0002\u0002",
    "\u0002\u0018\u0003\u0002\u0002\u0002\u0002\u001a\u0003\u0002\u0002\u0002",
    "\u0002\u001c\u0003\u0002\u0002\u0002\u0002\u001e\u0003\u0002\u0002\u0002",
    "\u0002 \u0003\u0002\u0002\u0002\u0002\"\u0003\u0002\u0002\u0002\u0002",
    "&\u0003\u0002\u0002\u0002\u0002(\u0003\u0002\u0002\u0002\u0003*\u0003",
    "\u0002\u0002\u0002\u0003,\u0003\u0002\u0002\u0002\u0003.\u0003\u0002",
    "\u0002\u0002\u00030\u0003\u0002\u0002\u0002\u00032\u0003\u0002\u0002",
    "\u0002\u00034\u0003\u0002\u0002\u0002\u00036\u0003\u0002\u0002\u0002",
    "\u00038\u0003\u0002\u0002\u0002\u0003:\u0003\u0002\u0002\u0002\u0003",
    "<\u0003\u0002\u0002\u0002\u0003>\u0003\u0002\u0002\u0002\u0003@\u0003",
    "\u0002\u0002\u0002\u0003B\u0003\u0002\u0002\u0002\u0003D\u0003\u0002",
    "\u0002\u0002\u0004H\u0003\u0002\u0002\u0002\u0006L\u0003\u0002\u0002",
    "\u0002\bN\u0003\u0002\u0002\u0002\nP\u0003\u0002\u0002\u0002\fR\u0003",
    "\u0002\u0002\u0002\u000eT\u0003\u0002\u0002\u0002\u0010V\u0003\u0002",
    "\u0002\u0002\u0012\\\u0003\u0002\u0002\u0002\u0014b\u0003\u0002\u0002",
    "\u0002\u0016h\u0003\u0002\u0002\u0002\u0018p\u0003\u0002\u0002\u0002",
    "\u001ay\u0003\u0002\u0002\u0002\u001c{\u0003\u0002\u0002\u0002\u001e",
    "}\u0003\u0002\u0002\u0002 \u007f\u0003\u0002\u0002\u0002\"\u0098\u0003",
    "\u0002\u0002\u0002$\u009a\u0003\u0002\u0002\u0002&\u009d\u0003\u0002",
    "\u0002\u0002(\u00a2\u0003\u0002\u0002\u0002*\u00a9\u0003\u0002\u0002",
    "\u0002,\u00af\u0003\u0002\u0002\u0002.\u00b7\u0003\u0002\u0002\u0002",
    "0\u00c0\u0003\u0002\u0002\u00022\u00c4\u0003\u0002\u0002\u00024\u00ca",
    "\u0003\u0002\u0002\u00026\u00d0\u0003\u0002\u0002\u00028\u00d6\u0003",
    "\u0002\u0002\u0002:\u00d9\u0003\u0002\u0002\u0002<\u00dd\u0003\u0002",
    "\u0002\u0002>\u00df\u0003\u0002\u0002\u0002@\u00e1\u0003\u0002\u0002",
    "\u0002B\u00e3\u0003\u0002\u0002\u0002D\u00fc\u0003\u0002\u0002\u0002",
    "F\u00fe\u0003\u0002\u0002\u0002HI\u0007]\u0002\u0002IJ\u0003\u0002\u0002",
    "\u0002JK\b\u0002\u0002\u0002K\u0005\u0003\u0002\u0002\u0002LM\u0007",
    "=\u0002\u0002M\u0007\u0003\u0002\u0002\u0002NO\u0007}\u0002\u0002O\t",
    "\u0003\u0002\u0002\u0002PQ\u0007\u007f\u0002\u0002Q\u000b\u0003\u0002",
    "\u0002\u0002RS\u0007*\u0002\u0002S\r\u0003\u0002\u0002\u0002TU\u0007",
    "+\u0002\u0002U\u000f\u0003\u0002\u0002\u0002VW\u0007^\u0002\u0002WX",
    "\u0007h\u0002\u0002XY\u0007t\u0002\u0002YZ\u0007c\u0002\u0002Z[\u0007",
    "e\u0002\u0002[\u0011\u0003\u0002\u0002\u0002\\]\u0007^\u0002\u0002]",
    "^\u0007e\u0002\u0002^_\u0007f\u0002\u0002_`\u0007q\u0002\u0002`a\u0007",
    "v\u0002\u0002a\u0013\u0003\u0002\u0002\u0002bc\u0007^\u0002\u0002cd",
    "\u0007u\u0002\u0002de\u0007s\u0002\u0002ef\u0007t\u0002\u0002fg\u0007",
    "v\u0002\u0002g\u0015\u0003\u0002\u0002\u0002hi\u0007^\u0002\u0002ij",
    "\u0007n\u0002\u0002jk\u0007g\u0002\u0002kl\u0007h\u0002\u0002lm\u0007",
    "v\u0002\u0002mn\u0003\u0002\u0002\u0002no\b\u000b\u0003\u0002o\u0017",
    "\u0003\u0002\u0002\u0002pq\u0007^\u0002\u0002qr\u0007t\u0002\u0002r",
    "s\u0007k\u0002\u0002st\u0007i\u0002\u0002tu\u0007j\u0002\u0002uv\u0007",
    "v\u0002\u0002vw\u0003\u0002\u0002\u0002wx\b\f\u0003\u0002x\u0019\u0003",
    "\u0002\u0002\u0002yz\u0007-\u0002\u0002z\u001b\u0003\u0002\u0002\u0002",
    "{|\u0007/\u0002\u0002|\u001d\u0003\u0002\u0002\u0002}~\u0007`\u0002",
    "\u0002~\u001f\u0003\u0002\u0002\u0002\u007f\u0080\u0007?\u0002\u0002",
    "\u0080!\u0003\u0002\u0002\u0002\u0081\u0083\u0005$\u0012\u0002\u0082",
    "\u0081\u0003\u0002\u0002\u0002\u0083\u0084\u0003\u0002\u0002\u0002\u0084",
    "\u0082\u0003\u0002\u0002\u0002\u0084\u0085\u0003\u0002\u0002\u0002\u0085",
    "\u0086\u0003\u0002\u0002\u0002\u0086\u008a\u00070\u0002\u0002\u0087",
    "\u0089\u0005$\u0012\u0002\u0088\u0087\u0003\u0002\u0002\u0002\u0089",
    "\u008c\u0003\u0002\u0002\u0002\u008a\u0088\u0003\u0002\u0002\u0002\u008a",
    "\u008b\u0003\u0002\u0002\u0002\u008b\u0099\u0003\u0002\u0002\u0002\u008c",
    "\u008a\u0003\u0002\u0002\u0002\u008d\u008f\u00070\u0002\u0002\u008e",
    "\u0090\u0005$\u0012\u0002\u008f\u008e\u0003\u0002\u0002\u0002\u0090",
    "\u0091\u0003\u0002\u0002\u0002\u0091\u008f\u0003\u0002\u0002\u0002\u0091",
    "\u0092\u0003\u0002\u0002\u0002\u0092\u0099\u0003\u0002\u0002\u0002\u0093",
    "\u0095\u0005$\u0012\u0002\u0094\u0093\u0003\u0002\u0002\u0002\u0095",
    "\u0096\u0003\u0002\u0002\u0002\u0096\u0094\u0003\u0002\u0002\u0002\u0096",
    "\u0097\u0003\u0002\u0002\u0002\u0097\u0099\u0003\u0002\u0002\u0002\u0098",
    "\u0082\u0003\u0002\u0002\u0002\u0098\u008d\u0003\u0002\u0002\u0002\u0098",
    "\u0094\u0003\u0002\u0002\u0002\u0099#\u0003\u0002\u0002\u0002\u009a",
    "\u009b\t\u0002\u0002\u0002\u009b%\u0003\u0002\u0002\u0002\u009c\u009e",
    "\t\u0003\u0002\u0002\u009d\u009c\u0003\u0002\u0002\u0002\u009e\u009f",
    "\u0003\u0002\u0002\u0002\u009f\u009d\u0003\u0002\u0002\u0002\u009f\u00a0",
    "\u0003\u0002\u0002\u0002\u00a0\'\u0003\u0002\u0002\u0002\u00a1\u00a3",
    "\t\u0004\u0002\u0002\u00a2\u00a1\u0003\u0002\u0002\u0002\u00a3\u00a4",
    "\u0003\u0002\u0002\u0002\u00a4\u00a2\u0003\u0002\u0002\u0002\u00a4\u00a5",
    "\u0003\u0002\u0002\u0002\u00a5\u00a6\u0003\u0002\u0002\u0002\u00a6\u00a7",
    "\b\u0014\u0003\u0002\u00a7)\u0003\u0002\u0002\u0002\u00a8\u00aa\t\u0004",
    "\u0002\u0002\u00a9\u00a8\u0003\u0002\u0002\u0002\u00aa\u00ab\u0003\u0002",
    "\u0002\u0002\u00ab\u00a9\u0003\u0002\u0002\u0002\u00ab\u00ac\u0003\u0002",
    "\u0002\u0002\u00ac\u00ad\u0003\u0002\u0002\u0002\u00ad\u00ae\b\u0015",
    "\u0003\u0002\u00ae+\u0003\u0002\u0002\u0002\u00af\u00b0\u0007^\u0002",
    "\u0002\u00b0\u00b1\u0007n\u0002\u0002\u00b1\u00b2\u0007g\u0002\u0002",
    "\u00b2\u00b3\u0007h\u0002\u0002\u00b3\u00b4\u0007v\u0002\u0002\u00b4",
    "\u00b5\u0003\u0002\u0002\u0002\u00b5\u00b6\b\u0016\u0003\u0002\u00b6",
    "-\u0003\u0002\u0002\u0002\u00b7\u00b8\u0007^\u0002\u0002\u00b8\u00b9",
    "\u0007t\u0002\u0002\u00b9\u00ba\u0007k\u0002\u0002\u00ba\u00bb\u0007",
    "i\u0002\u0002\u00bb\u00bc\u0007j\u0002\u0002\u00bc\u00bd\u0007v\u0002",
    "\u0002\u00bd\u00be\u0003\u0002\u0002\u0002\u00be\u00bf\b\u0017\u0003",
    "\u0002\u00bf/\u0003\u0002\u0002\u0002\u00c0\u00c1\u0007_\u0002\u0002",
    "\u00c1\u00c2\u0003\u0002\u0002\u0002\u00c2\u00c3\b\u0018\u0004\u0002",
    "\u00c31\u0003\u0002\u0002\u0002\u00c4\u00c5\u0007^\u0002\u0002\u00c5",
    "\u00c6\u0007h\u0002\u0002\u00c6\u00c7\u0007t\u0002\u0002\u00c7\u00c8",
    "\u0007c\u0002\u0002\u00c8\u00c9\u0007e\u0002\u0002\u00c93\u0003\u0002",
    "\u0002\u0002\u00ca\u00cb\u0007^\u0002\u0002\u00cb\u00cc\u0007e\u0002",
    "\u0002\u00cc\u00cd\u0007f\u0002\u0002\u00cd\u00ce\u0007q\u0002\u0002",
    "\u00ce\u00cf\u0007v\u0002\u0002\u00cf5\u0003\u0002\u0002\u0002\u00d0",
    "\u00d1\u0007^\u0002\u0002\u00d1\u00d2\u0007u\u0002\u0002\u00d2\u00d3",
    "\u0007s\u0002\u0002\u00d3\u00d4\u0007t\u0002\u0002\u00d4\u00d5\u0007",
    "v\u0002\u0002\u00d57\u0003\u0002\u0002\u0002\u00d6\u00d7\u0007`\u0002",
    "\u0002\u00d79\u0003\u0002\u0002\u0002\u00d8\u00da\t\u0003\u0002\u0002",
    "\u00d9\u00d8\u0003\u0002\u0002\u0002\u00da\u00db\u0003\u0002\u0002\u0002",
    "\u00db\u00d9\u0003\u0002\u0002\u0002\u00db\u00dc\u0003\u0002\u0002\u0002",
    "\u00dc;\u0003\u0002\u0002\u0002\u00dd\u00de\u0007*\u0002\u0002\u00de",
    "=\u0003\u0002\u0002\u0002\u00df\u00e0\u0007+\u0002\u0002\u00e0?\u0003",
    "\u0002\u0002\u0002\u00e1\u00e2\u0007}\u0002\u0002\u00e2A\u0003\u0002",
    "\u0002\u0002\u00e3\u00e4\u0007\u007f\u0002\u0002\u00e4C\u0003\u0002",
    "\u0002\u0002\u00e5\u00e7\u0005F#\u0002\u00e6\u00e5\u0003\u0002\u0002",
    "\u0002\u00e7\u00e8\u0003\u0002\u0002\u0002\u00e8\u00e6\u0003\u0002\u0002",
    "\u0002\u00e8\u00e9\u0003\u0002\u0002\u0002\u00e9\u00ea\u0003\u0002\u0002",
    "\u0002\u00ea\u00ee\u00070\u0002\u0002\u00eb\u00ed\u0005F#\u0002\u00ec",
    "\u00eb\u0003\u0002\u0002\u0002\u00ed\u00f0\u0003\u0002\u0002\u0002\u00ee",
    "\u00ec\u0003\u0002\u0002\u0002\u00ee\u00ef\u0003\u0002\u0002\u0002\u00ef",
    "\u00fd\u0003\u0002\u0002\u0002\u00f0\u00ee\u0003\u0002\u0002\u0002\u00f1",
    "\u00f3\u00070\u0002\u0002\u00f2\u00f4\u0005F#\u0002\u00f3\u00f2\u0003",
    "\u0002\u0002\u0002\u00f4\u00f5\u0003\u0002\u0002\u0002\u00f5\u00f3\u0003",
    "\u0002\u0002\u0002\u00f5\u00f6\u0003\u0002\u0002\u0002\u00f6\u00fd\u0003",
    "\u0002\u0002\u0002\u00f7\u00f9\u0005F#\u0002\u00f8\u00f7\u0003\u0002",
    "\u0002\u0002\u00f9\u00fa\u0003\u0002\u0002\u0002\u00fa\u00f8\u0003\u0002",
    "\u0002\u0002\u00fa\u00fb\u0003\u0002\u0002\u0002\u00fb\u00fd\u0003\u0002",
    "\u0002\u0002\u00fc\u00e6\u0003\u0002\u0002\u0002\u00fc\u00f1\u0003\u0002",
    "\u0002\u0002\u00fc\u00f8\u0003\u0002\u0002\u0002\u00fdE\u0003\u0002",
    "\u0002\u0002\u00fe\u00ff\t\u0002\u0002\u0002\u00ffG\u0003\u0002\u0002",
    "\u0002\u0012\u0002\u0003\u0084\u008a\u0091\u0096\u0098\u009f\u00a4\u00ab",
    "\u00db\u00e8\u00ee\u00f5\u00fa\u00fc\u0005\u0004\u0003\u0002\b\u0002",
    "\u0002\u0004\u0002\u0002"].join("");


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

export default class LatexLexer extends antlr4.Lexer {

    static grammarFileName = "LatexLexer.g4";
    static channelNames = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];
	static modeNames = [ "DEFAULT_MODE", "UNITS" ];
	static literalNames = [ null, "'['", "';'", null, null, null, null, null, 
                         null, null, null, null, "'+'", "'-'", null, "'='", 
                         null, null, null, null, null, null, "']'" ];
	static symbolicNames = [ null, "L_BRACKET", "SEMICOLON", "L_BRACE", "R_BRACE", 
                          "L_PAREN", "R_PAREN", "CMD_FRAC", "CMD_CDOT", 
                          "CMD_SQRT", "CMD_LEFT", "CMD_RIGHT", "ADD", "SUB", 
                          "CARET", "EQ", "NUMBER", "ID", "WS", "U_WS", "U_CMD_LEFT", 
                          "U_CMD_RIGHT", "R_BRACKET", "U_CMD_FRAC", "U_CMD_CDOT", 
                          "U_CMD_SQRT", "U_CARET", "U_NAME", "U_L_PAREN", 
                          "U_R_PAREN", "U_L_BRACE", "U_R_BRACE", "U_NUMBER" ];
	static ruleNames = [ "L_BRACKET", "SEMICOLON", "L_BRACE", "R_BRACE", "L_PAREN", 
                      "R_PAREN", "CMD_FRAC", "CMD_CDOT", "CMD_SQRT", "CMD_LEFT", 
                      "CMD_RIGHT", "ADD", "SUB", "CARET", "EQ", "NUMBER", 
                      "DIGIT", "ID", "WS", "U_WS", "U_CMD_LEFT", "U_CMD_RIGHT", 
                      "R_BRACKET", "U_CMD_FRAC", "U_CMD_CDOT", "U_CMD_SQRT", 
                      "U_CARET", "U_NAME", "U_L_PAREN", "U_R_PAREN", "U_L_BRACE", 
                      "U_R_BRACE", "U_NUMBER", "U_DIGIT" ];

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
LatexLexer.CMD_LEFT = 10;
LatexLexer.CMD_RIGHT = 11;
LatexLexer.ADD = 12;
LatexLexer.SUB = 13;
LatexLexer.CARET = 14;
LatexLexer.EQ = 15;
LatexLexer.NUMBER = 16;
LatexLexer.ID = 17;
LatexLexer.WS = 18;
LatexLexer.U_WS = 19;
LatexLexer.U_CMD_LEFT = 20;
LatexLexer.U_CMD_RIGHT = 21;
LatexLexer.R_BRACKET = 22;
LatexLexer.U_CMD_FRAC = 23;
LatexLexer.U_CMD_CDOT = 24;
LatexLexer.U_CMD_SQRT = 25;
LatexLexer.U_CARET = 26;
LatexLexer.U_NAME = 27;
LatexLexer.U_L_PAREN = 28;
LatexLexer.U_R_PAREN = 29;
LatexLexer.U_L_BRACE = 30;
LatexLexer.U_R_BRACE = 31;
LatexLexer.U_NUMBER = 32;

LatexLexer.UNITS = 1;




