import george_washington_img from 'assets/images/presidents/george_washington.jpg'
import john_adams_img from 'assets/images/presidents/john_adams.jpg'
import thomas_jefferson_img from 'assets/images/presidents/thomas_jefferson.jpg'
import james_madison_img from 'assets/images/presidents/james_madison.jpg'
import james_monroe_img from 'assets/images/presidents/james_monroe.jpg'
import john_quincy_adams_img from 'assets/images/presidents/john_quincy_adams.jpg'
import andrew_jackson_img from 'assets/images/presidents/andrew_jackson.jpg'
import martin_van_buren_img from 'assets/images/presidents/martin_van_buren.jpg'
import william_henry_harrison_img from 'assets/images/presidents/william_henry_harrison.jpg'
import john_tyler_img from 'assets/images/presidents/john_tyler.jpg'
import james_k_polk_img from 'assets/images/presidents/james_k_polk.jpg'
import zachary_taylor_img from 'assets/images/presidents/zachary_taylor.jpg'
import millard_fillmore_img from 'assets/images/presidents/millard_fillmore.jpg'
import franklin_pierce_img from 'assets/images/presidents/franklin_pierce.jpg'
import james_buchanan_img from 'assets/images/presidents/james_buchanan.jpg'
import abraham_lincoln_img from 'assets/images/presidents/abraham_lincoln.jpg'
import andrew_johnson_img from 'assets/images/presidents/andrew_johnson.jpg'
import ulysses_s_grant_img from 'assets/images/presidents/ulysses_s_grant.jpg'
import rutherford_b_hayes_img from 'assets/images/presidents/rutherford_b_hayes.jpg'
import james_a_garfield_img from 'assets/images/presidents/james_a_garfield.jpg'
import chester_a_arthur_img from 'assets/images/presidents/chester_a_arthur.jpg'
import grover_cleveland_img from 'assets/images/presidents/grover_cleveland.jpg'
import benjamin_harrison_img from 'assets/images/presidents/benjamin_harrison.jpg'
import william_mckinley_img from 'assets/images/presidents/william_mckinley.jpg'
import theodore_roosevelt_img from 'assets/images/presidents/theodore_roosevelt.jpg'
import william_howard_taft_img from 'assets/images/presidents/william_howard_taft.jpg'
import woodrow_wilson_img from 'assets/images/presidents/woodrow_wilson.jpg'
import warren_g_harding_img from 'assets/images/presidents/warren_g_harding.jpg'
import calvin_coolidge_img from 'assets/images/presidents/calvin_coolidge.jpg'
import herbert_hoover_img from 'assets/images/presidents/herbert_hoover.jpg'
import franklin_d_roosevelt_img from 'assets/images/presidents/franklin_d_roosevelt.jpg'
import harry_s_truman_img from 'assets/images/presidents/harry_s_truman.jpg'
import dwight_d_eisenhower_img from 'assets/images/presidents/dwight_d_eisenhower.jpg'
import john_f_kennedy_img from 'assets/images/presidents/john_f_kennedy.jpg'
import lyndon_b_johnson_img from 'assets/images/presidents/lyndon_b_johnson.jpg'
import richard_nixon_img from 'assets/images/presidents/richard_nixon.jpg'
import gerald_ford_img from 'assets/images/presidents/gerald_ford.jpg'
import jimmy_carter_img from 'assets/images/presidents/jimmy_carter.jpg'
import ronald_reagan_img from 'assets/images/presidents/ronald_reagan.jpg'
import george_h_w_bush_img from 'assets/images/presidents/george_h_w_bush.jpg'
import bill_clinton_img from 'assets/images/presidents/bill_clinton.jpg'
import george_w_bush_img from 'assets/images/presidents/george_w_bush.jpg'
import barack_obama_img from 'assets/images/presidents/barack_obama.jpg'
import donald_trump_img from 'assets/images/presidents/donald_trump.jpg'
import joe_biden_img from 'assets/images/presidents/joe_biden.jpg'

