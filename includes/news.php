
<?php

include $_SERVER['DOCUMENT_ROOT'] . '/utilities/db-config.php';

// Create a connection to the database
$conn = new mysqli($host, $user, $pass, $db);

// Check the connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Query to get the latest 3 posts
$sql = "SELECT title, content, image_url, category, category_colour, read_more_url, employee_name, profile_img, date 
        FROM news_posts 
        ORDER BY date DESC 
        LIMIT 3";
$result = $conn->query($sql);
?>


<!--News-->
    <div class="container">
        
                <div class="news__h1"><h1>Latest News</h1></div>
                <div class="news__view-all--top"><h2>View All <i class="icon-arrow-right-solid"></i></h2></div>
                    
                <div class="news__cards-container">

                    <?php if ($result->num_rows > 0): ?>
                        <?php while ($row = $result->fetch_assoc()): ?>
                            <div class="news__card">

                                <!--Card Header-->
                                <div class="news__card--header">
                                    <div class="news__card--banner">
                                        <!-- Display category name and apply colour -->
                                            <span class="news__badge" style="background-color: <?= htmlspecialchars($row['category_colour']); ?>">
                                                <?= htmlspecialchars($row['category']); ?>
                                            </span>
                                        <!-- Display banner image -->
                                        <img src="<?= htmlspecialchars($row['image_url']); ?>" alt="<?= htmlspecialchars($row['title']); ?>">
                                    </div>
                                </div>

                                <div class="news__card--main">

                                <!--Card Body-->
                                    <div class="news__card--body">
                                        <!-- Display title and content -->
                                        <h2 style="color: <?= htmlspecialchars($row['category_colour']); ?>"><?= htmlspecialchars($row['title']); ?> <span class="read-time"></span></h2>
                                            <p><?= htmlspecialchars($row['content']); ?></p>
                                        <!-- Link to full article -->
                                        <a href="<?= htmlspecialchars($row['read_more_url']); ?>" class="news__read--btn" style="background-color: <?= htmlspecialchars($row['category_colour']); ?>">READ MORE</a>
                                    </div>

                                <!--Card Footer-->
                                    <div class="news__card--footer">
                                        <!-- Display profile picture (static for now) -->
                                        <img src=<?= htmlspecialchars($row['profile_img']); ?> alt="<?= htmlspecialchars($row['employee_name']); ?>" class="news__profile--pic">
                                        <div class="news__card--info">
                                            <!-- Display author and date -->
                                            <span>Posted by <?= htmlspecialchars($row['employee_name']); ?></span><br>
                                            <small><?= date("jS F Y", strtotime($row['date'])); ?></small> 
                                        </div>
                                    </div>
                                </div>
                            </div>
                        <?php endwhile; ?>
                    <?php else: ?>
                   <p>No news posts available.</p>
                  <?php endif; ?>
                </div>
            <div class="news__view-all"><h2>View All <i class="icon-arrow-right-solid"></i></h2></div>
    </div>

<?php
// Close the connection
$conn->close();
?>
