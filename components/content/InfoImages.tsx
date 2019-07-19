import styled from '@emotion/styled';

const ForegroundImg = styled.img`
    display: block;
    margin: 0 auto;
    border: 1px solid black;
    border-radius: 4px;
    width: 100vw;
    max-width: 1200px;`

const ForegroundSmallImg = styled.img`
    display: inline-block;
    margin: 0 auto;
    border: 1px solid black;
    width: 50vw;
    max-width: 600px;`    

const FrameDiv = styled.div`
    position: relative;
    //background-color: white;
    `    

const InfoDiv = styled.div`
    position: absolute;
    right: 10%;
    top: 10%;
    width: 20rem;
    padding: 0.75rem;
    border: 1px solid black;
    border-radius: 4px;
    opacity: .9;
    background-color: white;  
    z-index: 1;  

    @media screen and (max-width: 1100px) {
        position: relative;
        right: 0;
        left: 0;
        margin: 0 auto;
    }
    `   

export const InfoImages = () => (
    <>
        <FrameDiv>
            <ForegroundImg src="/static/gallery/6.jpg" />
            <InfoDiv>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur? Quisque tincidunt scelerisque libero. Etiam dui sem, fermentum vitae, sagittis id, malesuada in, quam. Cras elementum. Proin mattis lacinia justo. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. In sem justo, commodo ut, suscipit at, pharetra vitae, orci. Donec quis nibh at felis congue commodo. Morbi scelerisque luctus velit. Integer imperdiet lectus quis justo. Nullam dapibus fermentum ipsum. Cras elementum. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus.
            </InfoDiv>
        </FrameDiv>
        <FrameDiv>
            <ForegroundImg src="/static/gallery/3.jpg" />
            <InfoDiv>
            Fusce aliquam vestibulum ipsum. Maecenas aliquet accumsan leo. Nullam faucibus mi quis velit. Nulla pulvinar eleifend sem. Nullam eget nisl. Duis sapien nunc, commodo et, interdum suscipit, sollicitudin et, dolor. Etiam quis quam. Etiam bibendum elit eget erat. Aenean placerat. Aliquam erat volutpat. Ut tempus purus at lorem.
            </InfoDiv>
        </FrameDiv>
        <ForegroundImg src="/static/gallery/2.jpg" />
        <ForegroundSmallImg src="/static/gallery/1.jpg" />
        <FrameDiv>
            <ForegroundSmallImg src="/static/gallery/4.jpg" />
            <InfoDiv>
            Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos hymenaeos. In laoreet, magna id viverra tincidunt, sem odio bibendum justo, vel imperdiet sapien wisi sed libero. Phasellus et lorem id felis nonummy placerat. Morbi scelerisque luctus velit. Mauris elementum mauris vitae tortor. Mauris dictum facilisis augue. Nullam feugiat, turpis at pulvinar vulputate, erat libero tristique tellus, nec bibendum odio risus sit amet ante. Phasellus et lorem id felis nonummy placerat. Maecenas fermentum, sem in pharetra pellentesque, velit turpis volutpat ante, in pharetra metus odio a lectus. 
            </InfoDiv>
        </FrameDiv>
        <FrameDiv>
            <ForegroundSmallImg src="/static/gallery/5.jpg" />
            <InfoDiv>
            Curabitur bibendum justo non orci. Pellentesque pretium lectus id turpis. Maecenas fermentum, sem in pharetra pellentesque, velit turpis volutpat ante, in pharetra metus odio a lectus. Morbi scelerisque luctus velit. In dapibus augue non sapien.
            </InfoDiv>
        </FrameDiv>        
        <ForegroundSmallImg src="/static/gallery/10.jpg" />
    </>
)