const PRESIDENTS = [
    {
        "number": 1,
        "name": "George Washington",
        "image": george_washington_img,
        "start": Date.parse("1789-04-30"),
        "end": Date.parse("1797-03-04")
    },
    {
        "number": 2,
        "name": "John Adams",
        "image": john_adams_img,
        "start": Date.parse("1797-03-04"),
        "end": Date.parse("1801-03-04")
    },
    {
        "number": 3,
        "name": "Thomas Jefferson",
        "image": thomas_jefferson_img,
        "start": Date.parse("1801-03-04"),
        "end": Date.parse("1809-03-04")
    },
    {
        "number": 4,
        "name": "James Madison",
        "image": james_madison_img,
        "start": Date.parse("1809-03-04"),
        "end": Date.parse("1817-03-04")
    },
    {
        "number": 5,
        "name": "James Monroe",
        "image": james_monroe_img,
        "start": Date.parse("1817-03-04"),
        "end": Date.parse("1825-03-04")
    },
    {
        "number": 6,
        "name": "John Quincy Adams",
        "image": john_quincy_adams_img,
        "start": Date.parse("1825-03-04"),
        "end": Date.parse("1829-03-04")
    },
    {
        "number": 7,
        "name": "Andrew Jackson",
        "image": andrew_jackson_img,
        "start": Date.parse("1829-03-04"),
        "end": Date.parse("1837-03-04")
    },
    {
        "number": 8,
        "name": "Martin Van Buren",
        "image": martin_van_buren_img,
        "start": Date.parse("1837-03-04"),
        "end": Date.parse("1841-03-04")
    },
    {
        "number": 9,
        "name": "William Henry Harrison",
        "image": william_henry_harrison_img,
        "start": Date.parse("1841-03-04"),
        "end": Date.parse("1841-04-04")
    },
    {
        "number": 10,
        "name": "John Tyler",
        "image": john_tyler_img,
        "start": Date.parse("1841-04-04"),
        "end": Date.parse("1845-03-04")
    },
    {
        "number": 11,
        "name": "James K. Polk",
        "image": james_k_polk_img,
        "start": Date.parse("1845-03-04"),
        "end": Date.parse("1849-03-04")
    },
    {
        "number": 12,
        "name": "Zachary Taylor",
        "image": zachary_taylor_img,
        "start": Date.parse("1849-03-04"),
        "end": Date.parse("1850-07-09")
    },
    {
        "number": 13,
        "name": "Millard Fillmore",
        "image": millard_fillmore_img,
        "start": Date.parse("1850-07-09"),
        "end": Date.parse("1853-03-04")
    },
    {
        "number": 14,
        "name": "Franklin Pierce",
        "image": franklin_pierce_img,
        "start": Date.parse("1853-03-04"),
        "end": Date.parse("1857-03-04")
    },
    {
        "number": 15,
        "name": "James Buchanan",
        "image": james_buchanan_img,
        "start": Date.parse("1857-03-04"),
        "end": Date.parse("1861-03-04")
    },
    {
        "number": 16,
        "name": "Abraham Lincoln",
        "image": abraham_lincoln_img,
        "start": Date.parse("1861-03-04"),
        "end": Date.parse("1865-04-15")
    },
    {
        "number": 17,
        "name": "Andrew Johnson",
        "image": andrew_johnson_img,
        "start": Date.parse("1865-04-15"),
        "end": Date.parse("1869-03-04")
    },
    {
        "number": 18,
        "name": "Ulysses S. Grant",
        "image": ulysses_s_grant_img,
        "start": Date.parse("1869-03-04"),
        "end": Date.parse("1877-03-04")
    },
    {
        "number": 19,
        "name": "Rutherford B. Hayes",
        "image": rutherford_b_hayes_img,
        "start": Date.parse("1877-03-04"),
        "end": Date.parse("1881-03-04")
    },
    {
        "number": 20,
        "name": "James A. Garfield",
        "image": james_a_garfield_img,
        "start": Date.parse("1881-03-04"),
        "end": Date.parse("1881-09-19")
    },
    {
        "number": 21,
        "name": "Chester A. Arthur",
        "image": chester_a_arthur_img,
        "start": Date.parse("1881-09-19"),
        "end": Date.parse("1885-03-04")
    },
    {
        "number": 22,
        "name": "Grover Cleveland",
        "image": grover_cleveland_img,
        "start": Date.parse("1885-03-04"),
        "end": Date.parse("1889-03-04")
    },
    {
        "number": 23,
        "name": "Benjamin Harrison",
        "image": benjamin_harrison_img,
        "start": Date.parse("1889-03-04"),
        "end": Date.parse("1893-03-04")
    },
    {
        "number": 24,
        "name": "Grover Cleveland",
        "image": grover_cleveland_img,
        "start": Date.parse("1893-03-04"),
        "end": Date.parse("1897-03-04")
    },
    {
        "number": 25,
        "name": "William McKinley",
        "image": william_mckinley_img,
        "start": Date.parse("1897-03-04"),
        "end": Date.parse("1901-09-14")
    },
    {
        "number": 26,
        "name": "Theodore Roosevelt",
        "image": theodore_roosevelt_img,
        "start": Date.parse("1901-09-14"),
        "end": Date.parse("1909-03-04")
    },
    {
        "number": 27,
        "name": "William Howard Taft",
        "image": william_howard_taft_img,
        "start": Date.parse("1909-03-04"),
        "end": Date.parse("1913-03-04")
    },
    {
        "number": 28,
        "name": "Woodrow Wilson",
        "image": woodrow_wilson_img,
        "start": Date.parse("1913-03-04"),
        "end": Date.parse("1921-03-04")
    },
    {
        "number": 29,
        "name": "Warren G. Harding",
        "image": warren_g_harding_img,
        "start": Date.parse("1921-03-04"),
        "end": Date.parse("1923-08-02")
    },
    {
        "number": 30,
        "name": "Calvin Coolidge",
        "image": calvin_coolidge_img,
        "start": Date.parse("1923-08-02"),
        "end": Date.parse("1929-03-04")
    },
    {
        "number": 31,
        "name": "Herbert Hoover",
        "image": herbert_hoover_img,
        "start": Date.parse("1929-03-04"),
        "end": Date.parse("1933-03-04")
    },
    {
        "number": 32,
        "name": "Franklin D. Roosevelt",
        "image": franklin_d_roosevelt_img,
        "start": Date.parse("1933-03-04"),
        "end": Date.parse("1945-04-12")
    },
    {
        "number": 33,
        "name": "Harry S. Truman",
        "image": harry_s_truman_img,
        "start": Date.parse("1945-04-12"),
        "end": Date.parse("1953-01-20")
    },
    {
        "number": 34,
        "name": "Dwight D. Eisenhower",
        "image": dwight_d_eisenhower_img,
        "start": Date.parse("1953-01-20"),
        "end": Date.parse("1961-01-20")
    },
    {
        "number": 35,
        "name": "John F. Kennedy",
        "image": john_f_kennedy_img,
        "start": Date.parse("1961-01-20"),
        "end": Date.parse("1963-11-22")
    },
    {
        "number": 36,
        "name": "Lyndon B. Johnson",
        "image": lyndon_b_johnson_img,
        "start": Date.parse("1963-11-22"),
        "end": Date.parse("1969-01-20")
    },
    {
        "number": 37,
        "name": "Richard Nixon",
        "image": richard_nixon_img,
        "start": Date.parse("1969-01-20"),
        "end": Date.parse("1974-08-09")
    },
    {
        "number": 38,
        "name": "Gerald Ford",
        "image": gerald_ford_img,
        "start": Date.parse("1974-08-09"),
        "end": Date.parse("1977-01-20")
    },
    {
        "number": 39,
        "name": "Jimmy Carter",
        "image": jimmy_carter_img,
        "start": Date.parse("1977-01-20"),
        "end": Date.parse("1981-01-20")
    },
    {
        "number": 40,
        "name": "Ronald Reagan",
        "image": ronald_reagan_img,
        "start": Date.parse("1981-01-20"),
        "end": Date.parse("1989-01-20")
    },
    {
        "number": 41,
        "name": "George H. W. Bush",
        "image": george_h_w_bush_img,
        "start": Date.parse("1989-01-20"),
        "end": Date.parse("1993-01-20")
    },
    {
        "number": 42,
        "name": "Bill Clinton",
        "image": bill_clinton_img,
        "start": Date.parse("1993-01-20"),
        "end": Date.parse("2001-01-20")
    },
    {
        "number": 43,
        "name": "George W. Bush",
        "image": george_w_bush_img,
        "start": Date.parse("2001-01-20"),
        "end": Date.parse("2009-01-20")
    },
    {
        "number": 44,
        "name": "Barack Obama",
        "image": barack_obama_img,
        "start": Date.parse("2009-01-20"),
        "end": Date.parse("2017-01-20")
    },
    {
        "number": 45,
        "name": "Donald Trump",
        "image": donald_trump_img,
        "start": Date.parse("2017-01-20"),
        "end": Date.parse("2021-01-20")
    },
    {
        "number": 46,
        "name": "Joe Biden",
        "image": joe_biden_img,
        "start": Date.parse("2021-01-20"),
        "end": null
    }
];
export default PRESIDENTS;