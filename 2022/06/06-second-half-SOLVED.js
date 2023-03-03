// part 2: we're looking for 14 consequetive different characters.

const example1 = `mjqjpqmgbljsphdztnvjfqwrcgsmlb`;
// example1: value: 19 => 5 repeated characters (mjqjp), 14 unique characters (qmgbljsphdztnv)
const example2 = `bvwbjplbgvbhsrlpgdmjqwftvncz`;
// example2: value: 23 =>  repeated characters (bvwbjplbg), 14 unique characters (vbhsrlpgdmjqwf)
const example3 = `nppdvjthqldpwncqszvftbrmjlhg`;
// example3: value: 23 =>  repeated characters (nppdvjthq), 14 unique characters (ldpwncqszvftbr)
const example4 = `nznrnfrfntjfmvfwmzdfjlvtqnbhcprsg`;
// example4: value: 29 =>  repeated characters (nznrnfrfntjfmv), 14 unique characters (fwmzdfjlvtqnbh)
const example5 = `zcfzfwzzqfrljwzlrfnpqdbhtmscgvjw`;
// example5: value: 26 =>  repeated characters (zcfzfwzzqf), 14 unique characters (rljwzlrfnpqdbh)
const example6 = `htsslsmstsrrhlrrllqppfnpnzzqtqtjqttslttmvmsmbbnpbbznzjjmrmsrrnjjzczcfcqchcnnhrnrzrnrzzddtrrpjrprbpbwbswsqswqswsqsqffgngtgwtwbtbbhhslsrsmrmffgcgtcgcppnbpnpbnpptcptpltthjhwwlttrrlldzldzzzlssccrfrqfrfdfldfldfdzfdzzcnznwznzqqzpqzqdzzbbslbljlqjjvzjzgzqgqqqvsvffzjfzfmzzrjrhjhrhcrhhtgtmggchggcsggvtttwmmsspmpffzpfpjjnwwnpwwdttcfcmmlblwlvvqrqddcdwcwnnfqnqdnnncggflfdftddtftqthqhrrmsrmsrsffbccjnnjjgddppjmmldllhttqvqzvzrvrsslnlplrprtprtttnvnsvsvzzdndrnnnlznzcnnzwwzjjsnjnwjwqqczqcqwqppqnqqllgblbhhbbzbjzzwjzzrqzqggdppgcgwcclglhhwwgcccgcvvpbbrzzwszsqqjqrrczzvmvpprllsgstsnnnrvvsszgzddzttbccmjccwtccrbccnssdqsdsqqfgqfqbfqfjqqzqqmhmwhwffsjjcjffqmmwjwhjjqttpvvgddzjdddwndwdjdldgdsdmdzmdzmzqqszzcwwwjbbvvlplnpndnddjcjcttrgrggjvjsjvjssnsmshmhrmhhfvvdqqppmbbjnbnzzzwlzzfmmlttvptvpphlhwhzzwffcsfsppdssvsvgsgcscmmdwwpggtcgttmlmglgmmcsccmmgffnvvvvsscstctptzzcmcsclcffnwwndnwddmgmfmvffntfnndgdrrbmrrvprrjnjcnjjsgjgmmjjjqwqhhlfljfljlclttrgttmdmhhcncwncnmccnmnqqmhmwmdwdmdfdttnggcscfsftttcjchhqghhtdthtwtgwgttlffphfhtftpfttlgtltblljmljjsmsszgsghhnnmvnmnvmvmhvvtmmdqdppclplqljllzppwgpgvpvjpvvlwldlcdcmvfrbcqfdrgqjdmpvczgmtrbhtfgbctjghwfmpqtprlnvzvbmhnmgsnbcqpdqhtstncmtrvwmjzzmsbprfvmszgvdwjwchzcvmzncfblffwvwwrdqpfnvrtlftnvhcqpwfgzdnmpqthblmqzhbdbdhmqvscfrpbjbgjgdndhlnnpcrrmrlghcwvmmmhbvdsrztbpdvhwhsphmgblzfpflhnbrvjsgsbvgcfwdlbmbsmbqfwczhhbbwntsczhljgvdwpsfmjppmdwcfchhvtrwlfgqrzbtzndqwbwqflpthhgtzrfmspfnlrrvrjttwnzzfsbzlvfwlntvcqhfntllsrdgqjdbrbvnmjgfsqshmcgtsmlrzjmmqbpfdfhlghqjnjrcnzvvmbwhwfwpbbsmpdmvvznstqpjwmthncjsvfmbhwtbfqgfmvhhwrwzrzccbmmrngfbcqgsdjlfwrlzqwrbhvhmjzqqtgqvjwgllhhgphjthwnscndjfhrdzjctthwfszztvtzcnvsnfdwnvrrbjzplgnghfsvnflhctjntrpzfgjnfzlmwzrvqcfdqqscrffjshhgmvlgdtqpbllfdspdhcccqbmpqcgctljwzdszbfzsltfmdrcvmjqmpvzzhnczlfdbrmsvfffmfzjvnthghqgtnvjtflzrrnrhqshtzslbmbghvtqcmbdgzcmmrpbtqlzbzjhhgfcbrbcztlhdcfqccqsgdqdfrvlsprbhwhtmjfbzlzfpcslcddzdhbhstvqjgdfwdwzfhrzpthnzgmzrrbrszvcwhbdczzcnqsqrwdpmgdmcdmccmfdwdfmzpbbsdtjlmlvcnvhhgcltwmpzqmjlpbsbfrrntrbmrrmgqrdsbfcgnqvnmwwgnmvvpjzpwbvwfzzfcfrbgdshrvbpdlbpzdsvjnrsmfttqgbngjbqcnhhhmrnlgwjnlfcsdwccqqlzcdrcqnjlmsfqldgdmwlctstcvqbvvwvhvrnhvtgpcnsstnhvlttdnstlndnpdglqlbgggqlwqpfztgzvhqqwbctvgtrmrbpmvwlztsfbrmhhpfdtnsjcjmngsqtzvhqjnwmgcrjbhvghpnrjlrhjfrfrmbzvprpzlcshbqtlnlmqmfhsmbznjmpzwljccngbsvqqmghqsqwwmtqhgddnpcmmlfvmplgptzmfsmpntprnwlpjmsdsntpmpnhwlqgfwslrnjlmvhvqsnlcssvrqvtvfhhghbhnvmpngtdmrcmftjmwgnptbmjcwvrqqbczmtdprlltcjcggvffvjwdthbhvjvhbsmfnstqvczmvsgsqfjmddszzrwnbrbvlhgltjddczwpzpsgfgbtmgmssbszhjfbprpbgsqpvgwfnmpcdwfzwbfbtfwhjbjgrctcwqgfhpvjpjssmcpppwpbnlfsrmbzqdpmpmqjtzqmqswpfhfvfltwnfbltvdmfgmpbhzzdrbtnmmjfqgtrgmrbsgplfrmlnjrggtslngnphcvcwvqsdftlhddhpsdwlhzcrfwgwbndplwjmtrltmswwdqjpgmmcdchllzdgpfpfrvqrmvppvzcrvbswzdclnqnqvmfvjtpzpvzlmbngtrrjwpgqjgrrqbqwcvjlgqzddtcfmmrqtnjppqvztfpdrdmjpsqqvzrhwjgvdwwdtmrzrvhwgsqvjjrtsdtwfwhrbcsqdblhgwzghrqrqtfbzszrmjqbhrtsrcfjlzbcjmdnpthrtbhtzmhgpfcqndwpmtlvzschzzcqdnzdrfhczsrscvttlpslrzgvwprwppmpfjqwhtnhzcdjjwmsnvqzmtlzsdpbdtdtsmbmjszsglrldcsgtnmbgsjfmnrftnmvnjtswrmdthvstmdlsnsmrbqhdlpnmnhjhcccgnzrrsljvwswmhjqrrfbwwhgrcttsdcjsdtlgmgblfnvwmgztbbzlbrdnspfnvwvhzlztdhlzhwwppgwwvrhfbjvrmjpjflqzbdnlvptmrsggqmzgmzlsdzbfqnqzzdnzfgmhncvwmgrcfrmlnwzcwdsvtwbvcqpmgcczbnnfdrlsgnfgnpbdstdmwhlprnzvhjpznsgwhfhzfwmjsvcbwccpsnfgbzrltcbwczcmzwljcswgwjnhwtjrjvgrggsrqszscrjcghnwdzpzhttrjcgwvmtcwmrhvwptlgfjpdjpnhphmzdgfdvsncswbdvjdtsgdtlsgjljlczgrwbswtbwrcfpmhgfjfnhpsmfrrtcjmpvvscmgftpprdmbjwcvhzbrmpbvhgzwftwtvvhrjmljgjhbpnbnfntmjhvjrzwlqbtqlrfbblgmfsbgzhhscgwgzrwvflnfctngtwbvdbbgspntclnbwgpppjgbrlqvtfznpdttrsplvjfsgbjwjprbvdfvjtffbhsjwgbsfschfnmlqdfzmdwzvfctjjvzncdvrdttlpvpgvsssflpfnrzgfznzlldrbgnnztngtlbbrmrmlfnnspsvvsfzfbmsblmzdwqcrftvnbvdlhgdqjtglclpzrchtlffrfwslqjvbfpvnhmdgqrcjtbhmjqwqzpfndqbwldbzmwqsptdccczmhwmdqqzcqvmbbnmqndtspmbtggcghdhsfgrjgvwjdbwmltbhdvdtgqnpqhwmhzpzbqjtnlftqrjbsvtwtgpmvpnfwdtsjgdtfnlntpgrmwphphrrzhbdrbzhtqddwvptdllntjzldzrndhfjwdfnmtjmjtfmndbvlwgmlcmwwlpfdjwbfznbllbmqrlmvljngvpmdlqmvdvwvpqwlbqssqcbnrmhdvrzwljstghmhntwsbqmnlpgthbwmrznbbggthtjhnndnqbzmcrtftcbnpctqjzghdfcvmmvpqwtnntstlspfsgwfdbrlsbwgbhhbfcvwrjclsgmmbqmmjwtdjqppjvcbnbvfwczlqzbtnlhzhssglgnlm`;

