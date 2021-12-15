(window.webpackJsonp = window.webpackJsonp || []).push([
    [2], {
        246: function (e) {
            e.exports = JSON.parse('{"data":[{"id":"1","title":"BAKTI SOSIAL “KUMHAM PEDULI, KUMHAM BERBAGI DAN EMPATI KUMHAM”","type":"information","description":"Memperingati Hari Dharma Karyadhika yang ke-76,  Kepekaan sosial dalam diri setiap Insan Pengayoman, juga merupakan bentuk tanggung jawab dan rasa kesetiakawanan terhadap sesama. Penyelenggaraan bakti sosial ini diwujudkan ....","image_link":"https://picsum.photos/id/1/700/500","date":"Senin, 19 Desember 2020"},{"id":"2","title":"BAKTI SOSIAL “KUMHAM PEDULI, KUMHAM BERBAGI DAN EMPATI KUMHAM”","type":"information","description":"Memperingati Hari Dharma Karyadhika yang ke-76, Kepekaan sosial dalam diri setiap Insan Pengayoman, juga merupakan bentuk tanggung jawab dan rasa kesetiakawanan terhadap sesama. Penyelenggaraan bakti sosial ini diwujudkan ....","image_link":"https://picsum.photos/id/2/700/500","date":"Senin, 19 Desember 2020"},{"id":"3","title":"BAKTI SOSIAL “KUMHAM PEDULI, KUMHAM BERBAGI DAN EMPATI KUMHAM”","type":"information","description":"Memperingati Hari Dharma Karyadhika yang ke-76, Kepekaan sosial dalam diri setiap Insan Pengayoman, juga merupakan bentuk tanggung jawab dan rasa kesetiakawanan terhadap sesama. Penyelenggaraan bakti sosial ini diwujudkan ....","image_link":"https://picsum.photos/id/3/3700/500","date":"Senin, 19 Desember 2020"},{"id":"4","title":"BAKTI SOSIAL “KUMHAM PEDULI, KUMHAM BERBAGI DAN EMPATI KUMHAM”","type":"information","description":"Memperingati Hari Dharma Karyadhika yang ke-76, #SahabatPengayoman Bakti sosial ini bertujuan untuk menumbuhkan nilai dan kepekaan sosial dalam diri setiap Insan Pengayoman, juga merupakan bentuk tanggung jawab dan rasa kesetiakawanan terhadap sesama. Penyelenggaraan bakti sosial ini diwujudkan ....","image_link":"https://picsum.photos/id/4/3700/500","date":"Senin, 19 Desember 2020"}]}')
        },
        247: function (e, t, n) {
            "use strict";
            n.r(t);
            var r = n(7),
                o = (n(41), n(40), n(14), n(246));

            function l() {
                return new Promise((function (e, t) {
                    e(o)
                }))
            }
            var c = {
                    data: function () {
                        return {
                            informations: []
                        }
                    },
                    mounted: function () {
                        var e = this;
                        return Object(r.a)(regeneratorRuntime.mark((function t() {
                            return regeneratorRuntime.wrap((function (t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        return t.next = 2, e.listInformations();
                                    case 2:
                                    case "end":
                                        return t.stop()
                                }
                            }), t)
                        })))()
                    },
                    methods: {
                        scrollToElement: function () {
                            var e = this.$refs.content;
                            e && e.scrollIntoView({
                                behavior: "smooth"
                            })
                        },
                        listInformations: function () {
                            var e = this;
                            return Object(r.a)(regeneratorRuntime.mark((function t() {
                                return regeneratorRuntime.wrap((function (t) {
                                    for (;;) switch (t.prev = t.next) {
                                        case 0:
                                            return t.next = 2, l().then((function (t) {
                                                e.informations = t.data.map((function (t, n) {
                                                    return e.isOdd(n + 1) ? (t.position = "left", t) : (t.position = "right", t)
                                                }))
                                            }));
                                        case 2:
                                        case "end":
                                            return t.stop()
                                    }
                                }), t)
                            })))()
                        },
                        isOdd: function (e) {
                            return 1 & e
                        }
                    }
                },
                d = n(13),
                component = Object(d.a)(c, (function () {
                    var e = this,
                        t = e.$createElement,
                        n = e._self._c || t;
                    return n("div", {
                        staticClass: "w-full"
                    }, [e._m(0), e._v(" "), n("div", {
                        staticClass: "flex w-full justify-center items-center"
                    }, [n("button", {
                        staticClass: "-mt-16",
                        on: {
                            click: e.scrollToElement
                        }
                    }, [n("svg", {
                        staticClass: "text-white animate-bounce h-12 w-12",
                        attrs: {
                            xmlns: "http://www.w3.org/2000/svg",
                            fill: "none",
                            viewBox: "0 0 24 24",
                            stroke: "currentColor"
                        }
                    }, [n("path", {
                        attrs: {
                            "stroke-linecap": "round",
                            "stroke-linejoin": "round",
                            "stroke-width": "2",
                            d: "M19 9l-7 7-7-7"
                        }
                    })])])]), e._v(" "), n("div", {
                        ref: "content",
                        staticClass: "w-full bg-red-800 pt-28 pb-24"
                    }, [e._m(1)]), e._v(" "), n("div", {
                        staticClass: "bg-white w-full"
                    }, [n("p", {
                        staticClass: "text-7xl mt-36 mb-12 text-red-800 font-bold text-center"
                    }, [e._v("\n      INFORMASI\n    ")]), e._v(" "), e._l(e.informations, (function (t) {
                        return n("div", {
                            key: t.id
                        }, [n("div", {
                            staticClass: "flex items-center",
                            class: "left" === t.position ? "justify-end" : ""
                        }, [n("div", {
                            staticClass: "p-10",
                            class: "left" === t.position ? "order-1" : "order-last"
                        }, [n("div", {
                            staticClass: "w-96"
                        }, [n("p", {
                            staticClass: "capitalize text-xl text-red-600 font-semibold mb-1"
                        }, [e._v("\n              " + e._s(t.type) + "\n            ")]), e._v(" "), n("p", {
                            staticClass: "text-md text-gray-600 font-bold mb-1"
                        }, [e._v("\n              " + e._s(t.date) + "\n            ")]), e._v(" "), n("p", {
                            staticClass: "mt-6 text-xl text-gray-800 font-semibold"
                        }, [e._v("\n              " + e._s(t.title) + "\n            ")]), e._v(" "), n("p", {
                            staticClass: "mt-2 text-base text-gray-800 font-medium"
                        }, [e._v("\n              " + e._s(t.description) + "\n            ")]), e._v(" "), n("button", {
                            staticClass: "\n                bg-red-800\n                hover:bg-red-900\n                text-white\n                font-bold\n                py-2\n                px-4\n                mt-4\n              "
                        }, [e._v("\n              Baca Selengkapnya\n            ")])])]), e._v(" "), n("div", {
                            staticClass: "\n            relative\n            h-[500px]\n            w-1/2\n            overflow-hidden\n            flex\n            items-center\n            justify-center\n          ",
                            class: "left" === t.position ? "order-last" : "order-1"
                        }, [n("img", {
                            staticClass: "\n              absolute\n              w-full\n              h-full\n              transition-all\n              duration-500\n              ease-in-out\n              transform\n              hover:scale-150\n              object-cover\n            ",
                            attrs: {
                                src: t.image_link,
                                alt: "photo"
                            }
                        })])])])
                    }))], 2), e._v(" "), e._m(2)])
                }), [function () {
                    var e = this.$createElement,
                        t = this._self._c || e;
                    return t("div", {
                        staticClass: "w-full h-screen bg-gray-800"
                    }, [t("img", {
                        staticClass: "w-full h-full object-cover",
                        attrs: {
                            src: "/image/1.jpg",
                            alt: ""
                        }
                    })])
                }, function () {
                    var e = this,
                        t = e.$createElement,
                        n = e._self._c || t;
                    return n("div", {
                        staticClass: "container mx-auto px-8 text-white text-justify"
                    }, [n("p", {
                        staticClass: "text-center font-bold"
                    }, [e._v("Sambutan Direktur Politeknik Ilmu Pemasyarakatan")]), e._v(" "),
                    n("img",{
                        staticClass: "object-contain h-48 w-96 hero container max-w-screen-lg mx-auto pb-10 mt-8 flex justify-center",
                        attrs: {
                            src: "https://new.poltekip.ac.id/storage/JVtmtGQIzU5WheK0OqJ5wWdaEcEuyjUDJYmjvRcf.jpg",
                            alt: "img",
                            title: "img",

                        }
                    }), n("p", 
                    {
                        staticClass: "mt-8"
                    }, [e._v("\n        What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing\n        and typesetting industry. Lorem Ipsum has been the industry's standard\n        dummy text ever since the 1500s, when an unknown printer took a galley\n        of type and scrambled it to make a type specimen book. It has survived\n        not only five centuries, but also the leap into electronic\n        typesetting, remaining essentially unchanged. It was popularised in\n        the 1960s with the release of Letraset sheets containing Lorem Ipsum\n        passages, and more recently with desktop publishing software like\n        Aldus PageMaker including versions of Lorem Ipsum. Why do we use it?\n        It is a long established fact that a reader will be distracted by the\n        readable content of a page when looking at its layout. The point of\n        using Lorem Ipsum is that it has a more-or-less normal distribution of\n        letters, as opposed to using 'Content here, content here', making it\n        look like readable English. Many desktop publishing packages and web\n        page editors now use Lorem Ipsum as their default model text, and a\n        search for 'lorem ipsum' will uncover many web sites still in their\n        infancy. Various versions have evolved over the years, sometimes by\n        accident, sometimes on purpose (injected humour and the like). Where\n        does it come from? Contrary to popular belief, Lorem Ipsum is not\n        simply random text. It has roots in a piece of classical Latin\n        literature from 45 BC, making it over 2000 years old. Richard\n        McClintock, a Latin professor at Hampden-Sydney College in Virginia,\n        looked up one of the more obscure Latin words, consectetur, from a\n        Lorem Ipsum passage, and going through the cites of the word in\n        classical literature, discovered the undoubtable source. Lorem Ipsum\n        comes from sections 1.10.32 and 1.10.33 of \"de Finibus Bonorum et\n        Malorum\" (The Extremes of Good and Evil) by Cicero, written in 45 BC.\n        This book is a treatise on the theory of ethics, very popular during\n        the Renaissance. The first line of Lorem Ipsum, \"Lorem ipsum dolor sit\n        amet..\", comes from a line in section 1.10.32. The standard chunk of\n        Lorem Ipsum used since the 1500s is reproduced below for those\n        interested. Sections 1.10.32 and 1.10.33 from \"de Finibus Bonorum et\n        Malorum\" by Cicero are also reproduced in their exact original form,\n        accompanied by English versions from the 1914 translation by H.\n        Rackham. Where can I get some? There are many variations of passages\n        of Lorem Ipsum available, but the majority have suffered alteration in\n        some form, by injected humour, or randomised words which don't look\n        even slightly believable. If you are going to use a passage of Lorem\n        Ipsum, you need to be sure there isn't anything embarrassing hidden in\n        the middle of text. All the Lorem Ipsum generators on the Internet\n        tend to repeat predefined chunks as necessary, making this the first\n        true generator on the Internet. It uses a dictionary of over 200 Latin\n        words, combined with a handful of model sentence structures, to\n        generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum\n        is therefore always free from repetition, injected humour, or\n        non-characteristic words etc.\n      ")])])
                }, function () {
                    var e = this,
                        t = e.$createElement,
                        n = e._self._c || t;
                    return n("div", {
                        staticClass: "mt-16 container mx-auto font-bold"
                    }, [n("p", {
                        staticClass: "text-7xl text-center text-red-800"
                    }, [e._v("Berita Terbaru")]), e._v(" "), n("div", {
                        staticClass: "mt-16 grid grid-cols-3 gap-4"
                    }, [n("div", {
                        staticClass: "w-full justify-center bg-white flex flex-col"
                    }, [n("img", {
                        staticClass: "w-full h-auto object-cover",
                        attrs: {
                            src: "https://picsum.photos/id/2/300/300",
                            alt: "img",
                            title: "img"
                        }
                    }), e._v(" "), n("div", {
                        staticClass: "bg-gray-100 w-full p-4 justify-start flex flex-col"
                    }, [n("p", {
                        staticClass: "my-4 text-3xl text-gray-700"
                    }, [e._v("\n            Politeknik Ilmu Pemasyarakatan\n")]), e._v(" "), n("div", {
                        staticClass: "flex justify-between"
                    }, [n("div", {
                        staticClass: "text-black"
                    }, [e._v("Kemerdekaan")]), e._v(" "), n("div", {
                        staticClass: "text-black"
                    }, [e._v("MAR 24, 2021")])])])]), e._v(" "), n("div", {
                        staticClass: "w-full bg-white flex flex-col"
                    }, [n("img", {
                        staticClass: "w-full h-auto object-cover",
                        attrs: {
                            src: "https://picsum.photos/id/4/300/300",
                            alt: "img",
                            title: "img"
                        }
                    }), e._v(" "), n("div", {
                        staticClass: "bg-gray-100 w-full p-4 justify-start flex flex-col"
                    }, [n("p", {
                        staticClass: "my-4 text-3xl text-gray-700"
                    }, [e._v("\n            Politeknik Ilmu Pemasyarakatan")]), e._v(" "), n("div", {
                        staticClass: "flex justify-between"
                    }, [n("div", {
                        staticClass: "text-black"
                    }, [e._v("Kemerdekaan")]), e._v(" "), n("div", {
                        staticClass: "text-black"
                    }, [e._v("MAR 24, 2021")])])])]), e._v(" "), n("div", {
                        staticClass: "w-full bg-white flex flex-col"
                    }, [n("img", {
                        staticClass: "w-full h-auto object-cover",
                        attrs: {
                            src: "https://picsum.photos/id/3/300/300",
                            alt: "img",
                            title: "img"
                        }
                    }), e._v(" "), n("div", {
                        staticClass: "bg-gray-100 w-full p-4 justify-start flex flex-col"
                    }, [n("p", {
                        staticClass: "my-4 text-3xl text-gray-700"
                    }, [e._v("\n            Politeknik Ilmu Pemasyarakatan\n          ")]), e._v(" "), n("div", {
                        staticClass: "flex justify-between"
                    }, [n("div", {
                        staticClass: "text-black"
                    }, [e._v("Kemerdekaan")]), e._v(" "), n("div", {
                        staticClass: "text-black"
                    }, [e._v("MAR 24, 2021")])])])])])])
                }], !1, null, null, null);
            t.default = component.exports
        }
    }
]);