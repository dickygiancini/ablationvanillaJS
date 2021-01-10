const ancestor = 
[
    {
        name: "Jawa Timur",
        child: 
        [
            {
                name: "Surabaya",
                child: 
                [
                    {
                        name: "Jambangan",
                    },
                    {
                        name: "Gayungan",
                    },
                ]
            },
            {
                name: "Sidoarjo",
                child:
                [
                    {
                        name: "Taman",
                    },
                    {
                        name: "Waru",
                    }
                ],
            },
        ],
    },
]

console.log(ancestor)

function renderAncestor(node, depth = 0)
{
    let inheritance = "", space = ""

    for (let i = 0; i < depth; i++) {
        inheritance+="-"
        space+= " "
    }

    node.forEach(function(item) 
    {
        console.log(`${depth > 0 ? space + inheritance + "" : ""}${item.name}`)
        
        if (item.child) renderAncestor(item.child, depth += 1)
    })
}

renderAncestor(ancestor)