function findLength(string) {
    const stringToArray = string.split("");
    // console.log(stringToArray);

    const warehouse = [];
    let charIndex;
    let charValue;

    for (let i = 0; i < stringToArray.length; i++) {
        let j = i + 1;
        let k = j + 1;
        let l = k + 1;
        let m = l + 1;
        let n = m + 1;
        let o = n + 1;
        let p = o + 1;
        let q = p + 1;
        let r = q + 1;
        let s = r + 1;
        let t = s + 1;
        let u = t + 1;
        let v = u + 1;

        if (
            stringToArray[i] !== stringToArray[j] &&
            stringToArray[i] !== stringToArray[k] &&
            stringToArray[i] !== stringToArray[l] &&
            stringToArray[i] !== stringToArray[m] &&
            stringToArray[i] !== stringToArray[n] &&
            stringToArray[i] !== stringToArray[o] &&
            stringToArray[i] !== stringToArray[p] &&
            stringToArray[i] !== stringToArray[q] &&
            stringToArray[i] !== stringToArray[r] &&
            stringToArray[i] !== stringToArray[s] &&
            stringToArray[i] !== stringToArray[t] &&
            stringToArray[i] !== stringToArray[u] &&
            stringToArray[i] !== stringToArray[v] &&
            stringToArray[j] !== stringToArray[k] &&
            stringToArray[j] !== stringToArray[l] &&
            stringToArray[j] !== stringToArray[m] &&
            stringToArray[j] !== stringToArray[n] &&
            stringToArray[j] !== stringToArray[o] &&
            stringToArray[j] !== stringToArray[p] &&
            stringToArray[j] !== stringToArray[q] &&
            stringToArray[j] !== stringToArray[r] &&
            stringToArray[j] !== stringToArray[s] &&
            stringToArray[j] !== stringToArray[t] &&
            stringToArray[j] !== stringToArray[u] &&
            stringToArray[j] !== stringToArray[v] &&
            stringToArray[k] !== stringToArray[l] &&
            stringToArray[k] !== stringToArray[m] &&
            stringToArray[k] !== stringToArray[n] &&
            stringToArray[k] !== stringToArray[o] &&
            stringToArray[k] !== stringToArray[p] &&
            stringToArray[k] !== stringToArray[q] &&
            stringToArray[k] !== stringToArray[r] &&
            stringToArray[k] !== stringToArray[s] &&
            stringToArray[k] !== stringToArray[t] &&
            stringToArray[k] !== stringToArray[u] &&
            stringToArray[k] !== stringToArray[v] &&
            stringToArray[l] !== stringToArray[m] &&
            stringToArray[l] !== stringToArray[n] &&
            stringToArray[l] !== stringToArray[o] &&
            stringToArray[l] !== stringToArray[p] &&
            stringToArray[l] !== stringToArray[q] &&
            stringToArray[l] !== stringToArray[r] &&
            stringToArray[l] !== stringToArray[s] &&
            stringToArray[l] !== stringToArray[t] &&
            stringToArray[l] !== stringToArray[u] &&
            stringToArray[l] !== stringToArray[v] &&
            stringToArray[m] !== stringToArray[n] &&
            stringToArray[m] !== stringToArray[o] &&
            stringToArray[m] !== stringToArray[p] &&
            stringToArray[m] !== stringToArray[q] &&
            stringToArray[m] !== stringToArray[r] &&
            stringToArray[m] !== stringToArray[s] &&
            stringToArray[m] !== stringToArray[t] &&
            stringToArray[m] !== stringToArray[u] &&
            stringToArray[m] !== stringToArray[v] &&
            stringToArray[n] !== stringToArray[o] &&
            stringToArray[n] !== stringToArray[p] &&
            stringToArray[n] !== stringToArray[q] &&
            stringToArray[n] !== stringToArray[r] &&
            stringToArray[n] !== stringToArray[s] &&
            stringToArray[n] !== stringToArray[t] &&
            stringToArray[n] !== stringToArray[u] &&
            stringToArray[n] !== stringToArray[v] &&
            stringToArray[o] !== stringToArray[p] &&
            stringToArray[o] !== stringToArray[q] &&
            stringToArray[o] !== stringToArray[r] &&
            stringToArray[o] !== stringToArray[s] &&
            stringToArray[o] !== stringToArray[t] &&
            stringToArray[o] !== stringToArray[u] &&
            stringToArray[o] !== stringToArray[v] &&
            stringToArray[p] !== stringToArray[q] &&
            stringToArray[p] !== stringToArray[r] &&
            stringToArray[p] !== stringToArray[s] &&
            stringToArray[p] !== stringToArray[t] &&
            stringToArray[p] !== stringToArray[u] &&
            stringToArray[p] !== stringToArray[v] &&
            stringToArray[q] !== stringToArray[r] &&
            stringToArray[q] !== stringToArray[s] &&
            stringToArray[q] !== stringToArray[t] &&
            stringToArray[q] !== stringToArray[u] &&
            stringToArray[q] !== stringToArray[v] &&
            stringToArray[r] !== stringToArray[s] &&
            stringToArray[r] !== stringToArray[t] &&
            stringToArray[r] !== stringToArray[u] &&
            stringToArray[r] !== stringToArray[v] &&
            stringToArray[s] !== stringToArray[t] &&
            stringToArray[s] !== stringToArray[u] &&
            stringToArray[s] !== stringToArray[v] &&
            stringToArray[t] !== stringToArray[u] &&
            stringToArray[t] !== stringToArray[v] &&
            stringToArray[u] !== stringToArray[v]
        ) {
            warehouse.push(
                stringToArray[i],
                stringToArray[j],
                stringToArray[k],
                stringToArray[l],
                stringToArray[m],
                stringToArray[n],
                stringToArray[o],
                stringToArray[p],
                stringToArray[q],
                stringToArray[r],
                stringToArray[s],
                stringToArray[t],
                stringToArray[u],
                stringToArray[v]
            );
            console.log(warehouse);
            console.log("End of loop");
            // second parameter is "start at index of"
            charIndex = stringToArray.indexOf(stringToArray[v], i);
            charValue = charIndex + 1;
            // console.log(charValue);
            return charValue;
        }
    }
    return charValue;
}

// console.log(findLength(example1));
// console.log(findLength(example2));
// console.log(findLength(example3));
// console.log(findLength(example4));
// console.log(findLength(example5));
// console.log("»»»»»»»»»»»»»");
// console.log("»»»»»»»»»»»»»");
console.log("»»»»»»»»»»»»»");
console.log("Puzzle answer is:");
console.log(findLength(example6));
