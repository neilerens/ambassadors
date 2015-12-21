$( document ).ready(function() {
  // http://blog.thomsonreuters.com/index.php/mobile-patent-suits-graphic-of-the-day/

  var links = [
  {source: "Aezon", target: "Current Startups", type: "Ways to get involved", url: "http://tricorder.xprize.org/teams/aezon"},
  {source: "ShapeU", target: "Current Startups", type: "Ways to get involved", url: "https://www.shapeu.co/"},
  {source: "Proscia", target: "Current Startups", type: "Ways to get involved", url: "http://proscia.com/"},
  //{source: "OccuRex", target: "Current Startups", type: "Ways to get involved", url: "http://www.harvard.edu"},
  {source: "Full Society", target: "Current Startups", type: "Ways to get involved", url: "http://www.fullsociety.org/"},
  {source: "Promotious", target: "Current Startups", type: "Ways to get involved", url: "https://www.promotious.com/"},
  //{source: "Visable", target: "Current Startups", type: "Ways to get involved", url: "http://www.harvard.edu"},
  {source: "EchoSure", target: "Current Startups", type: "Ways to get involved", url: "http://echosure.weebly.com/about-us.html"},
  {source: "Tier5", target: "Current Startups", type: "Ways to get involved", url: "http://www.tier5.com/"},
  //{source: "Current Startups", target: "Ways to get involved!", type: "Ways to get involved", url: "http://www.harvard.edu"},
  //{source: "Hophacks", target: "Organizations", type: "Organization", url: "http://www.harvard.edu"},
  {source: "Innovation Factory", target: "Organizations", type: "Organization", url: "http://ifjh.org/"},
  {source: "Alpha Kappa Psi", target: "Organizations", type: "Organization", url: "http://akpsi.johnshopkins.edu/"},
  {source: "Hopkins Student Enterprises", target: "Organizations", type: "Organization", url: "http://hse.jhu.edu/"},
  //{source: "Organizations", target: "Ways to get involved!", type: "Ways to get involved", url: "http://www.harvard.edu"},
  //{source: "Design Teams", target: "Ways to get involved!", type: "Ways to get involved", url: "http://www.harvard.edu"},
  {source: "BME Design Teams", target: "Design Teams", type: "Ways to get involved", url: "http://eng.jhu.edu/wse/cbid/page/design_teams"},
  {source: "EWH Design Teams", target: "Design Teams", type: "Ways to get involved", url: "http://ewb.jhu.edu/"},
  {source: "EE Design Teams", target: "Design Teams", type: "Ways to get involved", url: "http://engineering.jhu.edu/ece/"},
  {source: "Social Innovation Lab", target: "Design Teams", type: "affliation", url: "http://thesocialinnovationlab.org/"},
  {source: "Fast Forward", target: "Hopkins Affliates", type: "affliation", url: "http://ventures.jhu.edu/fastforward/"},
  {source: "Tech Transfer", target: "Hopkins Affliates", type: "affliation", url: "http://ventures.jhu.edu/"},
  {source: "JHU Business Development", target: "Hopkins Affliates", type: "affliation", url: "http://www.hopkinsmedicine.org/business/business_development/"},
  {source: "Carey", target: "Hopkins Affliates", type: "affliation", url: "http://carey.jhu.edu/"},
  {source: "Dreamit", target: "Hopkins Affliates", type: "affliation", url: "http://www.dreamithealth.com/"},
  {source: "Center for Leadership Education", target: "Hopkins Affliates", type: "affliation", url: "http://engineering.jhu.edu/cle/"},
  //{source: "Ways to get involved!", target: "Hopkins Entrepreneurship", type: "general", url: "http://www.harvard.edu"},
  //{source: "Hopkins Affliates", target: "Hopkins Entrepreneurship", type: "affliation", url: "http://www.harvard.edu"},
  {source: "Hophacks", target: "Events", type: "event", url: "https://hophacks.com/s15/"},
  {source: "CBID Hackathon", target: "Events", type: "event", url: "http://cbid.bme.jhu.edu/"},
  {source: "Business Plan Competition", target: "Events", type: "event", url: "http://bpc.jhu.edu/"},
  {source: "UnderArmour's Cupid's Cup", target: "Events", type: "event", url: "http://cupidscup.com/"},
  {source: "Innovation Factory Mosh Pit", target: "Events", type: "event", url: "http://ifjh.org/2014-compete/"},
  {source: "Towson Business Plan", target: "Events", type: "event", url: "http://tuincubator.com/events/business-plan-competition/"},

  //{source: "Business Plan Competition", target: "RIM", type: "event", url: "http://www.harvard.edu"},
  //{source: "UnderArmour's Cupid's Cup", target: "Qualcomm", type: "event", url: "http://www.harvard.edu"},
  {source: "General Assembly", target: "Baltimore", type: "event", url: "https://generalassemb.ly/"},
  {source: "Betamore", target: "Baltimore", type: "event", url: "http://betamore.com/"},
  {source: "AccelerateBaltimore", target: "Baltimore", type: "event", url: "http://acceleratebaltimore.com/"},
  {source: "ETC", target: "Baltimore", type: "event", url: "http://etcbaltimore.com/"},
  {source: "Beehive Baltimore", target: "Baltimore", type: "event", url: "http://etcbaltimore.com/beehive-shared-workplace/"},
  {source: "TedCo", target: "Baltimore", type: "event", url: "http://tedco.md/"},
  {source: "Abell Foundation", target: "Baltimore", type: "event", url: "http://www.abell.org/"},
  {source: "Capital Studios", target: "Baltimore", type: "event", url: "http://www.capital-studios.com/"},
  {source: "JHU Science + Technology Park", target: "Baltimore", type:"event", url: "http://scienceparkjohnshopkins.net/"},
  {source: "Founder Institute", target: "Baltimore", type: "event", url: "http://fi.co/"},

  ];

  var nodes = {};

  // Compute the distinct nodes from the links.
  links.forEach(function(link) {
    link.source = nodes[link.source] || (nodes[link.source] = {name: link.source, url: link.url});
    link.target = nodes[link.target] || (nodes[link.target] = {name: link.target, url: link.url});
  });

  var width = window.innerWidth,
      height = 800;

  var force = d3.layout.force()
    .nodes(d3.values(nodes))
    .links(links)
    .size([width, height])
    .linkDistance(150)
    .charge(-500)
    .on("tick", tick)
    .start();

  var svg = d3.select("#mindmap_entrepreneurship").append("svg")
    .attr("width", width)
    .attr("height", height);

  var link = svg.selectAll(".link")
    .data(force.links())
    .enter().append("line")
    .attr("class", "link");

  var node = svg.selectAll(".node")
    .data(force.nodes())
    .enter().append("g")
    .attr("class", "node")
    .on("mouseover", mouseover)
    .on("mouseout", mouseout)
    .on("dblclick", dblclick)
    .call(force.drag);

  node.append("circle")
    .attr("r", 4.5);

  node.append("text")
    .attr("x", 12)
    .attr("dy", ".35em")
    // .append("a")
    // .attr("xlink:href", "http://www.harvard.edu")
    .text(function(d) { return d.name; })
	.on("click", clack)
	.on("mouseover", function() {
  		d3.select(this)
		.classed("active", true ) // should then accept fill from CSS
  		})
	.on("mouseout",  function() {
	  d3.select(this)
		.classed("active", false)
	  });

    // .on("click", clack);

  function clack (d) {
    window.open(d.url);
  }

  function tick() {
    link
    .attr("x1", function(d) { return d.source.x; })
    .attr("y1", function(d) { return d.source.y; })
    .attr("x2", function(d) { return d.target.x; })
    .attr("y2", function(d) { return d.target.y; });

    node
    .attr("transform", function(d) { return "translate(" + d.x + "," + d.y + ")"; });
  }

  function mouseover() {
    d3.select(this).select("circle").transition()
      .duration(750)
      .attr("r", 8);
  }

  function mouseout() {
    d3.select(this).select("circle").transition()
      .duration(750)
      .attr("r", 4.5);
  }

  function dblclick(d) {
    d3.select(this).select("circle").transition.attr("style", "fill:red; stroke:red; stroke-width: 2px;");
  }
});